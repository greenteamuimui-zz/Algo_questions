let Vertex = require('./graphs').Vertex;
let Edge = require('./graphs').Edge;

let vert1 = new Vertex("A");
let vert2 = new Vertex("B");
let edge1 = new Edge(vert1, vert2);

function tarjanSort(vertices){
  let sorted = [];
  let visited = [];
  for (var i = 0; i < vertices.length; i++) {
    if (!visited.includes(vertices[i])) {
      visit(vertices[i], sorted, visited);
    }
  }
  return sorted;
}

function visit(vertex, sorted, visited){
  visited.push(vertex);
  for (var i = 0; i < vertex.outEdges.length; i++) {
    let toVertex = vertex.outEdges[i].toVertex;
    if (!visited.includes(toVertex)) visit(toVertex, sorted, visited);
  }
  sorted.unshift(vertex);
}

let a = new Vertex("D");
let b = new Vertex("C");
let c = new Vertex("B");
let d = new Vertex("A");
let a_to_b = new Edge(a,b);
let b_to_c = new Edge(b,c);
let b_to_d = new Edge(b,d);
let c_to_d = new Edge(c,d);
console.log(tarjanSort([a,b,c,d]));
