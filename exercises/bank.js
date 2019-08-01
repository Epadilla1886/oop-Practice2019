

class Bank{
	constructor( bankname ){
		//takes in the name of the bank.
		this.nameOfBank = bankname;
        this.accountList = {};
		//makes an object to store all accounts into
	}
	makeAccount( accountNumber ){
		//makes an account
		//takes in the account number of an account
		if(this.accountList[accountNumber] === true){
			return false;
		} else {
			this.accountList[accountNumber] = new Account();
            return this.accountList.accountNumber;
		}
		//checks if the account number already exists in the account storage object in the constructor
			//if already exists, returns false
		//otherwise makes an new Account object, storing it into the storage object in the constructor
		//returns the Account object that was constructed
	}
	checkForAccount( accountNumber ){
		//checks if an account exists or not
		//takes in the account number of an account
		if (!this.accountList[accountNumber]) {
            return false;
        } else {
            return true;
        }
		//returns false if the account does not exist in the accounts object from the constructor
		//returns true if the account does exist
	}
	removeAccount( accountNumber ){
		//removes an account
		//takes in an account number
		var accountNum = accountNumber;
		if(!this.accountList[accountNumber]){
			return "account " +accountNum+ " does not exist";
		}
		else if(this.accountList[accountNumber].account > 0){
			return "account is not empty";
		}
		else{
			delete this.accountList[accountNumber]
			return "account " +accountNum+ " deleted";
		}
		//if the account doesn't exist, returns
			//"account <accountNumber> does not exist" where accountNumber is the account number
		//if the account is not empty, returns
			//'account is not empty'
		//otherwise deletes the account from the constructor storage
		//returns 
			'account <accountNumber> deleted'

	}
	deposit( accountNumber, deposit ){
		//deposits money into an account
		//takes in an account number and a numeric amount
		var accountNum = accountNumber;
		var accountAmount = deposit;

		if(!this.accountList[accountNumber]){
			return "account does not exist";
		} else {
			this.accountList[accountNumber].add(deposit);
			return "account " +accountNum+ " now has " +accountAmount;
		}
		//if the account doesn't exist, returns
			//'account does not exist'

		//otherwise uses the account's add method and adds to the account
			//returns
			//"account <accountNumber> now has <new account amount>
	}
	withdraw( accountNumber, amount ){
		//removes money from an account
		//takes in an account number and an amount
		var accountNum = accountNumber;
		if(!this.accountList[accountNumber]){
			return "account does not exist";
		} 
		//checks if the account exists, if not
			//return 'account does not exist'
			else{
				var withdrawl = this.accountList[accountNumber].remove(amount);
				return "removed " +withdrawl+ " from account " +accountNum+ ". It now has " +this.accountList[accountNumber].account;
			}
		//uses the Account's remove method to withdraw funds from the account
		//returns "removed <amount withdrawn> from account <account number>. It now has <remaining amount in account>"
	}
}