const COMMANDS = {
  ADD_LOAN: "Add"
};

function parseInputToAction(commandString) {
  const separeatedCommand = commandString.split(" ");

  const action = separeatedCommand[0];

  if (action === COMMANDS.ADD_LOAN) {
    const person = separeatedCommand[1];
    const loanId = separeatedCommand[2];
    const amount = separeatedCommand[3];
    const interestRate = separeatedCommand[4];
    const duration = separeatedCommand[5];

    return {
      type: action,
      data: { person, loanId, amount, interestRate, duration }
    };
  }

  throw new Error("Invalid command");
}

function inputToCommands(stringInput) {
  const inputs = stringInput.split("\n");
  const cleanInputs = inputs.filter(input => Boolean(input));

  return cleanInputs;
}

function getActionsFromCommands(input) {
  return input.map(parseInputToAction);
}

module.exports = { inputToCommands, getActionsFromCommands, COMMANDS };
