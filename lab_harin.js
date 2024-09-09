function capitalizeWords(str) {
    return str.replace(/\b\w/g, char => char.toUpperCase());
}

console.log(capitalizeWords("the quick brown fox"))


function max(a,b,c){
    return Math.max(a,b,c)
}

console.log(max (1,0,1));
console.log(max (0,-10,-20));
console.log(max (1000,510,440));


function right(str) {
    let len = str.length;
    if (len >= 3) {
        let lastThree = str.substring(len - 3);
        let rest = str.substring(0, len - 3);
        return lastThree + rest;
    }
    return str;
}

console.log(right("Python"));     
console.log(right("JavaScript"));   
console.log(right("Hi"));   

function angle_Type(angle) {
    if (angle < 90) {
        return "Acute angle";
    } else if (angle === 90) {
        return "Right angle";
    } else if (angle < 180) {
        return "Obtuse angle";
    } else if (angle === 180) {
        return "Straight angle";
    }
}

console.log(angle_Type(47));   //Acute angle
console.log(angle_Type(90));   //Right angle
console.log(angle_Type(145));  //Obtuse angle
console.log(angle_Type(180));  //Straight angle


function array_max_sum(arr, k) {
    if (arr.length < k) return 0;

    let maxSum = arr.slice(0, k).reduce((a, b) => a + b, 0);

    for (let i = k; i < arr.length; i++) {
        maxSum = Math.max(maxSum, maxSum + arr[i] - arr[i - k]);
    }

    return maxSum;
}

console.log(array_max_sum([1, 2, 3, 14, 5], 2)); 
console.log(array_max_sum([2, 3, 5, 1, 6], 3));  
console.log(array_max_sum([9, 3, 5, 1, 7], 2));  
