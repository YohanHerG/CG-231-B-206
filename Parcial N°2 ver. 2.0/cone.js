/*Yohan Hernando González Gutiérrez - 6000615*/


/*Metodo que crea una escena y color de la misma*/
var scene = new THREE.Scene();
scene.background = new THREE.Color(0xFFFFFF);

/*Metodo que añade una camara a la escena*/
var camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight );

/*Parametros rotacion y posicion de la camara*/
camera.position.z = 6.8;
camera.rotation.x = -0.40;
camera.rotation.y = 0.30;
camera.position.x = 1.40;
camera.position.y = 5;

/*Creamos el render*/
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

/*Creacion del objeto "esfera" en la escena*/
var sphereGeometry3 = new THREE.SphereGeometry(2, 4, 10);
var sphereMaterial3 = new THREE.MeshBasicMaterial({color: 0x0012FF, wireframe: true});
var sphere = new THREE.Mesh(sphereGeometry3, sphereMaterial3);
sphere.position.set(-0.9, -1, -4);
scene.add(sphere);

/*Metodo que crea el plano cartesiano de la escena*/
const axesHelper = new THREE.AxesHelper(10);
scene.add( axesHelper );

/*Metodo que crea la maya en la escena*/
const size = 100;
const divisions = 50;
const gridHelper = new THREE.GridHelper( size, divisions );
scene.add( gridHelper );

/*Una funcion para ubicar las respectivas geometrias*/
function render() {

renderer.render(scene, camera);

setTimeout(()=>{requestAnimationFrame(render)}, 100);
}
requestAnimationFrame(render);

main();