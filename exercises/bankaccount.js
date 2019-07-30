

class Account{
	constructor(){
		//store the amount of money in the account
		this.account = null;
	}
	add( amount ){
		//add money to the amount stored in the account
		//takes in an amount
		this.account = amount + this.account;
		//adds it to the existing amount
		return this.account;
		//returns the new amount in the account
	}
	remove( amount ){
		//removes funds from an account
		var withdrawl = amount;
		//check if the amount to withdraw is more than the account
		if(withdrawl > this.account){
			return this.account;
		}else{
			this.account = this.account - withdrawl;
			return this.account;
		}
		//if more, only withdraw the amount in the account, not more
		//if less, withdraw the amount specified
		//return the amount actually withdrawn
	}
	getAmount(){
		return this.account;
		//returns the amount in the account
	}
}