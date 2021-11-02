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

function execGuess(p,data){
    //try to predict all the data
    let pred = [];
    for (point of data.points){
        let inputs = [point.x[0], point.y[0], point.bias[0]];
        let target = point.name == data.cats[0] ? 1 : -1;
        //a finished training perceptron with a non-updating weights
        let guess = p.guess(inputs)
        if (guess != target){
            plotPoint = changeColor(point);
            pred.push(plotPoint);
        } else {
            pred.push(point);
        }
    }
    return pred
}

function training (p,data){
    //p -> perceptron
    // data -> object with:
    //      * points -> data points with plotable setup
    //      * cats -> names of the expected categories on the data
    let results = {};
    results.iniWeights = p.getWeights();
    for (point of data.points){
        let inputs = [point.x[0], point.y[0], point.bias[0]];
        let target = point.name == data.cats[0] ? 1 : -1;
        //Tweaking the weights
        p.train(inputs, target);
        //await new Promise(resolve => setTimeout(resolve, 200));
    }

    //storing the current predictions
    results.pred = execGuess(p,data);
    results.perceptron = p;
    return results;
}

module.exports = {
    trainingSessions (p,data,n_train, stepLogs){
        //p -> perceptron
        //n_train -> int indicating how many time to train the perceptron
        // data -> object with:
        //      * points -> data points with plotable setup
        //      * cats -> names of the expected categories on the data

        //First run set up
        let finalResults = {}
        const firstIniWeights = JSON.stringify(p.getWeights());
        let previousResults = training(p, data);
        let layout = {
            title:{
                text: `RUN ${1} Initial Weights: ${firstIniWeights} -- Final Weights: [${p.getWeights()}]`,
                font: {
                    size: 8
                }
            },
            showlegend: false
        };
        plt.plot(previousResults.pred,layout);
        finalResults['ans'] = previousResults;

        for (let i = 0; i < n_train-1; i++){
            const iniWeights = JSON.stringify(p.getWeights());
            let results = training(p, data);
            finalResults[`ans_${i}`] = results;
            if(i % stepLogs == 0){
                console.log(`Run number ${i+1}`);
                console.log(`RUN ${i+1} Initial Weights: ${iniWeights} -- Final Weights: [${results.perceptron.getWeights()}]`);
                if(/* JSON.stringify(previousResults) != JSON.stringify(results */true){
                    previousResults = results
                    let layout = {
                        title:{
                            text: `RUN ${i} Initial Weights: ${iniWeights} -- Final Weights: [${results.perceptron.getWeights()}]`,
                            font: {
                                size: 8
                            }
                        },
                        showlegend: false
                    }
                    plt.plot(results.pred,layout)
                }
            }
        }
        return finalResults
    }
}