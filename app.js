
//require("colors");

require('colors');

const { saveDb, readDb } = require('./helpers/db.js');
// const { inquirerMenu } = require("./helpers/inquirer");
const { inquirerMenu, pause, readInput } = require("./helpers/inquirer.js");
const { Tasks } = require("./models/Tasks.cjs");



 const main = async () => {

let opt = '';
const tasks = new Tasks();
const listTask = await readDb(tasks);

if (listTask) {
  tasks.setArrayList(listTask);
}
do {
  opt = await inquirerMenu();
  switch (opt.option) {
    case 1:
      // create option
      const desc = await readInput("task description: ");
      tasks.createTask(desc);
      break;
    case 2:
      console.log("option 2:")
      tasks.listTasks();
      // list option
      break;
  
    default:
      break;
  }

  await saveDb(tasks.arrayList);
  await pause();
} while(opt.option != 0);

};

main();