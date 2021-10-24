const plt = require('nodeplotlib');
const Perceptron = require('./Perceptron');
const tr = require('./training');
let data = require('./data.json');

//Train the Percetron
p = new Perceptron(2, 0.001); //n = 2 -> it's a 2d dataset
let n_train = 3;
tr.trainingSessions(p,data,n_train);

/* ----------------------------------------------------------PLOT GRAPHS AREA---------------------------------------------------------- */
//Graphical layout elements
var layout = {
  title:'Two Categories Labels Hover',
  showlegend: false
  };

//Plot
/* var i = 0;
for (graph of sessionResults){
  console.log(graph.perceptron);
  let data = graph.pred
  let layout = {
    title:{
    text: `RUN ${i} Initial Weights: ${graph.iniWeights} -- Final Weights: ${graph.perceptron.getWeights()}`,
    font: {
      size: 8
    }
  },
    showlegend: false
  }
  i++
  plt.plot(data, layout);
} */