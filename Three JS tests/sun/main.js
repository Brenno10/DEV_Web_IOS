import * as THREE from 'three';
import { BackSide } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';

//
//variaveis

// variaveis padrão
let scene;
let camera;
let renderer;
const canvas = document.getElementsByTagName('canvas')[0];

// variaveis da câmera
const fov = 60;
const aspect = window.innerWidth / window.innerHeight;
const near = 0.01;
const far = 100000;

//
// inicializações

// iniciando câmera, cena e renderizador
scene = new THREE.Scene();
camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });

// iniciando bloom pass
const renderScene = new RenderPass(scene, camera);
const bloomPass = new UnrealBloomPass(
    new THREE.Vector2(window.innerWidth, window.innerHeight),
    1.5,
    0.4,
    0.85
);

// iniciando effect composer
const bloomComposer = new EffectComposer(renderer);

// iniciando luz ambiente
const ambientLight = new THREE.AmbientLight(0xffffff, 0.015);

// iniciando ponto de luz
const sunLight = new THREE.PointLight(0xffffff, 2.5);

// iniciando orbit controls
const controls = new OrbitControls(camera, document.querySelector('canvas'));

//
// configurações

// configurações do renderer
renderer.autoClear = false;
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio ? window.devicePixelRatio : 1);
renderer.setClearColor(0x000000, 0.0);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

// configurações do bloom pass
bloomPass.threshold = 0;
bloomPass.strength = 2;
bloomPass.radius = 0;

// configurações do effect composer
bloomComposer.setSize(window.innerWidth, window.innerHeight);
bloomComposer.renderToScreen = true;
bloomComposer.addPass(renderScene);
bloomComposer.addPass(bloomPass);

// configurações do orbit controls
controls.enableDamping = true;
controls.dampingFactor = 0.05;

//
// objetos

// sol
const sun = new THREE.Mesh(
    new THREE.IcosahedronGeometry(20, 50, 50),
    new THREE.MeshBasicMaterial({
        map: new THREE.TextureLoader().load('./assets/textures/sun.jpg'),
    })
);

// terra
const earth = new THREE.Mesh(
    new THREE.SphereGeometry(1, 50, 50),
    new THREE.MeshPhongMaterial({
        roughness: 1,
        metalness: 0,
        map: new THREE.TextureLoader().load('./assets/textures/earthmap1.jpg'),
    })
);
earth.receiveShadow = true;
earth.castShadow = true;

// nuvens da terra
const clouds = new THREE.Mesh(
    new THREE.SphereGeometry(1.02, 50, 50),
    new THREE.MeshPhongMaterial({
        roughness: 1,
        metalness: 0,
        map: new THREE.TextureLoader().load('./assets/textures/earthCloud.jpg'),
        transparent: true,
    })
);

// lua
const moon = new THREE.Mesh(
    new THREE.SphereGeometry(0.1, 50, 50),
    new THREE.MeshPhongMaterial({
        roughness: 5,
        metalness: 0,
        map: new THREE.TextureLoader().load('./assets/textures/8k_moon.jpg'),
    })
);
moon.receiveShadow = true;
moon.castShadow = true;

// plano de fundo
const stars = new THREE.Mesh(
    new THREE.SphereGeometry(80000, 64, 64),
    new THREE.MeshBasicMaterial({
        map: new THREE.TextureLoader().load('./assets/textures/galaxy.jpg'),
        side: BackSide,
        transparent: true,
    })
);

//
// eventos

// resize
window.addEventListener('resize', redimensionar, false);
function redimensionar() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.render(scene, camera);
}

//
// grupos
const sunGroup = new THREE.Group();
sunGroup.add(sun);
sunGroup.add(sunLight);

//
// posições iniciais
camera.position.set(0, 0, 60);
sunGroup.position.set(0, 0, 0);
earth.position.set(50, 0, 0);
clouds.position.set(50, 0, 0);
moon.position.set(53, 0, 0);

//
// layers
stars.layers.set(1);
sun.layers.set(1);
sunLight.layers.set(0);
earth.layers.set(0);
clouds.layers.set(0);
moon.layers.set(0);

//
// adicionando na cena
scene.add(camera);
scene.add(stars);
scene.add(ambientLight);
scene.add(sunGroup);
scene.add(earth);
scene.add(clouds);
scene.add(moon);

//
// animações
function animation() {
    requestAnimationFrame(animation); // função responsavel pela animação

    sunGroup.rotation.y += -0.0001;
    sunGroup.rotation.x += 0.00005;

    earth.rotation.y += 0.00015;
    earth.rotation.x += 0.00005;

    clouds.rotation.y += 0.00018;
    clouds.rotation.x -= 0.00002;

    moon.rotation.y += 0.0002;
    moon.rotation.x += 0.00005;

    stars.rotation.y += 0.000006;
    stars.rotation.x += 0.000001;

    controls.update();
    camera.layers.set(1);
    bloomComposer.render();
    renderer.clearDepth();
    camera.layers.set(0);
    renderer.render(scene, camera);
}
animation();
