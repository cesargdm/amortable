#!/usr/bin/env node

const fs = require("fs");
const chalk = require("chalk");
const path = require("path");
const program = require("commander");
const readline = require("readline");

const amortization = require("./amortization");
const utils = require("./utils");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function runAction(action) {
  if (action.type === utils.COMMANDS.ADD_LOAN) {
    amortization.displaySchedule(action.data);
  } else {
    throw new Error("Cannot handle specified action");
  }
}

function runActions(input, isInteractive) {
  try {
    const stringCommands = utils.inputToCommands(input);
    let actions = utils.getActionsFromCommands(stringCommands);
    actions = actions.sort(utils.sortByPerson);

    actions.forEach(runAction);
  } catch (error) {
    console.log(chalk.red(error));
  }

  if (isInteractive) {
    promptCommand();
  } else {
    process.exit(0);
  }
}

function promptCommand() {
  rl.question("> ", answer => {
    runActions(answer, true);
  });
}

function main(filePath) {
  if (filePath) {
    const input = fs.readFileSync(filePath, "utf8");

    runActions(input);
  } else {
    promptCommand();
  }
}

program
  .option("-i, --interactive", "output extra debugging")
  .option("-f, --file <file>", "flavour of pizza");

program.parse(process.argv);

main(program.file);
