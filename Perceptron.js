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
//Perceptron
class Perceptron{
    //Constructor
    //n -> int: describes the n dimensions of the dataset
    //lr -> float: learning rate
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
        //inputs -> array: it holds n numbers corresponding the dataset dimensions (one single vector)
        //target -> int: id the vector's assigned category (for two categories usually: -1 and 1)
        //Please notice that training the perceptron is simply updating its weights accordingly to the error
        let guess = this.guess(inputs);
        //possible errors -> -1-(-1) = 0; -1-(1) = -2; 1-(-1) = 2; 1-(1) = 0 
        let error = target - guess;
        //Tune all the weights Gradient Descent style
        for (let i = 0; i < this.weights.length; i++){
            //if error = 0, weight doesn't get updated
            //the weights and the respective dimension is linked by the indices in both arrays
            this.weights[i] += error*inputs[i]*this.lr;
        }
    }

    // Guess -1 or 1 based on input values
    guess(inputs){
        //inputs -> array: it holds n numbers corresponding the dataset dimensions (one single vector)
        let sum = 0;
        //steps 1 and 2
        for (let i = 0; i < this.weights.length; i++){
            sum += inputs[i]*this.weights[i]
        }
        //step 3 - it returns -1 ou 1
        return sign(sum)
    }

    //Get thw weights
    getWeights(){
        return this.weights;
    }
}

module.exports = Perceptron