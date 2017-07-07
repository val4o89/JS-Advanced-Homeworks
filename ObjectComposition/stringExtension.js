(function () {
    
    String.prototype.ensureStart = function (str) {
        
        if(!this.startsWith(str)){
            return str + this;
        } else {
            return this.toString();
        }
    }

    String.prototype.ensureEnd = function (str) {
        if(!this.endsWith(str)){
            return this + str;
        } else {
            return this.toString();
        }
    }
    
    String.prototype.isEmpty = function () {
        if(this.length !== 0){
            return  false;
        } else {
            return true;
        }
    }

    String.prototype.truncate = function (n) {
        let result = '';
        if(this.length <= n){
            return this.toString();
        }else if(n < 4){
            return '.'.repeat(n);
        }else{
            let splitted = this.split(' ');
            if(splitted.length < 2){
                result += this.substring(0, n - 3) + '...';
                return result;
            }else{
                splitted.pop();
                result = splitted.join(' ') + '...';
                while(result.length > n){
                    splitted.pop();
                    result = splitted.join(' ') + '...';
                }
                return result;
            }
        }
    }

    String.format = function () {
        let string = arguments[0];
        let pattern = /\{\d\}/g;
        let myArgs = arguments;
        let counter = 1;

        regexx = new RegExp(pattern);
        var result;
        while((result = regexx.exec(string)) !== null) {
            if(myArgs[counter] !== undefined){
                string = string.replace(result[0], myArgs[counter]);
                counter++;
            }
        }
        return string;
    }

})();

let str = 'my string'
console.log(str);
str = str.ensureStart('my')
console.log(str);
str = str.ensureStart('hello ')
str = str.truncate(16)
str = str.truncate(14)
str = str.truncate(8)
str = str.truncate(4)
str = str.truncate(2)
str = String.format('The {0} {1} fox',
    'quick', 'brown');
str = String.format('jumps {0} {1}',
    'dog');
