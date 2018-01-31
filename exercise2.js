"use strict";
var myArray = [];
function addTask(task) {
    var count = myArray.push(task);
    console.log("Item " + task + " has been added to myArray");
    return count;
}
var x = addTask("Test");
console.log(x);
function listAllTasks() {
    for (var item in myArray) {
        console.log(item);
    }
}
listAllTasks();
addTask("Hello");
function deleteTask(task) {
    var index = myArray.indexOf(task);
    if (index > -1) {
        myArray.splice(index, 1);
        console.log("We have deleted " + task);
    }
    return myArray.length;
}
listAllTasks();
var count = deleteTask("Hello");
console.log(count);
