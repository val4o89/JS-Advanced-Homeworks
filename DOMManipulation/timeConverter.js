function attachEventsListeners() {
    document.getElementById('daysBtn').addEventListener('click', calcDays);
    document.getElementById('hoursBtn').addEventListener('click', calcHours);
    document.getElementById('minutesBtn').addEventListener('click', calcMinutes);
    document.getElementById('secondsBtn').addEventListener('click', calcSeconds);

    function calcDays() {
        let days = Number(document.getElementById('days').value);
        let hours = days * 24;
        let minutes = hours * 60;
        let seconds = minutes * 60;

        document.getElementById('hours').value = hours;
        document.getElementById('minutes').value = minutes;
        document.getElementById('seconds').value = seconds;
    }

    function calcHours() {
        let hours = Number(document.getElementById('hours').value);
        let days = hours / 24;
        let minutes = hours * 60;
        let seconds = minutes * 60;

        document.getElementById('days').value = days;
        document.getElementById('minutes').value = minutes;
        document.getElementById('seconds').value = seconds;
    }

    function calcMinutes() {
        let minutes = Number(document.getElementById('minutes').value);
        let hours = minutes / 60;
        let days = hours / 24;
        let seconds = minutes * 60;

        document.getElementById('days').value = days;
        document.getElementById('hours').value = hours;
        document.getElementById('seconds').value = seconds;
    }

    function calcSeconds() {
        let seconds = Number(document.getElementById('seconds').value);
        let minutes = seconds / 60;
        let hours = minutes / 60;
        let days = hours / 24;

        document.getElementById('days').value = days;
        document.getElementById('hours').value = hours;
        document.getElementById('minutes').value = minutes;
    }
}

