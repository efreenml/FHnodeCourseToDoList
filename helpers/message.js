require("colors");


const showMenu = () => {

  return new Promise( (resolve, reject) => {
    console.clear();

    console.log("======================");
    console.log("Select option");
    console.log("======================\n");
    console.log(`${'1.-'.green} create task`);
    console.log(`${'2.-'.green} list tasks`);
    console.log(`${'3.-'.green} list finished tasks`);
    console.log(`${'4.-'.green} list pending tasks`);
    console.log(`${'5.-'.green} complete task(s)`);
    console.log(`${'6.-'.green} delete task`);
    console.log(`${'0.-'.green} \n\nexit`);
  
    const readLine = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout
    });
    
    readLine.question(`\nSelect an option:\n`, (opt) => {
      readLine.close();
      resolve(opt);
    });
  });
}

const pause = () => {
  return new Promise((resolve, reject) => {
    const readLine = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout
    });
    
    readLine.question(`\nPress ${ "ENTER".blue } to select option.`, (opt) => {
      readLine.close();
      resolve();
    });

  });
}



module.exports = {
  showMenu,
  pause
}