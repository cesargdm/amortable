# Amortable

> Amortization table calculator

<img alt="Amortable" src="https://github.com/cesargdm/amortable/raw/master/.github/images/amortable.png" width="400">

### Requirements

- Node.js 10.x or higher
- npm 5.2.x or higher

## Quick start

You can install this package globally by running `npm i -g amortable` this will avoid the need to run `npx`, so you will need to just run `amortable COMMAND ...`

The input structure is: `COMMAND NAME ID LOAN_AMOUNT ANNUAL_PERCENTAGE PERIOD(MONTHS)`, example: `Add Tom 101-1313-101 $300 35.5% 12`

### Commands

Interactive mode:

```bash
> npx amortable --interactive # or -i or ommit
```

Run commands from file:

```bash
> npx amortable --file ... # or -f
```

## Run locally

Clone repo and install dependencies with `npm i`

### Commands

Specify file:

```bash
node index.js -f ./data.txt
```

Interactive mode:

```bash
node index.js -i
```
