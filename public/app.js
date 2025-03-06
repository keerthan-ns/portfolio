import * as THREE from 'https://cdn.skypack.dev/three@0.129.0/build/three.module.js';
import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js';
import { gsap } from 'https://cdn.skypack.dev/gsap';

const camera = new THREE.PerspectiveCamera(
    20,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
camera.position.z = 15;

// for mobile screens
const updateCameraForMobile = () => {
    if (window.innerWidth < 768) { // Adjust for mobile screens
        camera.fov = 30;  // Increase FOV for a wider view
        camera.position.z = 20; // Move camera further back
    } else {
        camera.fov = 20; // Default FOV for larger screens
        camera.position.z = 15; // Default camera position
    }
    camera.updateProjectionMatrix();
};

// Call initially and on resize
updateCameraForMobile();
window.addEventListener("resize", () => {
    updateCameraForMobile();
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});


const scene = new THREE.Scene();
let bee;
let mixer;
const loader = new GLTFLoader();
// loader.load('/demon_bee_full_texture.glb',
loader.load('/fly_bee.glb',
    function (gltf) {
        bee = gltf.scene;
        scene.add(bee);

        // resize model
        bee.scale.set(0.03, 0.03, 0.03); 

        mixer = new THREE.AnimationMixer(bee);
        mixer.clipAction(gltf.animations[0]).play();
        modelMove();

        // Hide loader when the model is fully loaded
        requestAnimationFrame(() => {
            document.getElementById("loader-bg").style.display = "none"; 
        }); 
    },
    function (xhr) {
        if (xhr.total > 0) {
            console.log("Loading progress:", (xhr.loaded / xhr.total) * 100, "%");
        } else {
            console.log("Loading progress:", xhr.loaded, "bytes loaded");
        }
    },
    function (error) {
        document.getElementById("loader-bg").style.display = "none"; 
    }
);
const renderer = new THREE.WebGLRenderer({alpha: true});
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('container3D').appendChild(renderer.domElement);

// light
const ambientLight = new THREE.AmbientLight(0xffffff, 1.3);
scene.add(ambientLight);

const topLight = new THREE.DirectionalLight(0xffffff, 1);
topLight.position.set(500, 500, 500);
scene.add(topLight);


const reRender3D = () => {
    requestAnimationFrame(reRender3D);
    renderer.render(scene, camera);
    if(mixer) mixer.update(0.02);
};
reRender3D();

let arrPositionModel = [
    {
        id: 'homeSect',
        position: {x: -2, y: 0.5, z: -3},
        rotation: {x: 0, y: 1.5, z: 0}
    },
    {
        id: 'aboutSect',
        position: {x: 3, y: -1, z: -1},
        rotation: {x: 0, y: -1.5, z: 0}
    },
    {
        id: "techSect",
        position: { x: 3, y: 2, z: -5 },
        rotation: { x: 0.5, y: -0.5, z: 0 },
    },
    {
        id: "projectSect",
        position: { x: -3, y: 1, z: -5 },
        rotation: { x: 0, y: 0.5, z: 0 },
    },
    {
        id: "contactSect",
        position: { x: 3, y: -1, z: 0 },
        rotation: { x: 0.3, y: -0.5, z: 0 },
    },
];
const modelMove = () => {
    const sections = document.querySelectorAll('.section');
    let currentSection;
    sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 3) {
            currentSection = section.id;
        }
    });
    let position_active = arrPositionModel.findIndex(
        (val) => val.id === currentSection
    );
    if (position_active >= 0) {
        let new_coordinates = arrPositionModel[position_active];
        gsap.to(bee.position, {
            x: new_coordinates.position.x,
            y: new_coordinates.position.y,
            z: new_coordinates.position.z,
            duration: 3,
            ease: "power1.out"
        });
        gsap.to(bee.rotation, {
            x: new_coordinates.rotation.x,
            y: new_coordinates.rotation.y,
            z: new_coordinates.rotation.z,
            duration: 3,
            ease: "power1.out"
        })
    }
}
window.addEventListener('scroll', () => {
    if (bee) {
        modelMove();
    }
})
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
})