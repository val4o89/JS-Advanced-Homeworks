function solve(templateObj) {

    let myObj = {
        __proto__: {},
        extend: function (object) {
            for (let property in object) {
                if(object.hasOwnProperty(property)){
                    if(typeof object[property] === 'function'){
                        myObj.__proto__[property] = object[property]
                    } else {
                        myObj[property] = object[property];
                    }
                }

            }
        }
    }
    myObj.extend(templateObj)
    return myObj;
}

console.log(solve({
        extensionMethod: function () {
            console.log('abc');
        },
        extensionProperty: 'someString'
    }
));