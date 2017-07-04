function sortNumbers(array, order) {

    let ascending = function (a, b) {
        return a - b;
    };
    let descending = function (a, b) {
        return b - a;
    };

    let comparator = {
        'asc': ascending,
        'desc': descending
    };

    return array.sort(comparator[order]);

}

sortNumbers([14, 7, 17, 6, 8], 'abc')