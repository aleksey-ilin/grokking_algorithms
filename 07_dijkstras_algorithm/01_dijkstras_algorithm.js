const findLowerCostNode = (costs) => {
  let lowerCost = Infinity;
  let lowerCostNode = null;
  for (node in costs) {
    const cost = costs[node];
    if (cost < lowerCost && !processed.includes(node)) {
      lowerCost = cost;
      lowerCostNode = node;
    }
  }
  return lowerCostNode;
};

const dijkstra = (graph, costs, parents, processed) => {
  let node = findLowerCostNode(costs);
  while (node !== null) {
    const cost = costs[node];
    const neighbors = graph[node];
    for (n in neighbors) {
      let newCost = cost + neighbors[n];
      if (costs[n] > newCost) {
        costs[n] = newCost;
        parents[n] = node;
      }
    }
    processed.push(node);
    node = findLowerCostNode(costs);
  }
  console.log(costs); // { a: 5, b: 2, fin: 6 }
  console.log(parents); // { a: 'b', b: 'start', fin: 'a' }
};

const graph = {};
graph.start = {};
graph.start.a = 6;
graph.start.b = 2;
graph.a = {};
graph.a.fin = 1;
graph.b = {};
graph.b.a = 3;
graph.b.fin = 5;
graph.fin = {};

const costs = {};
costs.a = 6;
costs.b = 2;
costs.fin = Infinity;

const parents = {};
parents.a = 'start';
parents.b = 'start';
parents.fin = null;

const processed = [];

dijkstra(graph, costs, parents, processed);
