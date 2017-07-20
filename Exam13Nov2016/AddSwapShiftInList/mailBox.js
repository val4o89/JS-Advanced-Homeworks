class MailBox{
    constructor(){
        this.mailBox = [];
    }

    addMessage(subject, text) {
        this.mailBox.push({subject, text});
        return this;
    }

    get messageCount(){
        return this.mailBox.length;
    }

    deleteAllMessages() {
        this.mailBox = [];
        return this;
    }

    findBySubject(substr){
        return this.mailBox.filter(x => x.subject.includes(substr));
    }

    toString(){
        let result = '';

        if(this.messageCount == 0){
            result += ' * (empty mailbox)';
        } else {
            for (let message of this.mailBox) {
                result += ` * [${message.subject}] ${message.text}\n`
            }
        }

        return result;
    }
}

let mb = new MailBox();
console.log("Msg count: " + mb.messageCount);
console.log('Messages:\n' + mb);
mb.addMessage("meeting", "Let's meet at 17/11");
mb.addMessage("beer", "Wanna drink beer tomorrow?");
mb.addMessage("question", "How to solve this problem?");
mb.addMessage("Sofia next week", "I am in Sofia next week.");
console.log("Msg count: " + mb.messageCount);
console.log('Messages:\n' + mb);
console.log("Messages holding 'rakiya': " +
    JSON.stringify(mb.findBySubject('rakiya')));
console.log("Messages holding 'ee': " +
    JSON.stringify(mb.findBySubject('ee')));

mb.deleteAllMessages();
console.log("Msg count: " + mb.messageCount);
console.log('Messages:\n' + mb);

console.log("New mailbox:\n" +
    new MailBox()
        .addMessage("Subj 1", "Msg 1")
        .addMessage("Subj 2", "Msg 2")
        .addMessage("Subj 3", "Msg 3")
        .toString());
