function random(start,end){
	return Math.floor(Math.random() * (end - start)) + start;
}

function randomColor () {
	return "#"+((1<<24)*Math.random()|0).toString(16);
}

$(document).ready(function(){
	var el = document.getElementById('canvas1');
	window.canvasEl= new CanvasElement(el);

	$('#btnTest').click(function(){
		var rect = new Rectangle(random(0,400),random(0,500),random(100,300),random(100,200),randomColor(),randomColor());
		canvasEl.insertElement(rect);
	});

	$('#btnRepaint').click(function () {
		canvasEl.repaint();
	});

	$(el).mouseup(function (evt) {
		var x = evt.offsetX || evt.layerX || (evt.clientX - el.offsetLeft);
        var y = evt.offsetY || evt.layerY || (evt.clientY - el.offsetTop);
		canvasEl.hit(x,y,3,evt.controlKey,evt.shiftKey,evt.altKey,evt.metaKey);
	}).mousedown(function (evt) {
		var x = evt.offsetX || evt.layerX || (evt.clientX - el.offsetLeft);
        var y = evt.offsetY || evt.layerY || (evt.clientY - el.offsetTop);
		canvasEl.hit(x,y,1,evt.controlKey,evt.shiftKey,evt.altKey,evt.metaKey);
	}).mousemove(function (evt) {
		var x = evt.offsetX || evt.layerX || (evt.clientX - el.offsetLeft);
        var y = evt.offsetY || evt.layerY || (evt.clientY - el.offsetTop);
		canvasEl.hit(x,y,2,evt.controlKey,evt.shiftKey,evt.altKey,evt.metaKey);
	});
	
});