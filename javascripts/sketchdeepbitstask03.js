let img;
let iscale = 0.5;
let transx = 0;
let transy = 0;

function preload() {
	img = loadImage('./imgs/Task03.png');
}

function setup() {
	document.addEventListener('contextmenu', event => event.preventDefault());
	createCanvas(windowWidth, windowHeight);
	imageMode(CENTER);
}

function windowResized() { 
    resizeCanvas(windowWidth, windowHeight); 
} 

function draw() {
	background(240);
	push();
	translate( width / 2, height / 2);
	translate( transx, transy);
	
	scale(iscale);
	
	image(img, 0, 0);
	
	pop();

	textAlign(LEFT, TOP);
	textSize(22);
	text('Double Click to reset zoom', 5, 5);
}

function mouseDragged(event){
	transx += event.movementX;
	transy += event.movementY;
}

function mouseWheel(event){
	if( event.delta > 0 ){
		iscale /= 1.05;
	}else{
		iscale *= 1.05;
	}
}

function doubleClicked(event) {
	iscale = 0.5;
	transx = 0;
	transy = 0;
}