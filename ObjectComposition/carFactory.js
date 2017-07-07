function produce(order) {

    let engine = {
        small: {power: 90, volume: 1800},
        normal: {power: 120, volume: 2400},
        monster: {power: 200, volume: 3500}
    }

    let wheelSize = Math.floor(order.wheelsize) % 2 != 0 ? Math.floor(order.wheelsize) : Math.floor(order.wheelsize) - 1;

    let car = {
        model: order.model,
        engine: chooseEngine(order.power),
        carriage: {type: order.carriage, color: order.color},
        wheels: [wheelSize, wheelSize, wheelSize, wheelSize]
    }

    function chooseEngine(power) {
        if(power <= (90 + 120) / 2){
            return engine.small;
        } else if(power <= (120 + 200) / 2){
            return engine.normal;
        } else {
            return engine.monster;
        }
    }

    return car;
}

produce({ model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14 })