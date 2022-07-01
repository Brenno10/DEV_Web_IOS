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
const far = 1000000;

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
const sunLight = new THREE.PointLight(0xffffff, 1.5);

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
// astros ( escala em 1:10000 )

// sol
const sun = new THREE.Mesh(
    new THREE.IcosahedronGeometry(139.27, 50, 50),
    new THREE.MeshBasicMaterial({
        map: new THREE.TextureLoader().load('./assets/textures/2k/2k_sun.jpg'),
    })
);

// mercurio
const mercury = new THREE.Mesh(
    new THREE.SphereGeometry(0.48794, 50, 50),
    new THREE.MeshPhongMaterial({
        roughness: 1,
        metalness: 0,
        map: new THREE.TextureLoader().load(
            './assets/textures/2k/2k_mercury.jpg'
        ),
    })
);
mercury.receiveShadow = true;
mercury.castShadow = true;

// vênus
const venus = new THREE.Mesh(
    new THREE.SphereGeometry(1.2104, 50, 50),
    new THREE.MeshPhongMaterial({
        roughness: 1,
        metalness: 0,
        map: new THREE.TextureLoader().load(
            './assets/textures/2k/2k_venus_surface.jpg'
        ),
    })
);
venus.receiveShadow = true;
venus.castShadow = true;

// terra
const earth = new THREE.Mesh(
    new THREE.SphereGeometry(1.2742, 50, 50),
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
    new THREE.SphereGeometry(1.2842, 50, 50),
    new THREE.MeshPhongMaterial({
        roughness: 1,
        metalness: 0,
        map: new THREE.TextureLoader().load('./assets/textures/earthCloud.jpg'),
        transparent: true,
    })
);

// lua
const moon = new THREE.Mesh(
    new THREE.SphereGeometry(0.34748, 50, 50),
    new THREE.MeshPhongMaterial({
        roughness: 5,
        metalness: 0,
        map: new THREE.TextureLoader().load('./assets/textures/2k/2k_moon.jpg'),
    })
);
moon.receiveShadow = true;
moon.castShadow = true;

// marte
const mars = new THREE.Mesh(
    new THREE.SphereGeometry(0.6779, 50, 50),
    new THREE.MeshPhongMaterial({
        roughness: 1,
        metalness: 0,
        map: new THREE.TextureLoader().load('./assets/textures/2k/2k_mars.jpg'),
    })
);
mars.receiveShadow = true;
mars.castShadow = true;

// jupiter
const jupiter = new THREE.Mesh(
    new THREE.SphereGeometry(13.982, 50, 50),
    new THREE.MeshPhongMaterial({
        roughness: 1,
        metalness: 0,
        map: new THREE.TextureLoader().load(
            './assets/textures/2k/2k_jupiter.jpg'
        ),
    })
);
jupiter.receiveShadow = true;
jupiter.castShadow = true;

// saturno
const saturn = new THREE.Mesh(
    new THREE.SphereGeometry(11.646, 50, 50),
    new THREE.MeshPhongMaterial({
        roughness: 1,
        metalness: 0,
        map: new THREE.TextureLoader().load(
            './assets/textures/2k/2k_saturn.jpg'
        ),
    })
);
saturn.receiveShadow = true;
saturn.castShadow = true;

// urano
const uranus = new THREE.Mesh(
    new THREE.SphereGeometry(5.0724, 50, 50),
    new THREE.MeshPhongMaterial({
        roughness: 1,
        metalness: 0,
        map: new THREE.TextureLoader().load(
            './assets/textures/2k/2k_uranus.jpg'
        ),
    })
);
uranus.receiveShadow = true;
uranus.castShadow = true;

// netuno
const neptune = new THREE.Mesh(
    new THREE.SphereGeometry(4.9244, 50, 50),
    new THREE.MeshPhongMaterial({
        roughness: 1,
        metalness: 0,
        map: new THREE.TextureLoader().load(
            './assets/textures/2k/2k_neptune.jpg'
        ),
    })
);
neptune.receiveShadow = true;
neptune.castShadow = true;

// plano de fundo
const stars = new THREE.Mesh(
    new THREE.SphereGeometry(900000, 64, 64),
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

const earthGroup = new THREE.Group();
earthGroup.add(earth);
earthGroup.add(clouds);

//
// posições iniciais
camera.position.set(0, 0, 400); // câmera
stars.position.set(0, 0, 0); // plano de fundo
sunGroup.position.set(0, 0, 0); // sol
mercury.position.set(170, 0, 0);
venus.position.set(180, 0, 0);
earthGroup.position.set(190, 0, 0);
moon.position.set(190, 3, 0);
mars.position.set(200, 0, 0);
jupiter.position.set(230, 0, 0);
saturn.position.set(265, 0, 0);
uranus.position.set(290, 0, 0);
neptune.position.set(310, 0, 0);

//
// layers

// 1
stars.layers.set(1);
sun.layers.set(1);

// 0
mercury.layers.set(0);
venus.layers.set(0);
earth.layers.set(0);
clouds.layers.set(0);
moon.layers.set(0);
mars.layers.set(0);
jupiter.layers.set(0);
saturn.layers.set(0);
uranus.layers.set(0);
neptune.layers.set(0);

//
// adicionando na cena
scene.add(camera);
scene.add(ambientLight);
scene.add(stars);
scene.add(sunGroup);
scene.add(mercury);
scene.add(venus);
scene.add(earthGroup);
scene.add(moon);
scene.add(mars);
scene.add(jupiter);
scene.add(saturn);
scene.add(uranus);
scene.add(neptune);

//
// animações
function animation() {
    requestAnimationFrame(animation); // função responsavel pela animação

    controls.update();
    camera.layers.set(1);
    bloomComposer.render();
    renderer.clearDepth();
    camera.layers.set(0);
    renderer.render(scene, camera);
}
animation();
