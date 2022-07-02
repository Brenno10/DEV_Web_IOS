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
const far = 10000000;

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
    2,
    0,
    0
);

// iniciando effect composer
const bloomComposer = new EffectComposer(renderer);

// iniciando luz ambiente
const ambientLight = new THREE.AmbientLight(0xffffff, 0.115);

// iniciando ponto de luz
const sunLight = new THREE.PointLight(0xffffff, 1);

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
    new THREE.IcosahedronGeometry(69.55, 50),
    new THREE.MeshBasicMaterial({
        map: new THREE.TextureLoader().load('./assets/textures/2k_sun.jpg'),
        depthWrite: true,
        transparent: false,
    })
);

// mercurio
const mercury = new THREE.Mesh(
    new THREE.SphereGeometry(0.24394, 50, 50),
    new THREE.MeshPhongMaterial({
        map: new THREE.TextureLoader().load('./assets/textures/2k_mercury.jpg'),
    })
);
mercury.receiveShadow = true;
mercury.castShadow = true;

// vênus
const venus = new THREE.Mesh(
    new THREE.SphereGeometry(0.60518, 50, 50),
    new THREE.MeshPhongMaterial({
        map: new THREE.TextureLoader().load(
            './assets/textures/2k_venus_surface.jpg'
        ),
    })
);
venus.receiveShadow = true;
venus.castShadow = true;

// terra
const earth = new THREE.Mesh(
    new THREE.SphereGeometry(0.63781, 50, 50),
    new THREE.MeshPhongMaterial({
        map: new THREE.TextureLoader().load('./assets/textures/earthmap1.jpg'),
    })
);
earth.receiveShadow = true;
earth.castShadow = true;
// nuvens da terra
const clouds = new THREE.Mesh(
    new THREE.SphereGeometry(0.63881, 50, 50),
    new THREE.MeshPhongMaterial({
        map: new THREE.TextureLoader().load('./assets/textures/earthCloud.jpg'),
        transparent: true,
    })
);

// lua
const moon = new THREE.Mesh(
    new THREE.SphereGeometry(0.17381, 50, 50),
    new THREE.MeshPhongMaterial({
        map: new THREE.TextureLoader().load('./assets/textures/2k_moon.jpg'),
    })
);
moon.receiveShadow = true;
moon.castShadow = true;

// marte
const mars = new THREE.Mesh(
    new THREE.SphereGeometry(0.33962, 50, 50),
    new THREE.MeshPhongMaterial({
        map: new THREE.TextureLoader().load('./assets/textures/2k_mars.jpg'),
    })
);
mars.receiveShadow = true;
mars.castShadow = true;

// jupiter
const jupiter = new THREE.Mesh(
    new THREE.SphereGeometry(7.1492, 50, 50),
    new THREE.MeshPhongMaterial({
        map: new THREE.TextureLoader().load('./assets/textures/2k_jupiter.jpg'),
    })
);
jupiter.receiveShadow = true;
jupiter.castShadow = true;

// saturno
const saturn = new THREE.Mesh(
    new THREE.SphereGeometry(6.0268, 50, 50),
    new THREE.MeshPhongMaterial({
        map: new THREE.TextureLoader().load('./assets/textures/2k_saturn.jpg'),
    })
);
saturn.receiveShadow = true;
saturn.castShadow = true;
// anéis de saturno
const saturnRings = createSaturnRings();
function createSaturnRings() {
    const texture = new THREE.TextureLoader().load(
        './assets/textures/2k_saturn_ring_alpha.png'
    );
    const material = new THREE.MeshPhongMaterial({
        map: texture,
        side: THREE.DoubleSide,
        color: 0xffffff,
        transparent: true,
    });
    const geometry = new THREE.RingBufferGeometry(6.6958, 14.022, 64);
    var pos = geometry.attributes.position;
    var v3 = new THREE.Vector3();
    for (let i = 0; i < pos.count; i++) {
        v3.fromBufferAttribute(pos, i);
        geometry.attributes.uv.setXY(i, v3.length() < 14 ? 0 : 1, 1);
    }
    const mesh = new THREE.Mesh(geometry, material);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    return mesh;
}

// urano
const uranus = new THREE.Mesh(
    new THREE.SphereGeometry(2.5559, 50, 50),
    new THREE.MeshPhongMaterial({
        map: new THREE.TextureLoader().load('./assets/textures/2k_uranus.jpg'),
    })
);
uranus.receiveShadow = true;
uranus.castShadow = true;

// netuno
const neptune = new THREE.Mesh(
    new THREE.SphereGeometry(2.4764, 50, 50),
    new THREE.MeshPhongMaterial({
        map: new THREE.TextureLoader().load('./assets/textures/2k_neptune.jpg'),
    })
);
neptune.receiveShadow = true;
neptune.castShadow = true;

// plano de fundo
const stars = new THREE.Mesh(
    new THREE.SphereGeometry(9000000, 64, 64),
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
sunGroup.add(sun, sunLight);

const earthGroup = new THREE.Group();
earthGroup.add(earth, clouds);

const saturnGroup = new THREE.Group();
saturnGroup.add(saturn, saturnRings);

//
// posições iniciais
camera.position.set(0, 0, 400); // câmera
stars.position.set(0, 0, 0); // plano de fundo
sunGroup.position.set(0, 0, 0); // sol

mercury.position.set(170, 0, 0);
mercury.rotation.z = 0.01 * (Math.PI / 180);

venus.position.set(180, 0, 0);
venus.rotation.z = 177.36 * (Math.PI / 180);

earthGroup.position.set(190, 0, 0);
earth.rotation.z = 23 * (Math.PI / 180);

moon.position.set(190, 3, 0);
moon.rotation.z = 5.145 * (Math.PI / 180);

mars.position.set(200, 0, 0);
mars.rotation.z = 25 * (Math.PI / 180);

jupiter.position.set(230, 0, 0);
jupiter.rotation.z = 1.305 * (Math.PI / 180);

saturnGroup.position.set(265, 0, 0);
saturnGroup.rotation.z = 26.73 * (Math.PI / 180);
saturnRings.rotation.x = 90 * (Math.PI / 180);

uranus.position.set(290, 0, 0);
uranus.rotation.z = 97.77 * (Math.PI / 180);

neptune.position.set(310, 0, 0);
neptune.rotation.z = 1.767975 * (Math.PI / 180);

//
// layers

// 1
stars.layers.set(1);
sun.layers.set(1);

// 0
mercury.layers.set(0);
venus.layers.set(0);
earthGroup.layers.set(0);
moon.layers.set(0);
mars.layers.set(0);
jupiter.layers.set(0);
saturnGroup.layers.set(0);
uranus.layers.set(0);
neptune.layers.set(0);

//
// adicionando na cena
scene.add(
    camera,
    ambientLight,
    stars,
    sunGroup,
    mercury,
    venus,
    earthGroup,
    moon,
    mars,
    jupiter,
    saturnGroup,
    uranus,
    neptune
);

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
