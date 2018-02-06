export const Node = function(name, primaryKey, line) {
  this.name = name;
  this.primaryKey = primaryKey;
  this.line = line;
};

export const Link = function(lines, scripts, primaryKey, previousNode) {
  this.lines = lines;
  this.scripts = scripts;
  this.primaryKey = primaryKey;
};

Node.prototype.getId = function() {
  return this.primaryKey;
};

Node.prototype.setId = function(inputKey) {
  this.primaryKey = inputKey;
};

Node.prototype.getLinks = function() {

};

Node.prototype.setLink = function(linkObject) {

};

Node.prototype.getLink = function(n) {

};

Link.prototype.getLines = function() {

};

Link.prototype.getLine = function(n) {

};

Link.prototype.getNextNode = function() {

};

Link.prototype.setNextNode = function() {

};

Link.prototype.getPreviousNode = function() {

};











// export const dialogTree = function() {
//   return ({
//     cain: {
//       root: {
//         text: "opening dialog",
//         responses: {
//
//         }
//       }
//     },
//     ogden: {
//
//     },
//     griswold: {
//
//     },
//     pepin: {
//
//     },
//   });
// };
