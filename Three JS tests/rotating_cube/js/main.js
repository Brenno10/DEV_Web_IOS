// configurando cena
const scene = new THREE.Scene();

// configurando câmera
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight, // proporção da imagem ( largura / altura )
    0.1, // plano de recorte póximo
    1000 // plano de recorte distante
);

// renderizador
const renderer = new THREE.WebGLRenderer();

// tamanho da tela
renderer.setSize(window.innerWidth, window.innerHeight);

// linkando o renderizador
document.body.appendChild(renderer.domElement);

// declarando cubo
const geometry = new THREE.BoxGeometry(1, 1, 1);

// delclarando o material do cubo
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

// aplicando o material no cubo
const cube = new THREE.Mesh(geometry, material);

// adicionando o cubo na tela
scene.add(cube);

// configurar a profundidade da câmera
camera.position.z = 5;

function animate() {
    // chama essa função para cada frame ( pausa caso o usuário sai da janela )
    requestAnimationFrame(animate);

    // animação
    cube.rotation.x += 0.001;
    cube.rotation.y += 0.002;

    // renderiza a cena e a câmera
    renderer.render(scene, camera);
}
animate();
