class Graph {
    constructor() {
        this.nodes = [];
        this.edges = [];
    }

    addNode(node) {
        this.nodes.push(node);
        this.edges[node] = [];
    }

    updateDistance(node1, node2, distance) {
        this.edges[node1][node2] = distance;
        // this.edges[node2][node1] = distance; // For undirected graph
    }

    dijkastra(startNode) {
        //Initilize distances and visited arrays
        let distances = [];
        let visited = [];

        // Set the distance of the start node to 0 and all other nodes to infinity
        for (let i = 0; i < this.nodes.length; i++) {
            if (this.nodes[i] == startNode) {
                distances[this.nodes[i]] = 0;
            } else {
                distances[this.nodes[i]] = Infinity;
            }
        }

        let currentNode = startNode;

        // Update the distances of its neighbors

        // Looping through all unvisited nodes to find the one with the smallest distance
        while (currentNode !== null) {
            // Find the unvisited node with the smallest distance
            for (let neighbor in this.edges[currentNode]) {
                let newDistance = distances[currentNode] + this.edges[currentNode][neighbor];

                if (newDistance < distances[neighbor]) {
                    distances[neighbor] = newDistance;
                }
            }

            // Mark that node as visited
            visited.push(currentNode);

            currentNode = this.findClosestUnvisitedNode(distances, visited);
        }

        console.log(distances);

    }

    findClosestUnvisitedNode(distances, visited) {
        let closetUnvisitedNode = null;
        let shortestDistance = Infinity;

        for (let currentNode in distances) {
            let distance = distances[currentNode];

            if (distance < shortestDistance && !visited.includes(currentNode)) {
                closetUnvisitedNode = currentNode;
                shortestDistance = distance;
            }
        }

        return closetUnvisitedNode;
    }
}


let graph = new Graph();
graph.addNode('A');
graph.addNode('B');
graph.addNode('C');
graph.addNode('D');

graph.updateDistance('A', 'B', 3);
graph.updateDistance('A', 'C', 2);
graph.updateDistance('B', 'D', 2);
graph.updateDistance('C', 'D', 8);

graph.dijkastra('A');