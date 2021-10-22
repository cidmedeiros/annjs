plt = require('nodeplotlib');
Data2d = require('./dataGenerator');

var data = new Data2d(500);
var x = data.x;
var y = data.y;

var plotData = [
    {
        x: x,
        y: y,
        type: 'scatter',
        mode: 'markers',
        marker: {
            color: 'rgb(0, 0, 255)',
            opacity: 0.5,
            size: 20,
            line: {
                color: 'rgb(0, 0, 255)',
                width: 2
            }
        },
        showlegend: false
    },
    {
        x: [2,2],
        y: [4.25,4.75],
        type: 'scatter',
        mode: 'markers',
        marker: {
            color: 'rgb(17, 157, 255)',
            opacity: 0.5,
            size: 60,
            line: {
                color: 'rgb(231, 99, 250)',
                width: 6
            }
        },
        showlegend: false,
    }
]

plt.stack(plotData);
  
plt.plot();