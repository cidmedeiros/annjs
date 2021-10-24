//Tools for training

module.exports = {
    training: function (p,plotPts,arrCats,data){
        //p -> perceptron
        //PlotPts -> data points with plotable setup
        let results = {};
        results.iniWeights = p.getWeights();
        let pred = [];

        for (point of plotPts){
            let inputs = [point.x[0], point.y[0]];
            let target = point.name == arrCats[0] ? 1 : -1;
            p.train(inputs, target)
            //Visualize training on the fly
            let guess = p.guess(inputs)
            if (guess != target){
                plotPoint = data.changeColor(point);
                pred.push(plotPoint);
            } else {
                pred.push(point);
            }
        }
        
        results.preceptron = p;
        results.pred = pred;
        return results;
    }
}