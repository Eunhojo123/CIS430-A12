/*
 * index.js
 */

"use strict";

var shakeNode;		// if on mobile, show user shaking is an option
var buttonNode		// listen for clicks
var rgbNode			// the element in the DOM we will set to "rgb(10,23,45);"

/* wait until all cordova is loaded then call onDeviceReady*/
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady(){

	buttonNode			= document.getElementById('buttonId')
	rgbNode 			= document.getElementById('rgbId')
	shakeNode			= document.getElementById('shakeId');

	buttonNode.addEventListener('click', changeColor, false)

	changeColor()

	// https://github.com/leecrossley/cordova-plugin-shake
	// place <plugin name="cordova-plugin-shake"/> in config.xml
	// shake object will exist onDeviceReady()

	if (typeof shake !== 'undefined') {
		// watch for device shaking, if we hit the unit threshold, call onShake
		shakeNode.innerHTML = "shake me!"
		shake.startWatch(onShake, 30, onShakeError);
	}

}

function changeColor() {
	var r = randomColorComponent()
	var g = randomColorComponent()
	var b = randomColorComponent()

	var rgbString = "rgb(" + r + "," + g + "," + b + ")"
	console.log(rgbString)

	rgbNode.innerHTML = rgbString
	document.body.style.backgroundColor = rgbString
}

function randomColorComponent() {
	return Math.floor(Math.random() * 256) //make a random int from 0 - 255
}

var onShake = function() {
	alert("onShake event");
}

var onShakeError = function() {
	alert("onShakeError occurred")
}
