// Create a class BankAccount with methods to deposit and withdraw money.

class BankAccount {

    constructor(customerName, balance) {
        this.customerName = customerName;
        this.balance = balance;
    }

    deposit(amount) {
        return this.balance += amount;
    }

    withdraw(amount) {
        return this.balance -= amount;
    }
}

let customer = new BankAccount("Muskan Mujavar", 100000);
console.log(customer.deposit(20000));