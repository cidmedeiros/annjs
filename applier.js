plt = require('nodeplotlib');
Perceptron = require('./Perceptron');
Data = require('./dataGenerator');

//Generates a data set
var pts = new Data(100);

//Generates graphical cartesian points
var data = pts.plot(mode, type, markerSize);

//Graphical settings
var mode = 'markers';
var type = 'scatter';
var markerSize = 12;

//Applying graphical settings
data[0].mode = mode
data[1].mode = mode

data[0].type = type
data[1].type = type

data[0].markerSize = markerSize
data[1].markerSize = markerSize

//Graphical layout elements
var layout = {
  title:'Two Categories Labels Hover'
};

//plt.plot(data, layout);

p = new Perceptron(100, 0.001);
guess = p.guess(data);
console.log(guess);