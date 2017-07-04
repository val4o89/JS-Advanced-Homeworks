function solve() {

    let summary = new Map();

    for (let i = 0; i < arguments.length; i++) {
        let object = arguments[i];
        let type = typeof object;
        console.log(type + ': ' + object);
        
        if(!summary.has(type)){
            summary.set(type, 1);
        } else {
            summary.set(type, summary.get(type) + 1);
        }
    }
    let summaryArr = [...summary.keys()].sort(function (a, b) {

        if(summary.get(a) > summary.get(b)){
            return -1;
        } else if(summary.get(a) < summary.get(b)){
            return 1;
        } else {
            return 0
        }
    })

    for (let obj of summaryArr) {
        console.log(obj + ' = ' + summary.get(obj));
    }
}

solve(42, 'cat', 15, 'kitten', 'tomcat');