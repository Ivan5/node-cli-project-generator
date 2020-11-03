#!/usr/bin/env node

// los imports

const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const shell = require("shelljs");
const chalk = require("chalk");

// Obtener las opciones de los templates

const TEMPLATE_OPTIONS = fs.readdirSync(path.join(__dirname, "templates"));

//console.log(TEMPLATE_OPTIONS);

const QUESTIONS = [
  {
    name: "template",
    type: "list",
    message: "¿Que tipo de proyecto quieres generar?",
    choices: TEMPLATE_OPTIONS,
  },
  {
    name: "proyecto",
    type: "input",
    message: "¿Cual es el nombre del proyecto?",
  },
];
//console.log(QUESTIONS);
inquirer.prompt(QUESTIONS).then((respuestas) => console.log(respuestas));
