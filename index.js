#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 20000;
let myPin = 33028;
let pinAnswer = await inquirer.prompt(
// to create question we use inquirer.prompt
[
    {
        name: "pin",
        message: "Enter Your Pin",
        type: "number",
    },
]);
if (pinAnswer.pin === myPin) {
    console.log("Correct Pin Code!!");
    let operationAnswer = await inquirer.prompt([
        {
            name: "operation",
            message: "Please select an option",
            type: "list",
            choices: ["Withdraw", "Check Balance", "Fast Cash"],
        },
    ]);
    if (operationAnswer.operation === "Withdraw") {
        let amountAnswer = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter An Amount",
                type: "number",
            },
        ]);
        if (amountAnswer.amount > 20000) {
            console.log(`\nYou do not have sufficient funds to withdraw ${amountAnswer.amount} from your account.\n\nYour current balance is ${myBalance}.`);
        }
        else {
            myBalance -= amountAnswer.amount;
            console.log(`\nYou have made a cash Withdrawal of PKR ${amountAnswer.amount}.\n\nYour remaining balance is PKR ${myBalance}.`);
        }
    }
    else if (operationAnswer.operation === "Check Balance") {
        console.log(`Current Balance: ${myBalance}`);
    }
    if (operationAnswer.operation === "Fast Cash") {
        let fastCashAnswer = await inquirer.prompt([
            {
                name: "fastCash",
                message: "Please select an option",
                type: "list",
                choices: ["5000", "1000", "15000", "20000"],
            },
        ]);
        if (fastCashAnswer.fastCash) {
            console.log(`\nYou have made a cash Withdrawal of PKR ${fastCashAnswer.fastCash}`);
        }
    }
}
else {
    console.log("Incorrect Pin");
}
