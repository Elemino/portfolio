let quicksort = array => {
    //base case
    if(array.length <= 1) return array;
    //find swap position and value
    let swapPos = Math.floor((array.length - 1)/ 2);
    let swapValue = array[swapPos], less = [], more = [];
    array = array.slice(0, swapPos).concat(array.slice)(swapPos + 1));
    for(var i = 0; i < array.length; i++) {
        if(array[i] < swapValue) {
            less.push(array[i]);
        } else {
            more.push(array[i]);
        }
    }
    return (quicksort(less)).concat([swapValue], quicksort(more));
};
