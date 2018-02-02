export const Node = function(name, primaryKey) {
  this.name = name;
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

Node.prototype.setLinks = function() {

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
