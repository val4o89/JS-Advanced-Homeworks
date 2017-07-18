let Record = (function () {

    let id = 0;

    return class Record {
        constructor(temperature, humidity, pressure, windSpeed ){
            this.id = id++;
            this.temperature = temperature;
            this.humidity = humidity;
            this.presure = pressure;
            this.windSpeed = windSpeed;
        }

        get getStatus(){
            if(this.temperature < 20 && (this.presure < 700 || this.presure > 900) && this.windSpeed > 25){
                return 'Stormy';
            }
            return 'Not stormy';
        }

        toString(){
            return `Reading ID: ${this.id}\nTemperature: ${this.temperature}*C\nRelative Humidity: ${this.humidity}%\nPressure: ${this.presure}hpa\nWind Speed: ${this.windSpeed}m/s\nWeather: ${this.getStatus}
             `
        }

    }
})();

let record1 = new Record(32, 66, 760, 12);
console.log(record1.toString());
let record2 = new Record(32, 66, 760, 12);
console.log(record2.toString());


