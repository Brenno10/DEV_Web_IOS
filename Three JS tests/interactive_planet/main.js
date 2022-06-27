// import * as THREE from 'three';
import * as THREE from 'https://unpkg.com/three/build/three.module.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import vertexShader from './assets/shaders/vertex.glsl';
import fragmentShader from './assets/shaders/fragment.glsl';

import atmosphereVertexShader from './assets/shaders/atmosphereVertex.glsl';
import atmosphereFragmentShader from './assets/shaders/atmosphereFragment.glsl';

// criando câmera e cena
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    75,
    innerWidth / innerHeight,
    0.01,
    10000
);

// criando renderização
const renderer = new THREE.WebGLRenderer({
    antialias: true, // antialias remove bordas irregulares
    canvas: document.querySelector('canvas'),
});

const canvasContainer = document.querySelector('#canvasContainer'); // é nescessário usar querySeclector
renderer.setSize(innerWidth, innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

// criando objeto e o adicionando a cena
const earth = new THREE.Mesh(
    new THREE.SphereGeometry(5, 50, 50),
    new THREE.ShaderMaterial({
        vertexShader: vertexShader, // coloca todos os vértices na posição correta
        fragmentShader: fragmentShader, // enche os espaços vazios entre vértices com alguma cor
        uniforms: {
            earthTexture: {
                value: new THREE.TextureLoader().load(
                    './assets/textures/hd_earth_texture.jpg' // earth texture
                ),
            },
        },
    })
);
scene.add(earth);

// criando atmosféra
const atmosphere = new THREE.Mesh(
    new THREE.SphereGeometry(5, 50, 50),
    new THREE.ShaderMaterial({
        vertexShader: atmosphereVertexShader,
        fragmentShader: atmosphereFragmentShader,
        blending: THREE.AdditiveBlending,
        side: THREE.BackSide,
    })
);
atmosphere.scale.set(1.1, 1.1, 1.1);
scene.add(atmosphere);

const group = new THREE.Group();
group.add(earth);
scene.add(group);

// criando estrelas e as adicionando a cena
const starGeometry = new THREE.BufferGeometry();
const starMaterial = new THREE.PointsMaterial({
    color: 0xffffff,
});
// posiciona estrelas em posições aleatórias
const starVertices = [];
for (let i = 0; i < 10000; i++) {
    const x = (Math.random() - 0.5) * 4000;
    const y = (Math.random() - 0.5) * 4000;
    const z = (Math.random() - 0.5) * 4000;
    starVertices.push(x, y, z);
}
console.log(starVertices);
starGeometry.setAttribute(
    'position',
    new THREE.Float32BufferAttribute(starVertices, 3)
);
const stars = new THREE.Points(starGeometry, starMaterial);
scene.add(stars);

// mconfigurando orbit controls
const controls = new OrbitControls(camera, document.querySelector('canvas'));
controls.enableDamping = true;
controls.dampingFactor = 0.05;

// posição da câmera
camera.position.z = 20;

// detecta a posição do mouse
const mouse = {
    x: undefined,
    y: undefined,
};
addEventListener('mousemove', (event) => {
    mouse.x = (event.clientX / innerWidth) * 2 - 1;
    mouse.y = (-event.clientY / innerHeight) * 2 + 1;
});

// animação
function animation() {
    requestAnimationFrame(animation);
    earth.rotation.y += 0.001;
    stars.rotation.y += 0.00001;
    stars.rotation.x += 0.00001;
    controls.update();

    renderer.render(scene, camera);
}
animation();
