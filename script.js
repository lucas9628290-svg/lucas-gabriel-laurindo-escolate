const scene = new THREE.Scene();
scene.background = new THREE.Color(0x87ceeb);

const camera = new THREE.PerspectiveCamera(
75,
window.innerWidth/window.innerHeight,
0.1,
1000
);

const renderer = new THREE.WebGLRenderer({antialias:true});

renderer.setSize(window.innerWidth,window.innerHeight);

renderer.shadowMap.enabled=true;

document.body.appendChild(renderer.domElement);

// Luz

const sun=new THREE.DirectionalLight(0xffffff,2);

sun.position.set(20,30,20);

scene.add(sun);

scene.add(new THREE.AmbientLight(0xffffff,.5));

// Chão

const floor=new THREE.Mesh(

new THREE.BoxGeometry(100,1,100),

new THREE.MeshStandardMaterial({

color:0x2f9e44

})

);

floor.receiveShadow=true;

floor.position.y=-0.5;

scene.add(floor);

// Jogador

const player=new THREE.Mesh(

new THREE.BoxGeometry(1,2,1),

new THREE.MeshStandardMaterial({

color:0x0077ff

})

);

player.position.y=1;

player.castShadow=true;

scene.add(player);

// Porta

const door=new THREE.Mesh(

new THREE.BoxGeometry(2,4,.5),

new THREE.MeshStandardMaterial({

color:0xffff00

})

);

door.position.set(45,2,0);

scene.add(door);

// Controles

const keys={};

document.addEventListener("keydown",(e)=>{

keys[e.key.toLowerCase()]=true;

});

document.addEventListener("keyup",(e)=>{

keys[e.key.toLowerCase()]=false;

});

// Espinhos

const spikes=[];

for(let i=0;i<12;i++){

const spike=new THREE.Mesh(

new THREE.ConeGeometry(.6,1.5,4),

new THREE.MeshStandardMaterial({

color:"red"

})

);

spike.rotation.y=Math.PI/4;

spike.position.set(

5+i*3,

0.75,

(Math.random()*20)-10

);

scene.add(spike);

spikes.push(spike);

}

let mortes=0;

// Atualização

function update(){

const speed=.15;

if(keys["w"])player.position.z-=speed;

if(keys["s"])player.position.z+=speed;

if(keys["a"])player.position.x-=speed;

if(keys["d"])player.position.x+=speed;

// câmera

camera.position.x=player.position.x;

camera.position.z=player.position.z+8;

camera.position.y=6;

camera.lookAt(player.position);

// colisão espinhos

for(const s of spikes){

const dx=player.position.x-s.position.x;

const dz=player.position.z-s.position.z;

const d=Math.sqrt(dx*dx+dz*dz);

if(d<1){

mortes++;

document.getElementById("mortes").innerHTML=mortes;

player.position.set(0,1,0);

}

}

// vitória

const dx=player.position.x-door.position.x;

const dz=player.position.z-door.position.z;

if(Math.sqrt(dx*dx+dz*dz)<2){

const m=document.getElementById("mensagem");

m.style.display="block";

m.innerHTML="FASE COMPLETA!";

}

renderer.render(scene,camera);

requestAnimationFrame(update);

}

update();

window.addEventListener("resize",()=>{

camera.aspect=window.innerWidth/window.innerHeight;

camera.updateProjectionMatrix();

renderer.setSize(window.innerWidth,window.innerHeight);

});
<script src="script.js"></script>
