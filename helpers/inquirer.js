
// const inquirer = require('inquirer');
require(`colors`);
const inquirer = require('inquirer');



const menuOptions = [
  {
    type: `list`,
    name: `option`,
    message: `¿qué desea hacer?`,
    choices: [
      {
      value: 1,
      name: `${"1".green}.- create task`
      },
      {
      value: 2,
      name: `${"2".green}.- list tasks`
      },
      {
      value: 3,
      name: `${"3".green}.- list finished tasks`
      },
      {
      value: 4,
      name: `${"4".green}.- list pending tasks`
      },
      {
      value: 5,
      name: `${"5".green}.- complete task(s)`
      },
      {
      value: 6,
      name: `${"6".green}.- deleat task`
      },
      {
      value: 0,
      name: `${"0".green}-. exit`
      }
    ]
  }
];

const inquirerMenu = async () => {

  console.log(`======================`.green);
  console.log(`Select option`.green);
  console.log(`======================\n`.green);

  const opt = await inquirer.prompt(menuOptions);
  return opt;
}

const pause = async () => {
  const question = [{
    type: `input`,
    name: `Press enter`,
    message: `Press ${`enter`.green} to continue`
  }];
  const opt = await inquirer.prompt(question);

}


const readInput = async (message) => {
  const question = [{
    type: `input`,
    name: `desc`,
    message,
    validate (value) {
      if(value.length === 0) {
        return `write an value pls`
      }
      return true;
    }
  }]
  const { desc } = await inquirer.prompt(question);
  return desc;
}


module.exports = {
  readInput,
  pause,
  inquirerMenu
}







