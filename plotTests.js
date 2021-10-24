plt = require('nodeplotlib');
Data2d = require('./dataGenerator');

var data = new Data2d(100);
var x = data.x;
var y = data.y;

const data1 = [{
    x: x.slice(6,12),
    y: y.slice(6.12),
    type: 'scatter'
  }];

  const data2 = [{
    x: x.slice(0,6),
    y: y.slice(0.6),
    type: 'scatter'
  }];

  const data3 = [{
    x: x.slice(13,19),
    y: y.slice(13,19),
    type: 'scatter'
  }];
  
plt.stack(data1);
plt.stack(data2);
plt.stack(data3);
plt.plot();