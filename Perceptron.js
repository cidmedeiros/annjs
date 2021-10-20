/* The Perceptron Algorithm:
    1 - For every input, multply that input by its weight;
    2 - Sum all of the weighted inputs;
    3 - Compute the output of the perceptron based on that sum passed through an activation function (the sign function)
*/

//The activation function
function sign(n){
    if (n > 0){
        return 1 
    } else {
        return -1
    }
}

class Perceptron{
    //Constructor
    constructor(inputs){
        this.inputs = inputs
        this.weights = []
        //Initialize the weights randomly
        for (let i = 0; i < this.inputs.length; i++){
            let weight_i = Math.random(-1, 1);
            this.weights.push(weight_i)
        }
    }

    guess(){
        var sum = 0;
        //steps 1 and 2
        for (let i = 0; i < this.weights.length; i++){
            sum += this.inputs[i]*this.weights[i]
        }
        //step 3
        return sign(sum)
    }
}

module.exports = Perceptron