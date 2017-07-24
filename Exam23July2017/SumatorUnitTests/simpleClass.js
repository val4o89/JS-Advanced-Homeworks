class Task {
    constructor(title, deadline) {
        this.title = title;
        this.deadline = deadline;
        this._status = 'Open';
        if(deadline < Date.now()){
            throw new Error();
        }
        this.isOverdue = this.checkDeadline(this.deadline);
    }

    get status(){
        return this._status;
    }

    set status(value){
        this._status = value;
    }

    checkDeadline(deadline){
        let currentDate = new Date();
        currentDate.setDate(currentDate.getDate());
        if(deadline > currentDate && this.status != 'Complete'){
            return false;
        } else {
            return true;
        }
    }


    static comparator(a, b){
        let statusValues = { 'In Progress': 1, 'Open': 2, 'Complete': 0 }

        if(!a.isOverdue && !b.isOverdue){
            if(a.status != b.status){
                if(statusValues[a.status] < statusValues[b.status]){
                    return -1
                } else {
                    return 1;
                }
            } else {
                if(a.deadline < b.deadline){
                    return 1;
                } else if(a.deadline > b.deadline){
                    return -1;
                } else {
                    return 0;
                }
            }
        } else if(a.isOverdue && b.isOverdue){
            if(a.deadline < b.deadline){
                return -1;
            } else if(a.deadline > b.deadline){
                return 1;
            } else {
                return 0;
            }
        } else {
            if(a.isOverdue && a.status != "Complete"){
                return -1
            } else if(b.isOverdue && b.status != "Complete"){
                return 1;
            } else if(a.status == "Complete"){
                return 1;
            } else if(b.status == "Complete"){
                return -1;
            }
        }
    }

    toString(){
        let statusIcon = { "Open": "\u2731", "In Progress": "\u219D ", "Complete": "\u2714" }
        let result = '';
        if(this.isOverdue && this.status != "Complete"){
            result += ("\u26A0" + " ");
        } else {
            result += ('[' + statusIcon[this.status] + ']' + " ");
        }

        result += `${this.title}`;
        if(this.status == "Complete"){
            return result;
        }
        if(this.isOverdue){
            result += "(overdue)"
        } else {
            result += ` (deadline: ${this.deadline})`
        }

        return result;
    }
}

let date1 = new Date();
date1.setDate(date1.getDate() + 7); // Set date 7 days from now
let task1 = new Task('JS Homework', date1);
let date2 = new Date();
date2.setFullYear(date2.getFullYear() + 1); // Set date 1 year from now
let task2 = new Task('Start career', date2);
console.log(task1 + '\n' + task2);
let date3 = new Date();
date3.setDate(date3.getDate() + 3); // Set date 3 days from now
let task3 = new Task('football', date3);
// Create two tasks with deadline set to current time
let task4 = new Task('Task 4', new Date());
let task5 = new Task('Task 5', new Date());
task1.status = 'In Progress';
task3.status = 'In Progress';
task5.status = "Complete";
let tasks = [task1, task2, task3, task4, task5];
setTimeout(() => {
    tasks.sort(Task.comparator);
    console.log(tasks.join('\n'));
}, 1000); // Sort and print one second later








