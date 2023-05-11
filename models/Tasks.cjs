const { readDb } = require("../helpers/db");
const Task = require("./Task");
// import { Task } from "./Task";
class Tasks {
  _list = {};


  constructor() {
    this._list = {};
  }

  get arrayList() {
    const list = [];

    Object.keys(this._list).forEach(key => {
      const task = this._list[key];
      list.push(task);
    });

    return list;
  }
  setArrayList(list = []) {
    list.forEach(data => {
      this._list[data.id] = data
    });
  }

  listTasks() {
    const keys = Object.keys(this._list);
    keys.forEach((key, order) => {
      console.log(`${order + 1}`.green + `.- ${this._list[key].desc} :: ${this._list[key].doneDate ? "Completada".green : "Pendiente".red}`);
    });
  }

  set setList(list) {
    this._list = list;
  }
  createTask(desc = '') {
    let task = new Task(desc);
    this._list[task.id] = task;
  }


  listPendingCompletedTasks(completed = true) {
    let counter = 1;
    const keys = Object.keys(this._list);
    keys.forEach((key) => {
      if (completed) {
        if (this._list[key].doneDate) {
          console.log(`${counter}.- `.green + `${this._list[key].desc} :: ${this._list[key].doneDate.green}` );
          ++counter;
        }
      } else {
        if (!this._list[key].doneDate) {
          console.log(`${counter}.- `.green + `${this._list[key].desc} :: ${"Pending".red}` );
          ++counter;
        }
      }
    })
  }


  deleteTask(id) {
    delete this._list[id];
  };
}



module.exports = { Tasks };