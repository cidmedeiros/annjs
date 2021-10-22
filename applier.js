plt = require('nodeplotlib');
Perceptron = require('./Perceptron');
Data2d = require('./dataGenerator');

//Generates a data set
var data = new Data2d(100);

//Generates a categorized data points
var pts2d = data.points()
console.log(pts2d[0])

//Train the ANN
var pt2d = [pts2d[0].x, pts2d[0].y]
p = new Perceptron(2, 0.001);
guess = p.guess(pt2d);
console.log(guess,'--',pts2d[0].label);


/* ----------------------------------------------------------PLOT GRAPHS AREA---------------------------------------------------------- */
//Generates graphical cartesian points
var plotPts = data.plot(pts2d, c1='Cat1', c2='Cat2');

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