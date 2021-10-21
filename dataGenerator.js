class Data{
    //Constructor
    constructor(nPoints){
        this.x = [];
        this.y = [];
        for (let i = 0; i < nPoints; i++){
            this.x.push(Math.floor(Math.random() * Math.floor(nPoints)))
            this.y.push(Math.floor(Math.random() * Math.floor(nPoints)))
        }
    }
    //Points
    points(){
        points = new Array(nPoints)
        for (let i = 0; i < nPoints; i++){
            if (this.x[i] > this.y[i]){
                points.push({x:this.x, y:this.y, label:1})
            }else {
                points.push({x:this.x, y:this.y, label:-1})
            }
        }
    }
    //Build graphical objects
    plot(cat1, cat2){
        let cat1 = {
            x : [],
            y : [],
            name : cat1,
            text: []
        }
        let cat2 = {
            x : [],
            y : [],
            name : cat2,
            text: []
        }
        for (let i = 0; i < nPoints; i++){
            if (this.x[i] > this.y[i]){
                cat1.x.push(this.x[i])
                cat1.y.push(this.y[i])
                cat1.text.push(`${this.x[i]}-${this.y[i]}`)
            } else {
                cat2.x.push(this.x[i])
                cat2.y.push(this.y[i])
                cat2.text.push(`${this.x[i]}-${this.y[i]}`)
            }
        }
        return [cat1, cat2]
    }
}

module.exports = Data