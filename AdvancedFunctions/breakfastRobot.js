let manager = (function () {
    let robot = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };

    let recipes = {
        apple: {
            carbohydrate: 1,
            flavour: 2
        },
        cheverme: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10
        },
        omelet: {
            protein: 5,
            fat: 1,
            flavour: 1
        },
        burger: {
            carbohydrate: 5,
            fat:7,
            flavour: 3
        },
        coke: {
            carbohydrate: 10,
            flavour: 20
        }
    };
    return function (input) {
        let commandTokens = input.split(' ');
        let command = commandTokens[0];
        if(command === 'restock'){
            robot[commandTokens[1]] += Number(commandTokens[2]);
            return'Success';
        }else if(command === 'prepare'){
            let recipe = recipes[commandTokens[1]];
            let quantity = Number(commandTokens[2]);
            for (var obj in recipe) {
                if(robot[obj] < recipe[obj] * quantity){
                    return`Error: not enough ${obj} in stock`;
                }
            }

            for (var ingredient in recipe) {
                robot[ingredient] -= (recipe[ingredient] * quantity);
            }
            return'Success';
        }else if(command === 'report'){
            let outpurReport = '';
            for (var ingredient in robot) {
                outpurReport += `${ingredient}=${robot[ingredient]} `
            }
            return outpurReport.trim();
        }
    }
})();