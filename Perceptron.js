/* The Perceptron Algorithm:
    1 - For every input, multply that input by its weight;
    2 - Sum all of the weighted inputs;
    3 - Compute the output of the perceptron based on that sum passed through an activation function (the sign function)
*/

//The activation function
function sign(n){
    if (isNaN(n)){
        console.log('Input is not a number!')
    } else {
        //if input is a number
        if (n > 0){
            return 1 
        } else {
            return -1
        }
    }
}

class Perceptron{
    //Constructor
    constructor(n, lr){
        this.weights = new Array(n);
        this.lr = lr;
        //Initialize the weights randomly
        for (let i = 0; i < this.weights.length; i++){
            this.weights[i] = Math.random(-1, 1);
        }
    }
    // Function to train the Perceptron
    // Tweaking the weights: Weights are adjusted based on target
    train(inputs, target){
        let guess = this.guess();
        //possible errors -> -1-(-1) = 0; -1-(1) = -2; 1-(-1) = 2; 1-(1) = 0 
        let error = target - guess;

        //Tune all the weights Gradient Descent style
        for (let i = 0; i < this.weights.length; i++){
            this.weights[i] += error*inputs[i]*this.lr;
        }
    }

    // Guess -1 or 1 based on input values
    guess(inputs){
        let sum = 0;
        //steps 1 and 2
        for (let i = 0; i < this.weights.length; i++){
            sum += inputs[i]*this.weights[i]
        }
        //step 3
        return sign(sum)
    }
}

module.exports = Perceptron