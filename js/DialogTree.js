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

Node.prototype.hasLinks = function() {
  return Boolean(this.links.length);
};

Node.prototype.getLink = function(n) {
  return this.links[n];
};

Node.prototype.getLine = function() {
  return this.line;
};

export const Link = function(line, nextNode) {
  this.line = line;
  this.nextNode = nextNode;
};

Link.prototype.getLine = function() {
  return this.line;
};

Link.prototype.getNextNode = function() {
  return this.nextNode;
};

Link.prototype.setNextNode = function(n) {
  this.nextNode = n;
};

export const generatePepin = function() {
  let link0 = new Link("I had a dream my mother was in the cathedral.", 1);
  let link1 = new Link("What evil are you talking about?", 6);
  let link2 = new Link("Goodbye", 2);
  let link3 = new Link("What do you think happened to her?", 3);
  let link4 = new Link("Speak plainly Pepin, what are you saying?", 4);
  let link5 = new Link("My father is not mad, I could have your tongue" +
  " out for speaking in such a manner!", 5);
  let node0 = new Node("Pepin", 0,
  "Welcome to Tristram Prince Albrecht. Please let me know if there’s" +
  " anything I can do for you.", [link0, link2]);
  let node1 = new Node("Pepin", 1, "There is an evil brewing at the " +
  "cathedral, I can feel it in my bones… Albrecht, no one has seen " +
  "your mother in weeks. She could be anywhere.", [link3, link1, link2]);
  let node2 = new Node("Pepin", 2, "Go in peace prince Albrecht.", []);
  let node3 = new Node("Pepin", 3, "If I may be blunt, your father, the " +
  "King Leoric has been going mad. That cursed advisor of his, Lazarus, " +
  "is poisoning his mind. I shudder to think about what Lazarus may " +
  "have said about your mother.", [link4, link5]);
  let node4 = new Node("Pepin", 4, "Your father sees enemies where there " +
  "are none. He started this war against Westmarch, and suspects there " +
  "are traitors everywhere. Our lord is gripped by terror. I fear your " +
  "mother may have suffered a terrible fate at the hands of your " +
  "father and Lazarus.", [link5]);
  let node5 = new Node("Pepin", 5, "Of course, my Prince. Forget what I " +
  "have said. Be well.", []);
  let node6 = new Node("Pepin", 6, "I can’t say, it’s only a feeling." +
  " Perhaps Cain can tell you more.", [link2]);

  return [node0, node1, node2, node3, node4, node5, node6];
};
