function attachEventsListeners() {
    document.getElementById('convert').addEventListener('click', convert);

    function convert() {
        let input = Number(document.getElementById('inputDistance').value);
        let inputOption = document.getElementById('inputUnits').selectedIndex;
        let resultOption = document.getElementById('outputUnits').selectedIndex;

        let resultInMeters = 0;
        let outputResult = 0;

        switch (inputOption){
            case 0: resultInMeters = input * 1000;break;
            case 1: resultInMeters = input;break;
            case 2: resultInMeters = input / 100;break;
            case 3: resultInMeters = input / 1000;break;
            case 4: resultInMeters = input * 1609.34;break;
            case 5: resultInMeters = input * 0.9144;break;
            case 6: resultInMeters = input * 0.3048;break;
            case 7: resultInMeters = input * 0.0254;break;
        }

        switch (resultOption){
            case 0: outputResult = resultInMeters / 1000;break;
            case 1: outputResult = resultInMeters;break;
            case 2: outputResult = resultInMeters * 100;break;
            case 3: outputResult = resultInMeters * 1000;break;
            case 4: outputResult = resultInMeters * 0.000621371;break;
            case 5: outputResult = resultInMeters * 1.09361;break;
            case 6: outputResult = resultInMeters * 3.28084;break;
            case 7: outputResult = resultInMeters * 39.3701;break;
        }

        document.getElementById('outputDistance').value = outputResult;
    }
}