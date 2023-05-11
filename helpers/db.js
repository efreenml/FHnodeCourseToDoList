
const fs = require("fs");
const Task = require("../models/Task");
const file = "db/data.json";

const saveDb = async (data) => {
  await fs.writeFileSync(file, JSON.stringify(data));

}

const readDb = async (tasks) => {

  if (!fs.existsSync(file)) {
    return null;
  }
  const data = await fs.readFileSync(file, {encoding: "utf-8"});
  const info = JSON.parse(data);
  return info;
}


module.exports = {
  saveDb,
  readDb
}