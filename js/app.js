// @codekit-prepend "jquery.js";


var color = $(".selected").css("background-color");
var $canvas = $("canvas");
//Select the first, only canvas element. Select the actual HTML element using the array syntax [index], get the 2d context.
var context = $canvas[0].getContext("2d");
var lastEvent;
var mouseDown = false;

//When clicking control list items
$(".controls").on("click", "li", function() {
    //deselect sibling elements
    $(this).siblings().removeClass("selected");
    //select clicked element
    $(this).addClass("selected");
    //cache current color here
    color = $(".selected").css("background-color");
    console.log("selected color = " + color);
});

//On mouse events on the canvas
$canvas.mousedown(function(e) {
    lastEvent = e;
    mouseDown = true;

}).mousemove(function(e) {
    if (mouseDown) {
        //Draw lines
        context.beginPath();
        context.moveTo(lastEvent.offsetX, lastEvent.offsetY);
        context.lineTo(e.offsetX, e.offsetY);
        context.strokeStyle = color;
        context.lineWidth = 15;
        context.lineCap = "round";
        context.stroke();
        lastEvent = e;
    }
}).mouseup(function() {
    mouseDown = false;
}).mouseleave(function() {
    $canvas.mouseup();
});