// import * as THREE from 'three';
import * as THREE from 'https://unpkg.com/three/build/three.module.js';

// bibliotecas adicionais
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// arquivos de sombra
import vertexShader from './assets/shaders/vertex.glsl';
import fragmentShader from './assets/shaders/fragment.glsl';
import atmosphereVertexShader from './assets/shaders/atmosphereVertex.glsl';
import atmosphereFragmentShader from './assets/shaders/atmosphereFragment.glsl';

//
// criando cena e câmera
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    75, // fov = campo de visão
    innerWidth / innerHeight, // aspect = tamanho da câmera
    0.01, // near = distância mínima de renderização
    10000 // far = distância máxima de renderização
);

//
// criando renderizador
const renderer = new THREE.WebGLRenderer({
    antialias: true, // antialias remove bordas irregulares
    canvas: document.querySelector('canvas'),
});
document.querySelector('#canvasContainer'); // é nescessário usar querySeclector
renderer.setSize(innerWidth, innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

//
// criando a terra
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

//
// criando efeito de atmosféra
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

//
// criando estrelas em posições aleatórias na cena
const starGeometry = new THREE.BufferGeometry();
const starMaterial = new THREE.PointsMaterial({
    color: 0xffffff,
});
const starVertices = [];
for (let i = 0; i < 10000; i++) {
    const x = (Math.random() - 0.5) * 6000;
    const y = (Math.random() - 0.5) * 6000;
    const z = (Math.random() - 0.5) * 6000;
    starVertices.push(x, y, z);
}
starGeometry.setAttribute(
    'position',
    new THREE.Float32BufferAttribute(starVertices, 3)
);
const stars = new THREE.Points(starGeometry, starMaterial);

//
// redimensionador da animação
window.addEventListener('resize', redimensionar);
function redimensionar() {
    camera.aspect = innerWidth / innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(innerWidth, innerHeight);
    renderer.render(scene, camera);
}

//
// configurando orbitControls
const controls = new OrbitControls(camera, document.querySelector('canvas'));
controls.enableDamping = true;
controls.dampingFactor = 0.05;

//
// agrupando terra e atmosféra
const earthGroup = new THREE.Group();
earthGroup.add(earth);
earthGroup.add(atmosphere);

//
// adicionando objetos à cena
scene.add(earthGroup);
scene.add(stars);

// posição inicial da câmera
camera.position.z = 20;

// animação
function animation() {
    requestAnimationFrame(animation);

    // movimento das estrelas
    stars.rotation.y += -0.000008;
    stars.rotation.x += -0.000005;

    // movimento da terra
    earth.rotation.y += 0.0005;

    controls.update(); // faz com que o orbitControls continue sendo renderizado
    renderer.render(scene, camera);
}
animation();
