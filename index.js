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
const DIR_ACTUAL = process.cwd();
inquirer.prompt(QUESTIONS).then((respuestas) => {
  const template = respuestas["template"];
  const proyecto = respuestas["proyecto"];

  const templatePath = path.join(__dirname, "templates", template);

  const pathTarget = path.join(DIR_ACTUAL, proyecto);

  createProject(pathTarget);
});

function createProject(projectPath) {
  //comprobar que no existe el directorio

  if (fs.existsSync(projectPath)) {
    console.log(chalk.red("No puedes crear el proyecto, porque ya existe"));
    return false;
  }
  fs.mkdirSync(projectPath);
  return true;
}
