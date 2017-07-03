function calendar([day, month, year]) {

    let container = $('#content');

    let table = $('<table>');
    let caption = $('<caption>');
    let tbody = $('<body>');

    let headingRow = $('<tr>');

    let daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    let montsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    let rowsCount = weekCount(year, month)
    let daysInMonth = new Date(year, month, 0).getDate();
    let date = new Date(year, month - 1, day);
    let startDay = new Date(year, month - 1, -1).getDay();

    let currentDate = 1;

    caption.text(montsOfYear[month - 1] + ' ' + year);
    table.append(caption);

    for (let i = 0; i < daysOfWeek.length; i++) {
        let headingDay = $('<th>').text(daysOfWeek[i]);
        headingRow.append(headingDay);
    }
    table.append(headingRow);

    for (let i = 0; i < rowsCount; i++) {
        let currentRow = $('<tr>');
        let isEmptyWeek = true;
        for (let j = 0; j < 7; j++) {
            let currentCell = $('<td>');

            if(startDay >= 0){
                currentCell.text('');
                startDay--;
            } else {
                if(currentDate <= daysInMonth){
                    currentCell.text(currentDate);
                    if(currentDate == day){
                        currentCell.addClass('today');
                    }
                    if(currentDate == daysInMonth && j == 6){
                        currentRow.append(currentCell);
                        table.append(currentRow);
                        container.append(table);

                        return;
                    }
                    isEmptyWeek = false;
                    currentDate++;
                } else {
                    currentCell.text('');
                }
            }
            currentRow.append(currentCell);
        }
        if(!isEmptyWeek){
            table.append(currentRow);
        }
    }
    
    container.append(table);

    function weekCount(year, month_number) {

        // month_number is in the range 1..12

        var firstOfMonth = new Date(year, month_number-1, 1);
        var lastOfMonth = new Date(year, month_number, 0);

        var used = firstOfMonth.getDay() + 6 + lastOfMonth.getDate();

        return Math.ceil( used / 7);
    }
}