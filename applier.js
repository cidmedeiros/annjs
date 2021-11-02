plt = require('nodeplotlib');
const tr = require('./training');
let data = require('./data.json');
const Perceptron = require('./Perceptron');

/* ----------------------------------------------------------PLOT GRAPHS AREA---------------------------------------------------------- */
//Graphical layout elements
let layout = {
    title:{
        text: `ORIGINAL DATA`,
        font: {
            size: 8
        }
    },
    showlegend: false
}

plt.plot(data.points, layout)

/* ----------------------------------------------------------TRAINING AREA---------------------------------------------------------- */
//Initialize the perceptron
var p = new Perceptron(3, 0.001); //n = 2 -> it's a 2d dataset
//keep the same perceptron to track training evolution
//p.setWeights([0.006272796065122432, 0.06444131706671461])

//Train the Percetron
let n_train = 20;
let stepLogs = 4;
function train(){
    var finalResults = tr.trainingSessions(p,data,n_train,stepLogs);
    Object.keys(finalResults).forEach((key) => {
        let layout = {
            title:{
                text: `Prediction ${key} Weights: [${finalResults[key].perceptron.getWeights()}]`,
                font: {
                    size: 8
                }
            },
            showlegend: false
        }
        plt.plot(finalResults[key].pred,layout);
    });
}
setTimeout(train, 1000);
