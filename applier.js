plt = require('nodeplotlib');
Perceptron = require('./Perceptron');
Points = require('./training');

var plots = new Points(100);
var mode = 'markers';
var type = 'scatter';
var markerSize = 4;
var data = plots.plot(mode, type, markerSize);
/* p = new Perceptron(inputs);
guess = p.guess(); */

data[0].mode = mode
data[1].mode = mode

var layout = {
  title:'Two Categories Labels Hover'
};

plt.plot(data, layout);