module.exports = function transform(arr) {
    // throw 'Not implemented';
    if(!Array.isArray(arr)) throw "error"
    let mas = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == '--double-next') {
            if(i == arr.length - 1) break;
            mas.push(arr[i + 1]);
            continue;
        }
        if(arr[i] == '--double-prev') {
            if(i > 0)
            mas.push(arr[i - 1]); 
            continue;
        }
        if(arr[i] == '--discard-prev') {
            mas.pop(); 
            continue;
        }
        if(arr[i] == '--discard-next') {
            i++; 
            continue;
        }
        mas.push(arr[i]);
    }
    return mas;
};
