export const Node = function(name, primaryKey, line, links) {
  this.name = name;
  this.primaryKey = primaryKey;
  this.line = line;
  this.links = links;
};

Node.prototype.getId = function() {
  return this.primaryKey;
};

Node.prototype.setId = function(inputKey) {
  this.primaryKey = inputKey;
};

Node.prototype.getLinks = function() {
  return this.links;
};

Node.prototype.addLink = function(linkObject) {
  this.links.push(linkObject);
};

Node.prototype.getLink = function(n) {
  return this.links[n];
};

export const Link = function(lines, primaryKey, nextNode) {
  this.lines = lines;
  this.primaryKey = primaryKey;
  this.nextNode = nextNode;
};

Link.prototype.getLines = function() {
  return this.lines;
};

Link.prototype.getLine = function(n) {
  return this.lines[n];
};

Link.prototype.getNextNode = function() {
  return this.nextNode;
};

Link.prototype.setNextNode = function(n) {
  this.nextNode = n;
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
