// Create a constructor function BankAccount that accepts an account holder's name and balance, and add a method to deposit money.

function BankAccount(accountName, balance) {
    this.accountName = accountName;
    this.balance = balance;
    this.deposit = function (amount) {
        this.balance += amount;
        console.log("--------------------------------------------")
        console.log(`Amount ${amount} deposited to account`);
        console.log("--------------------------------------------")

    }
    this.display = function () {
        console.log(`Account Name: ${this.accountName}`)
        console.log(`Balance: ${this.balance.toFixed(2)}`);
    }
}

const customer1 = new BankAccount("Muskan Mujavar", 120536);
customer1.deposit(18666.67);
customer1.deposit(500);
customer1.display();
