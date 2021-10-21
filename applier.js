plt = require('nodeplotlib');
Perceptron = require('./Perceptron');
Data = require('./dataGenerator');

//Generates a data set
var data = new Data(30);

//Generates a categorized data points
pts = data.points()

//Train the ANN
/* p = new Perceptron(100, 0.001);
guess = p.guess(data);
console.log(guess); */

//Generates graphical cartesian points
var plotPts = data.plot(pts, c1='Cat1', c2='Cat2');

//Graphical settings
var mode = 'markers';
var type = 'scatter';
var markerSize = 12;

//Applying graphical settings
plotPts[0].mode = mode
plotPts[1].mode = mode

plotPts[0].type = type
plotPts[1].type = type

plotPts[0].markerSize = markerSize
plotPts[1].markerSize = markerSize

//Graphical layout elements
var layout = {
  title:'Two Categories Labels Hover'
};

//plt.plot(plotPts, layout);