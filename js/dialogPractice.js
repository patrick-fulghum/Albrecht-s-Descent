function DialogLine(text) {
  this.text = text;
}

DialogLine.prototype.display = function() {
  //some code to display line
}

var line = new DialogLine("Hello There");

function Script(cb) {
  this.script = cb;
}

DialogLine.prototype.run = function() {
  this.script();
}

var line = new DialogLine("Hello There");
