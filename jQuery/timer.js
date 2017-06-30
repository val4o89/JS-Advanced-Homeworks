
function timer() {
    $('#start-timer').one('click', start);
    let seconds = 0;
    let minutes = 0;
    let hours = 0;

    let time;

    function stop() {
        clearInterval(time);
        $('#start-timer').one('click', start);
    }

    function start() {
        $('#stop-timer').one('click', stop);

        time = setInterval(step, 1000);

        function step() {
            seconds++;

            if(seconds >= 60){
                minutes++;
                seconds = 0;

                if(minutes >= 60){
                    hours++;
                    minutes = 0;
                }
            }


            $('#seconds').text(seconds < 10 ? `0${seconds}` : seconds)
            $('#minutes').text(minutes < 10 ? `0${minutes}` : minutes)
            $('#hours').text(hours < 10 ? `0${hours}` : hours)

        }
    }
}




