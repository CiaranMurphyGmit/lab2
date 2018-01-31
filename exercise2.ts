let myArray:Array<string> = [];

function addTask(task:string) {
    let count:number = myArray.push(task);
    console.log("Item " + task + " has been added to myArray");
    
    return count;
}

let x:number = addTask("Test");
console.log(x)

function listAllTasks() {
    for(let item in myArray) {
        console.log(item)
    }
}

listAllTasks();

addTask("Hello");

function deleteTask(task:string) {
    let index:number = myArray.indexOf(task);
    if (index > -1) {
        myArray.splice(index,1);
        console.log("We have deleted " + task);
    }

    return myArray.length;
}

listAllTasks();
let count:number = deleteTask("Hello");
console.log(count);