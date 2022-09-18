


function animate() {
    controls.update();
    renderer.render(scene,camera);
    requestAnimationFrame(animate);
}


let scene, camera, renderer;

scene = new THREE.Scene();
scene.background = new THREE.Color(0xffffff);

camera = new THREE.PerspectiveCamera(40,window.innerWidth/window.innerHeight,1,5000);
camera.rotation.y = 120/180*Math.PI;
camera.rotation.x = 20/180*Math.PI;
camera.rotation.z = 20/180*Math.PI;
camera.position.set(500,500,500); 


hlight = new THREE.AmbientLight (0x101010,20);  
scene.add(hlight);

directionalLight = new THREE.DirectionalLight(0x444444,30); 
directionalLight.position.set(0,1,0);
directionalLight.castShadow = true;
scene.add(directionalLight);

directionalLight = new THREE.DirectionalLight(0x444444,10); 
directionalLight.position.set(1,0,0);
directionalLight.castShadow = true;
scene.add(directionalLight);

light = new THREE.PointLight(0xc4c4c4,10);
light.position.set(0,300,500);
scene.add(light);
light2 = new THREE.PointLight(0xc4c4c4,10);
light2.position.set(500,100,0);
scene.add(light2);
light3 = new THREE.PointLight(0xc4c4c4,10);
light3.position.set(0,100,-500);
scene.add(light3);
light4 = new THREE.PointLight(0xc4c4c4,10);
light4.position.set(-500,300,500);
scene.add(light4);

renderer = new THREE.WebGLRenderer({antialias:true});
renderer.setSize(window.innerWidth,window.innerHeight);

renderer.toneMapping = THREE.ACESFilmicToneMapping;  
renderer.toneMappingExposure = 1;   
renderer.outputEncoding = THREE.sRGBEncoding;
renderer.physicallyCorrectLights = true;

document.body.appendChild(renderer.domElement);


//const controls = new OrbitControls(camera, renderer.domElement );
var controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.object.position.set(-760, 860, -1700);
controls.target = new THREE.Vector3(120, -200, 10);
controls.update();

let loader = new THREE.GLTFLoader();
loader.load("arch10.glb", function(glb){
arch = glb.scene.children[0];
//arch.scale.set(0.5,0.5,0.5);
scene.add(glb.scene);
animate();
});



console.log("controls:", controls.object.position);
window.onclick = myFunction;
function myFunction() {
console.log("controls.object.position:", controls.object.position);
// console.log("controls:", controls);
}

//init();