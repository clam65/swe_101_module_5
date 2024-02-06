const person = {
  name: "Susan Bowel",
  accountNumber: 121321456,
  accountType: "Savings",
  balance: 500,
}; /* Object literal */

const entries = Object.entries(person);

for (let [key, value] of entries) {
  console.log(`${key}: ${value}`);
}

const arr = [
  {
    name: "Susan Bowel",
    accountNumber: 231453765,
    accountType: "Savings",
    balance: 500,
  },
  {
    name: "Tori Hales",
    accountNumber: 210231211,
    accountType: "Current",
    balance: 10500,
  },
  {
    name: "Mitch Soul",
    accountNumber: 121321456,
    accountType: "Savings",
    balance: 2500,
  },
  {
    name: "Mike Thal",
    accountNumber: 145765321,
    accountType: "current",
    balance: 1500,
  },
];

for (customer of arr) {
  console.log(`${customer.name} has a balance of ${customer.balance}`);
}

let aboveMin = arr.filter((customer) => customer.balance > 1000);
console.log(
  `The one(s) with minimum of 1000 dollars and above is(are): ${aboveMin}`
);

let listBalance = arr.map(customer => {
  customer.balance
})

let sortedBalance = listBlance.sort().reverse();

console.log(`The sorted balance is ${sortedBalance}`);


let custInfo = arr.map(customer => {
  customer.name + "" + customer.balance;
}
