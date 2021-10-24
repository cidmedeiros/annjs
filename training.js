//Tools for training
plt = require('nodeplotlib');

function changeColor(point){
    //it expects a plotable setup point
    point.marker = {
        color: 'rgb(255,0, 0)',
        size: 25,
        line: {
            color: 'rgb(255,0,0)',
            width: 2
        }
    }
    return point;
}

module.exports = {
    training: function(p,data){
        //p -> perceptron
        // data -> object with:
        //      * points -> data points with plotable setup
        //      * cats -> names of the expected categories on the data
        let results = {};
        results.iniWeights = p.getWeights();
        let pred = [];

        for (point of data.points){
            let inputs = [point.x[0], point.y[0]];
            let target = point.name == data.cats[0] ? 1 : -1;
            //Tweaking the weights
            p.train(inputs, target)
            //store current the performance
            let guess = p.guess(inputs)
            if (guess != target){
                plotPoint = changeColor(point);
                pred.push(plotPoint);
            } else {
                pred.push(point);
            }
        }

        results.perceptron = p;
        results.pred = pred;

        return results;
    },

    trainingSessions: function(p,data,n_train){
        //p -> perceptron
        //n_train -> int indicating how many time to train the perceptron
        // data -> object with:
        //      * points -> data points with plotable setup
        //      * cats -> names of the expected categories on the data
        console.log(`Init: ${p.getWeights()}`);
        for (let i = 0; i < n_train; i++){
            console.log(`Init: ${p.getWeights()}`);
            const iniWeights = p.getWeights();
            let results = training(p,plotPts,arrCats,data, n_train);
            console.log(`Final: ${results.perceptron.getWeights()}`);
            let layout = {
                title:{
                    text: `RUN ${i} Initial Weights: ${iniWeights} -- Final Weights: ${subResults.perceptron.getWeights()}`,
                    font: {
                        size: 8
                    }
                },
                showlegend: false
            }
            plt.plot(results.pred,layout);
        }
    }
}