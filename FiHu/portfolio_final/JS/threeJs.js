import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.outputColorSpace = THREE.SRGBColorSpace;

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x1a1a1a, 0);
renderer.setPixelRatio(window.devicePixelRatio);

renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 1, 1000);
camera.position.set(0, 1, 3);

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

let mesh;
const initialRotation = { x: 0, y: 0 };

const spotLight = new THREE.SpotLight(0xffffff, 4000, 0, 0.1, 1);
spotLight.position.set(4, 1, 60);
spotLight.castShadow = true;
spotLight.shadow.bias = -1;
scene.add(spotLight);

const loader = new GLTFLoader().setPath('3DObject/');
loader.load('fillip.gltf', (gltf) => {
    console.log('loading model');
    mesh = gltf.scene;

    mesh.traverse((child) => {
        if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
        }
    });

    mesh.position.set(0, 1.3, -0.5);
    mesh.scale.set(2,2,2)
    scene.add(mesh);

    document.getElementById('progress-container').style.display = 'none';
}, (xhr) => {
    console.log(`loading ${xhr.loaded / xhr.total * 100}%`);
}, (error) => {
    console.error(error);
});

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

window.addEventListener('mouseleave', () => {
    if (mesh) {
        mesh.rotation.x = initialRotation.x;
        mesh.rotation.y = initialRotation.y;
    }
});

function animate() {
    requestAnimationFrame(animate);
    mesh.rotation.y = mouseX / window.innerWidth * 0.2;
    mesh.rotation.x = mouseY * 0.2 / window.innerHeight;
    renderer.render(scene, camera);
}


document.onmousemove = (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
}

animate();