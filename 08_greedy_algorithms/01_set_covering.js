let statesNeeded = new Set(['mt', 'wa', 'or', 'id', 'nv', 'ut', 'ca', 'az']);

const stations = {};
stations['kone'] = new Set(['id', 'nv', 'ut']);
stations['ktwo'] = new Set(['wa', 'id', 'mt']);
stations['kthree'] = new Set(['or', 'nv', 'ca']);
stations['kfour'] = new Set(['nv', 'ut']);
stations['kfive'] = new Set(['ca', 'az']);

const finalStations = new Set();

while (statesNeeded.size > 0) {
  let bestStation = '';
  let statesCovered = new Set();

  for (let station in stations) {
    const covered = new Set([...statesNeeded].filter(state => stations[station].has(state)));
    if (covered.size > statesCovered.size) {
      bestStation = station;
      statesCovered = covered;
    }
  }
  finalStations.add(bestStation);
  statesNeeded = new Set([...statesNeeded].filter(state => !statesCovered.has(state)));
}

console.log(finalStations); // Set { 'kone', 'ktwo', 'kthree', 'kfive' }
