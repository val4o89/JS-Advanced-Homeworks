function calc(name, age, weight, height) {
    let person = {};
    let personalInfo = {};

    let bmi = Math.round(weight / (height/100 * height/100));


    personalInfo.age = age;
    personalInfo.weight = weight;
    personalInfo.height = height;

    person.name = name;
    person.personalInfo = personalInfo;
    person.BMI = bmi;

    if(bmi < 18.5){
        person.status = 'underweight'
    } else if(bmi < 25){
        person.status = 'normal'
    } else if(bmi < 30){
        person.status = 'overweight'
    } else {
        person.status = 'obese';
        person.recommendation = 'admission required'
    }
    
    return person;
}

calc('Honey Boo Boo', 9, 57, 137);