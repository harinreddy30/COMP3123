//Promise Examples
function makePromise(a) {
    var p = new Promise((resolve, reject) =>{
        //Make API call
        if(a > 10){
            resolve({status: true, message: `Promise resolved: ${a}`});
        }else{ 
            const obj = {status: false, message: `Promise rejected: ${a}`};
            reject(obj)
        }
    });
    return p;
}

//Promise Example 1
makePromise(8).then((res) => {
    console.log(res);
    console.log(res.status);
}, (message) => {
    console.log(message);
}).finally(() => {
    console.log('Finally block');
})

//Promise Example 2
makePromise(20).then((message) => {
    console.log(message);
}).catch((message) => {
    console.log(message);
} )

//Promise Example 3
console.log('Promise Example 3');
var p = makePromise(30)
p.then((res) => {
    console.log(res);
    return res;
}).then((res) => {
    //console.log(`RES : ${res}`);
    console.log(res.status);
    console.log(res.message);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log('Finally block');
})

//Promise Example 4
Promise.all([makePromise(10), makePromise(20), makePromise(30)]).then((res) => {
    console.log(res);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log('Finally block');
})