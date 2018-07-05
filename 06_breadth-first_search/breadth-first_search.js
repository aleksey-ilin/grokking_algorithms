const personIsSeller = name => name.slice(-1) === 'm';

const graph = {};
graph.you = ['alice', 'bob', 'claire'];
graph.bob = ['anuj', 'peggy'];
graph.alice = ['peggy'];
graph.claire = ['thom', 'jonny'];
graph.anuj = [];
graph.peggy = [];
graph.thom = [];
graph.jonny = [];

const search = (name) => {
  let searchQueue = [];
  searchQueue = searchQueue.concat(graph[name]);
  let searched = [];
  while (searchQueue.length > 1) {
    [person, ...rest] = searchQueue;
    if (!searched.includes(person)) {
      if (personIsSeller(person)) {
        console.log(`${person} is a mango seller!`);
        return true;
      }
    }
    searchQueue = searchQueue.slice(1).concat(graph[person]);
    searched = searched.concat(person);
  }
  return false;
};

search('you'); // thom is a mango seller
