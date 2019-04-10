//iterative
function fibIt(num) {
    const arr = [0,1];
    const mapper = {};
    let counter = 0;

    for(let i = 2; i <= num; i++) {
        let a = arr[i-1];
        let b = arr[i -2];
        arr.push(a+b);

    }

    for(let elem in arr) {
        mapper[counter] = arr[elem];
        counter++
    }
    return mapper;
}

console.log(fibIt(10));