const tr = require('./training');
let data = require('./data.json');
const Perceptron = require('./Perceptron');

//Initialize the perceptron
var p = new Perceptron(2, 0.001); //n = 2 -> it's a 2d dataset
//keep the same perceptron to track training evolution
p.setWeights([0.06272796065122432, 0.6444131706671461])

//Train the Percetron
let n_train = 20;
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