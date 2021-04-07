
var  renderer, scene, camera, particle;
var material;
var mat1,geo1,sphere1,mat2,geo2,sphere2,mat3,geo3,sphere3,mat4,geo4,sphere4,mat5,geo5,sphere5;
var mesh;
var r = 20;
var angle = 0;


function init() {
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio((window.devicePixelRatio) ? window.devicePixelRatio : 1);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.autoClear = false;
    renderer.setClearColor(0x000000, 0.0);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    document.getElementById('canvas').appendChild(renderer.domElement);

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.z = 700;
    camera.position.y = 100;
    scene.add(camera);

    var ambientLight = new THREE.AmbientLight(0x5454FC);
    scene.add(ambientLight);

    var lights = [];
    lights[0] = new THREE.DirectionalLight(0xFE526C, 1);
    lights[0].position.set(5, 3, 0);
    lights[1] = new THREE.DirectionalLight( 0x2FE78F, 0.4);
    lights[1].position.set( 0.75, 1, 0.5 );
    lights[2] = new THREE.DirectionalLight( 0x11bf68, 0.2);
    lights[2].position.set( -0.75, -1, 0.5 );
    scene.add(lights[0]);
    scene.add(lights[1]);
    scene.add(lights[2]);
    lights.castShadow = true;
    lights.receiverShadow = true;

    mat1 = new THREE.MeshPhongMaterial({
        color: 0xF29EDC,
        side: THREE.DoubleSide
    });

    mat2 = new THREE.MeshPhongMaterial({
        color: 0x9FF1FF,
        side: THREE.DoubleSide
    });

    mat3 = new THREE.MeshPhongMaterial({
        color: 0x83F1FC,
        side: THREE.DoubleSide
    });

    geo1 = new THREE.SphereBufferGeometry(160,50,5);
    sphere1 = new THREE.Mesh(geo1, mat1);
    scene.add(sphere1);

    geo2 = new THREE.SphereBufferGeometry(60,60,4);
    sphere2= new THREE.Mesh(geo2, mat2);
    scene.add(sphere2);

    geo3 = new THREE.SphereBufferGeometry(30,60,6);
    sphere3= new THREE.Mesh(geo3, mat2);
    scene.add(sphere3);

    geo4 = new THREE.SphereBufferGeometry(50,60,6);
    sphere4= new THREE.Mesh(geo4, mat3);
    scene.add(sphere4);

    geo11 = new THREE.SphereBufferGeometry(40,50,5);
    sphere11 = new THREE.Mesh(geo11, mat2);
    scene.add(sphere11);

    window.addEventListener('resize', onWindowResize, false);

};

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

var step = 0;
function animate() {
    step+=0.02;
    sphere1.position.y = 100+(50*Math.cos(step));
    sphere1.rotation.y += 0.02;
    sphere1.rotation.x += 0.02;
    sphere1.rotation.z += 0.02;

    sphere2.position.y = 0;
    sphere2.position.x = -300;
    sphere2.rotation.x += 0.02;


    sphere3.position.y = 270;
    sphere3.position.x = 280;
    sphere3.rotation.x += 0.02;

    sphere4.position.y = -80;
    sphere4.position.x = 400;
    sphere4.rotation.x += 0.02;

    sphere11.position.y = +200;
    sphere11.position.x = -400;
    sphere11.position.z = -300;
    sphere11.rotation.x += 0.04;

    renderer.clear();
    requestAnimationFrame(animate);
    renderer.render( scene, camera );
}


