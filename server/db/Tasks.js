const knex = require("./knex")

function addTask(task) {
    return knex("Tasks").insert(task);
}

function getTasks() {
    return knex("Tasks").select("*");
}

function deleteTask(id) {
    return knex("Tasks").where("id",id).del();
}

function updateTask(id , task) {
    return knex("Tasks").where("id",id).update(task);
}

module.exports = {
    addTask ,
    getTasks ,
    deleteTask ,
    updateTask
}