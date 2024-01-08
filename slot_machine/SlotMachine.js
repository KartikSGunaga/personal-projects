// 1. Deposit some money
// 2. Determine the number of lines to bet on
// 3. Collect a bet amount
// 4. Spin the slot machine
// 5. Check if the user won
// 6. Give user their winnings
// 7. Play again

class SlotMachine {
    constructor() {

    }

}

class Player {
    constructor(name, balance) {
        this.playerName = name;
        this.balance = balance;
    }

    getBalance() {
        return(`Balance remaining: ${this.balance}`);
    }

    balanceCheckAndUpdate(withdrawal){
        if(withdrawal >= this.balance){
            this.balance -= withdrawal;
            return(`${withdrawal} deposited successfully
            Remaining balance: ${this.balance}`);
        }
        return (`Insufficient balance.
        Remaining balance: ${this.balance}`);
    }


}