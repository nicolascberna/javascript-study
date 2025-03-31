//naive solution
function bubbleSort(arr) {
    const n = arr.length;
    for(var i = 0; i < n; i++) {
        for(var j = 0; j < n; j++) {
            if(arr[j] > arr[j + 1]) {
                //swap!
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

console.log(bubbleSort([37,45,29,8]))
