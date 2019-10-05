const chalk = require("chalk");
const table = require("table").table;

function getSchedule({
  amount: amountString,
  interestRate: interestRateString,
  duration: durationString
}) {
  const schedule = [];

  const cleanAmount = amountString.replace("$", "");
  const cleanInterestRateString = interestRateString.replace("%", "");

  const amount = parseFloat(cleanAmount);
  const interestRate = parseFloat(cleanInterestRateString) / 100;
  const duration = parseInt(durationString);

  const monthlyInterestRate = interestRate / 12;

  const monthlyPayment =
    (monthlyInterestRate *
      amount *
      Math.pow(1 + monthlyInterestRate, duration)) /
    (Math.pow(1 + monthlyInterestRate, duration) - 1);

  let balance = amount;

  for (let month = duration; month > 0; month -= 1) {
    const interest = balance * monthlyInterestRate;
    const principal = monthlyPayment - interest;

    balance = balance - principal;

    const paymentNumber = duration - month + 1;

    schedule.push([
      paymentNumber,
      `$${monthlyPayment.toFixed(2)}`,
      `$${principal.toFixed(2)}`,
      `$${interest.toFixed(2)}`,
      `$${Math.abs(balance.toFixed(2))}`
    ]);
  }

  return schedule;
}

function displaySchedule(data) {
  let schedule = getSchedule(data);

  schedule = [
    ["Payment", "Amount", "Principal", "Interest", "Balance"],
    ...schedule
  ];

  console.log(chalk.green(`-- ${data.person}: ${data.loanId}-- `));
  console.log(table(schedule));
}

module.exports = { getSchedule, displaySchedule };
