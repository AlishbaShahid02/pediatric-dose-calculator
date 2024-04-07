#! /usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';
console.log(chalk.cyan.bold(`"Welcome to prediatric dose calculator"`));
let input = await inquirer.prompt([
    { name: "weight", type: "number", message: "Enter child's weight in pounds" },
    { name: "dose", type: "number", message: "Enter adult dose" },
]);
let prediatric_dose = input.weight / 150 * input.dose;
console.log(chalk.magentaBright(`Prediatric dose is: ${prediatric_dose}`));
