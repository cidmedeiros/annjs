plt = require('nodeplotlib');
Perceptron = require('./Perceptron');
Points = require('./training')

plots = new Points(100)
inputs = plots.plot();
/* p = new Perceptron(inputs);
guess = p.guess(); */
console.log(inputs);
const data = [{x: [1, 3, 4, 5], y: [3, 12, 1, 4], type: 'line'}];
plt.plot(inputs);
