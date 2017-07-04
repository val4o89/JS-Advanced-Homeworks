    let func = (function() {
        return{
            add:  (arr1, arr2) => {
                let result = [];
                result.push(arr1[0] + arr2[0]);
                result.push(arr1[1] + arr2[1]);
                return result;
            },
            multiply:  (arr, multiplier) => {
                let result = [];
                result.push(arr[0] * multiplier);
                result.push(arr[1] * multiplier);
                return result;
            },
            length:  (arr) => {
                return Math.sqrt((arr[0] * arr[0]) + (arr[1]) * arr[1]);
            },
            dot:  (arr1, arr2) => {
                return (arr1[0] * arr2[0]) + (arr1[1] * arr2[1]);
            },
            cross:  (arr1, arr2) => {
                return (arr1[0] * arr2[1]) - (arr1[1] * arr2[0]);
            }
        }
    })();

    console.log(func.add([1, 2], [1, 2]));


