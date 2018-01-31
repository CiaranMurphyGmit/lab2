"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var myClass = /** @class */ (function () {
    function myClass() {
        this.myArray = [];
    }
    myClass.prototype.addTask = function (task) {
        var count = myArray.push(task);
        console.log("Item " + task + " has been added to myArray");
        return count;
    };
    myClass.prototype.listAllTasks = function () {
        for (var item in myArray) {
            console.log(item);
        }
    };
    myClass.prototype.deleteTask = function (task) {
        var index = myArray.indexOf(task);
        if (index > -1) {
            myArray.splice(index, 1);
            console.log("We have deleted " + task);
        }
        return myArray.length;
    };
    return myClass;
}());
