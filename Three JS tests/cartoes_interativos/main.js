import * as THREE from 'three';
import { Group } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';

// cena e câmera
const cena = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    60,
    innerWidth / innerHeight,
    0.01,
    10000
);

// renderizador
const renderizador = new THREE.WebGLRenderer({
    antialias: true,
    canvas: document.querySelector('canvas'),
});
document.querySelector('#canvasContainer');
renderizador.autoClear = false;
renderizador.setSize(innerWidth, innerHeight);
renderizador.setPixelRatio(window.devicePixelRatio);
renderizador.toneMapping = THREE.ReinhardToneMapping;
const renderizarCena = new RenderPass(cena, camera);

// iluminação
const bloomPass = new UnrealBloomPass(
    new THREE.Vector2(innerWidth, innerHeight),
    2,
    0,
    0
);
const compositorDeEfeito = new EffectComposer(renderizador);
compositorDeEfeito.setSize(innerWidth, innerHeight);
compositorDeEfeito.addPass(renderizarCena);
compositorDeEfeito.addPass(bloomPass);

// sol
const sol = new THREE.Mesh(
    new THREE.SphereGeometry(100, 100, 100),
    new THREE.MeshBasicMaterial({
        map: new THREE.TextureLoader().load('./assets/textures/sun.jpg'),
    })
);

// terra
const terra = new THREE.Mesh(
    new THREE.SphereGeometry(5, 50, 50),
    new THREE.MeshBasicMaterial({
        map: new THREE.TextureLoader().load(
            './assets/textures/hd_earth_texture.jpg'
        ),
    })
);

// estrelas
const geometriaDaEstrela = new THREE.BufferGeometry();
const materialDaEstrela = new THREE.PointsMaterial({ color: 0xffffff });
const verticesDaEstrela = [];
for (let i = 0; i < 10000; i++) {
    const x = (Math.random() - 0.5) * 6000;
    const y = (Math.random() - 0.5) * 6000;
    const z = (Math.random() - 0.5) * 6000;
    verticesDaEstrela.push(x, y, z);
}
geometriaDaEstrela.setAttribute(
    'position',
    new THREE.Float32BufferAttribute(verticesDaEstrela, 3)
);
const estrelas = new THREE.Points(geometriaDaEstrela, materialDaEstrela);

// controles
const controles = new OrbitControls(camera, document.querySelector('canvas'));
controles.enableDamping = true;
controles.dampingFactor = 0.05;

// redimensionador
window.addEventListener('resize', redimensionar, false);
function redimensionar() {
    camera.aspect = innerWidth / innerHeight;
    camera.updateProjectionMatrix();
    renderizador.setSize(innerWidth, innerHeight);
    renderizador.render(cena, camera);
}

// grupos
const grupoTerra = new THREE.Group();
grupoTerra.add(terra);
const grupoSol = new Group();
grupoSol.add(sol);

// adicionar na cena
cena.add(estrelas);
cena.add(grupoSol);
cena.add(grupoTerra);

// posições iniciais
camera.position.set(0, 0, 400);
camera.lookAt(sol);
grupoSol.position.set(0, 0, 0);
grupoTerra.position.set(200, 0, 100);

// animações
function animacao() {
    requestAnimationFrame(animacao);
    estrelas.rotation.x += 0.000005;
    estrelas.rotation.y += 0.000005;

    grupoSol.rotation.y += 0.0002;
    grupoSol.rotation.x += 0.0002;

    grupoTerra.rotation.y += 0.0005;

    controles.update();
    compositorDeEfeito.render();
}
animacao();
