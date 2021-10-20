class Points{
    //Constructor
    constructor(nPoints){
        this.x = [];
        this.y = [];
        for (let i = 0; i < nPoints; i++){
            this.x.push(Math.floor(Math.random() * Math.floor(nPoints)))
            this.y.push(Math.floor(Math.random() * Math.floor(nPoints)))
        }
    }

    plot(){
        let plots = []
        for (let i = 0; i < this.x.length; i++){
            if (this.x[i] > this.y[i]){
                plots.push([this.x[i],this.y[i], 1])
            } else {
                plots.push([this.x[i],this.y[i], -1])
            }
        }
        return plots
    }
}

module.exports = Points