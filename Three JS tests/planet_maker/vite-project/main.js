import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

let camera, fov, aspect, near, far, scene, renderer;
const canvas = document.getElementsByTagName('canvas')[0];

class Planet {
    constructor(name, size, uvMap) {
        this.name = name;
        this.name = size;
        this.uvMap = uvMap;
    }

    planetCriator() {
        this.name = new THREE.Mesh(
            new THREE.SphereGeometry(this.size, 50, 50),
            new THREE.MeshPhongMaterial({
                map: new THREE.TextureLoader().load(this.uvMap),
            })
        );
    }
}

const planets = [
    (earth = new Planet('earth', 10, './assets/textures/earthmap1.jpg')),
    (mars = new Planet('mars', 7, './assets/textures/2k_mars.jpg')),
];

function _init() {
    fov = 80;
    aspect = window.innerWidth / window.innerHeight;
    near = 0.01;
    far = 100000000;

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
    renderer.autoClear = false;
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(
        window.devicePixelRatio ? window.devicePixelRatio : 1
    );
    renderer.setClearColor(0x000000, 0.0);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    scene.add();
}

function _initPosition() {
    camera.position.set(0, 0, 20);
    earth.position.set(0, 0, 0);
}

window.addEventListener('resize', _onResize);
function _onResize() {
    console.log('size change');
}

function _render() {}

function animation() {
    requestAnimationFrame(animation);
    _render();
}

_init();
_initPosition();
animation();
