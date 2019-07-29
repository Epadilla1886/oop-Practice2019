
class Calculator{
	constructor(){
		//takes in nothing
		this.mathNumb = [];
		this.mathOp = null;
		//make storage for the operator and the numbers
	}
	loadOperator(operator){
		//adds the operator to the next calculation
		//takes in the operator
		if(operator === '+'){
			this.mathOp = operator;
			return true;
		}else if(operator === '-'){
			this.mathOp = operator;
			return true;
		}else if(operator === '/'){
			this.mathOp = operator;
			return true;
		}else if(operator === '*'){
			this.mathOp = operator;
			return true;
		} else {
			return false;
		}
		//checks if it is a valid operation (+-*/)
			//save the op to the constructor storage
			//return true
		//or return false if not the right operator
	}
	loadNumber( num ){
		//takes in a number and stores it as one of the numbers to perform math on
		//takes in 1 number
		if(typeof(num) === 'number' && this.mathNumb.length <2){
			this.mathNumb.push(num);
			return this.mathNumb.length;
		}else{
			return false;
		}
		//checks if it is actually a number and if we have fewer than 2 numbers
		//if it is a number, and we have 2 or fewer numbers, store it
			//return the number of numbers stored
		//otherwise return false (too many numbers stored)
	}
	calculate(){
		//calculate the result of the stored numbers and operator
		//takes in nothing
		var numberOne = this.mathNumb[0];
		var numberTwo = this.mathNumb[1];
		var answer = eval(numberOne + this.mathOp + numberTwo);
		//calculates with the operator and 2 numbers
		this.mathNumb = [];
		//clears out the stored numbers
		return answer;
		//returns the calculated result
	}
}