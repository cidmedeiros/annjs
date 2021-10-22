plt = require('nodeplotlib');
Perceptron = require('./Perceptron');
Data2d = require('./dataGenerator');

//Generates a data set
var data = new Data2d(100);

//Generates a categorized data points
var pts2d = data.points();
//Generates graphical cartesian points
var arrCats = ['Cat1','Cat2'];
var plotPts = data.plot(pts2d, c1=arrCats[0], c2=arrCats[1]);
plt.stack(plotPts)
//Train the Percetron
p = new Perceptron(2, 0.001); //n = 2 -> it's a 2d dataset
let initWeights = p.getWeights();
console.log(`Initial Weights: ${initWeights}`);

for (let i =0; i < pts2d.lenght; i++){
  let inputs = [pts2d[i].x, pts2d[i].y];
  let target = pts2d[i].label
  p.train(inputs, target)
  //Visualize training on the fly
  let guess = p.guess(inputs)
  if (guess != target){

  }
}

let finWeights = p.getWeights();
console.log(`Final Weights: ${finWeights}`);

/* ----------------------------------------------------------PLOT GRAPHS AREA---------------------------------------------------------- */
//Graphical layout elements
var layout = {
  title:'Two Categories Labels Hover'
  };

//Plot
plt.plot(plotPts, layout);