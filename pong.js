// JavaScript Document

var animate = window.requestAnimationFrame ||
	window.webkitRequestAnimationFrame ||
	window.mozRequestAnimationFrame ||
	function(callback) {
		window.setTimeout(callback, 1000/60);
	}
	
	
var canvas = document.createElement('canvas');
var width = 640;
var height = 480;
canvas.height = height;
canvas.width = width;
var context = canvas.getContext('2d');

// when the page 
window.onload = function() {
	document.body.appendChild(canvas);
	animate(step);
}

// step function chain fires sub functions
var step = function() {
	update();
	render();
	animate(step);
};

var update = function() {
	
};

// draw a black rectangle
var render = function() {
	context.fillStyle = "#000";
	context.fillRect(0, 0, width, height);
};