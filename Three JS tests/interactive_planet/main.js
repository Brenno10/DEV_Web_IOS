// import * as THREE from 'three';
import * as THREE from 'https://unpkg.com/three/build/three.module.js';
import gsap from 'gsap'; // biblioteca de animações gsap

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
    1000
);

// criando renderização
const renderer = new THREE.WebGLRenderer({ antialias: true }); // antialias remove bordas irregulares
renderer.setSize(innerWidth, innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
// renderer.setAnimationLoop(animation); // substituto para requestAnimationFrame()
document.body.appendChild(renderer.domElement);

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

camera.position.z = 15;

// detecta a posição do mouse
const mouse = {
    x: undefined,
    y: undefined,
};
addEventListener('mousemove', (event) => {
    mouse.x = (event.clientX / innerWidth) * 2 - 1;
    mouse.y = (-event.clientY / innerHeight) * 2 + 1;
});

//

// animação
function animation(time) {
    requestAnimationFrame(animation);
    earth.rotation.y += 0.003;

    gsap.to(group.rotation, {
        y: mouse.x,
        x: -mouse.y,
        duration: 1.5,
    });

    renderer.render(scene, camera);
}
animation();
