import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';

// cena e câmera
const cena = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    60,
    innerWidth / innerHeight,
    0.01,
    35000
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
const luzAmbiente = new THREE.AmbientLight(0xffffff, 0.015);
const luzDoSol = new THREE.PointLight(0xffffff, 6, 10000);
const luzDoSolHelper = new THREE.PointLightHelper(luzDoSol, 1);
const bloomPass = new UnrealBloomPass(
    new THREE.Vector2(innerWidth, innerHeight),
    0.4,
    0,
    0
);
const compositorDeEfeito = new EffectComposer(renderizador);
compositorDeEfeito.setSize(innerWidth, innerHeight);
compositorDeEfeito.addPass(renderizarCena);
compositorDeEfeito.addPass(bloomPass);

const customMaterialAtimosphere = new THREE.ShaderMaterial({
    uniforms: {
        c: { type: 'f', value: 0.5 },
        p: { type: 'f', value: 0.4 },
        vertexShader: document.getElementById('vertexShaderAtmosphere'),
        fragmentShader: document.getElementById('fragmentShaderAtmosphere'),
    },
});
const atmosphere = new THREE.Mesh(
    new THREE.SphereGeometry(100, 50, 50),
    customMaterialAtimosphere
);
atmosphere.scale.x = atmosphere.scale.y = atmosphere.scale.z = 1.2;
atmosphere.material.side = THREE.BackSide;

// planetas
const sol = new THREE.Mesh(
    new THREE.SphereGeometry(100, 50, 50),
    new THREE.MeshLambertMaterial({
        map: new THREE.TextureLoader().load('./assets/textures/sun.jpg'),
    })
);
const terra = new THREE.Mesh(
    new THREE.SphereGeometry(5, 50, 50),
    new THREE.MeshLambertMaterial({
        map: new THREE.TextureLoader().load(
            './assets/textures/hd_earth_texture.jpg'
        ),
    })
);

// estrelas
const geometriaDaEstrela = new THREE.BufferGeometry();
const materialDaEstrela = new THREE.PointsMaterial({
    color: 0xffffff,
});
const verticesDaEstrela = [];
for (let i = 0; i < 10000; i++) {
    const x = (Math.random() - 0.5) * 60000;
    const y = (Math.random() - 0.5) * 60000;
    const z = (Math.random() - 0.5) * 60000;
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

const grupoSol = new THREE.Group();
grupoSol.add(sol);
grupoSol.add(atmosphere);
grupoSol.add(luzDoSol);
grupoSol.add(luzDoSolHelper);

// adicionando na cena
cena.add(luzAmbiente);
cena.add(estrelas);
cena.add(grupoSol);
cena.add(grupoTerra);

// posições iniciais
camera.position.set(0, 0, 400);
grupoTerra.position.set(200, 0, 0);
grupoSol.position.set(0, 0, 0);

// animações
function animacao() {
    requestAnimationFrame(animacao);
    grupoTerra.rotation.y += 0.0005;
    grupoSol.rotation.y += 0.0002;
    grupoSol.rotation.x += 0.0002;
    estrelas.rotation.x += 0.000001;
    estrelas.rotation.y += 0.000001;

    controles.update();
    compositorDeEfeito.render();
}
animacao();
