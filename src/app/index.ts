import '../css/index.css'
import * as THREE from "three";

const width = window.innerWidth;
const height = window.innerHeight;

const renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById("app") as HTMLCanvasElement
})

renderer.setSize(width, height);

const mainCamera = new THREE.PerspectiveCamera(60, width / height, 0.1, 100);
const scene = new THREE.Scene();

// cube
const cubeGeometry = new THREE.BoxGeometry();
const cubeMaterial = new THREE.MeshPhongMaterial({ color: 0xFFAD00 });
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
cube.position.z = -5;
cube.position.y = 0;
cube.rotateY(15);
cube.rotateX(15);

scene.add(cube);

// circle
const circleGeometry = new THREE.CircleGeometry(3, 32);
const circleMaterial = new THREE.MeshPhongMaterial({ color: 0xA020F0 });
const circle = new THREE.Mesh(circleGeometry, circleMaterial);
circle.position.z = -20;
circle.position.x = 10;
circle.position.y = 0;

scene.add(circle);

// cone
const coneGeometry = new THREE.ConeGeometry(2, 2);
const coneMaterial = new THREE.MeshPhongMaterial({ color: 0xFFFF00 });
const cone = new THREE.Mesh(coneGeometry, coneMaterial);
cone.position.z = -10;
cone.position.x = -5;
cone.position.y = 0;

scene.add(cone);

// directional light
const directionalLight = new THREE.DirectionalLight(0xFFFFFF, 1);
directionalLight.position.set(0, 4, 2);

scene.add(directionalLight);

// directional light 2
const directionalLight2 = new THREE.DirectionalLight(0xFFFFFF, 1);
directionalLight2.position.set(0, -4, 2);

scene.add(directionalLight2);

renderer.render(scene, mainCamera);
