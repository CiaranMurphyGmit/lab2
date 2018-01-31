import {myQueue} from "./interface";

class myClass implements myQueue {
    myArray:Array<string> = [];

    addTask(task:string) {
        let count:number = myArray.push(task);
        console.log("Item " + task + " has been added to myArray");
    
        return count;
    }

    listAllTasks() {
        for(let item in myArray) {
            console.log(item)
        }
    }

    deleteTask(task:string) {
        let index:number = myArray.indexOf(task);
        if (index > -1) {
            myArray.splice(index,1);
            console.log("We have deleted " + task);
        }

        return myArray.length;
        }
}
