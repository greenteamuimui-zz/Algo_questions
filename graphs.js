class Vertex{
  constructor(value){
    this.value = value;
    this.inEdges = [];
    this.outEdges = [];
  }
}

class Edge{
  constructor(fromVertex, toVertex, cost = 1){
    this.fromVertex = fromVertex;
    this.toVertex = toVertex;
    this.cost = cost;
    this.fromVertex.outEdges.push(this);
    this.toVertex.inEdges.push(this);
  }

  destroy(){
    let index = this.fromVertex.outEdges.indexOf(this);
    this.fromVertex.outEdges.splice(index);
    let index2 = this.toVertex.inEdges.indexOf(this);
    this.toVertex.inEdges.splice(index2);
    this.fromVertex = null;
    this.toVertex = null;
  }
}

function topologicalSort(vertices){
  let queue = [];
  let sorted = [];
  for(let i = 0; i < vertices.length; i++){
    if (vertices[i].inEdges.length === 0){
      queue.push(vertices[i]);
    }
  }
  while(queue.length > 0){
    let vertice = queue.pop();
    let nextVertices = [];
    sorted.push(vertice);
    for (let j = 0; j < vertice.outEdges.length; j++){
      let nextVert = vertice.outEdges[j].toVertex;
      nextVertices.push(nextVert);
    }
    console.log(vertice.outEdges[1]);
    for (var h = 0; h < vertice.outEdges.length; h++) {
      // console.log(vertice.outEdges[h]);
      vertice.outEdges[h].destroy();
    }
    for (let k = 0; k < nextVertices.length; k++){
      if (nextVertices[k].inEdges.length === 0){
        queue.push(nextVertices[k]);
      }
    }
  }
  return sorted;
}

const findEdge = function(fromVertex){
  let foundEdges = [];
  for (var i = 0; i < fromVertex.outEdges.length; i++) {
    if (toVertex.inEdges[i].fromVertex === fromVertex){
      foundEdges.push(toVertex.inEdges[i]);
    }
  }
  return foundEdges;
};

module.exports.Vertex = Vertex;
module.exports.Edge = Edge;

// let a = new Vertex("A");
// let b = new Vertex("B");
// let c = new Vertex("C");
// let d = new Vertex("D");
// let a_to_b = new Edge(a,b);
// let b_to_c = new Edge(b,c);
// let b_to_d = new Edge(b,d);
// let c_to_d = new Edge(c,d);
// console.log(topologicalSort([a,b,c,d]));
