plt = require('nodeplotlib');
Perceptron = require('./Perceptron');
Data2d = require('./dataGenerator');
tr = require('./training');

//Generates a data set
var data = new Data2d(800);

//Generates a categorized data points
var pts2d = data.points();

//Generates graphical cartesian points
var arrCats = ['Cat1','Cat2'];
var plotPts = data.plot(pts2d, c1=arrCats[0], c2=arrCats[1]);

//Train the Percetron
p = new Perceptron(2, 0.001); //n = 2 -> it's a 2d dataset
let n_train = 6;
let results = tr.trainingSessions(p,plotPts,arrCats,data,n_train);

/* var layout = {
  title:{
    text: `RUN ${i} /\n/ Initial Weights: ${results.iniWeights} -- Final Weights: ${results.finalWeights}`,
    font: {
      size: 8
    }
  },
  showlegend: false
} */

/* ----------------------------------------------------------PLOT GRAPHS AREA---------------------------------------------------------- */
//Graphical layout elements
var layout = {
  title:'Two Categories Labels Hover',
  showlegend: false
  };

//Plot
/* for (graph of results){
  plt.plot(graph, layout);
} */