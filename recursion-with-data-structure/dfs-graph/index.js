import Graph from './graph.js'

function helperFunction(myGraph, currentNode, visited) {
  // Mark the currentNode as visited and print it
  if (visited[currentNode] == false) {
    visited[currentNode] = true
    console.log(currentNode)
  }

  if (myGraph.graph.has(currentNode) == true) {
    var currentAdjacencyList = myGraph.graph.get(currentNode)
    for (var i = 0; i < currentAdjacencyList.length; i++) {
      var temp = currentAdjacencyList[i];
      if (visited[temp] == false) {
        // Recur for all the vertices adjacent to currentNode
        helperFunction(myGraph, temp, visited)
      }
    }
  }
}

function DFS(myGraph) {
  var visited = new Array(myGraph.vertices).fill(false); //Initially all vertices are marked as unvisited
  helperFunction(myGraph, 0, visited) // Call helper function starting from node 0
}


// Driver code
// Create a graph given in the above diagram
var myGraph = new Graph(6);
myGraph.addEdge(0, 1);
myGraph.addEdge(1, 2);
myGraph.addEdge(1, 3);
myGraph.addEdge(2, 4);
myGraph.addEdge(3, 4);
myGraph.addEdge(3, 5);

console.log("DFS Graph Traversal")
DFS(myGraph)