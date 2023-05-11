const { v4: uuidv4 } = require('uuid');


class Task {
  id = '';
  desc = '';
  doneDate = null; 

  constructor(desc) {
    this.desc = desc;
    this.id = uuidv4();
    this.doneDate = null;
  }

}
// export default Task;

module.exports =  Task;