function solve (object) {
    
    if(object.handsShaking === false){
        return object;
    }

    let weight = object.weight;
    let exp = object.experience;
    let neededAlcohol = weight * exp * 0.1;

    object.bloodAlcoholLevel += neededAlcohol;
    object.handsShaking = false;

    return object;
}

console.log(solve({
    weight: 120,
    experience: 20,
    bloodAlcoholLevel: 200,
    handsShaking: true
}));