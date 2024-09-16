//Async/Await Examples
async function getName(status, name){
    if(status){
        return Promise.resolve(name);
    }else{
        return Promise.reject('I have rejected the promise');
    }
    
}

// getName(true, "Patel").then((name) => {
//     console.log(name);
// }).catch((error) => {
//     console.log(error);
// })

async function getNameAsync(status, name){
    console.log('Before try catch block');
    try{
        console.log('Before await');
        const res = await getName(status, name);
        console.log(res);
        console.log('After await 1');
        const res1 = await getName(true, "Pritesh");
        console.log(res1);
        console.log('After await 2');

    }catch(error){
        console.log("Error: ", error);
        //console.log(error);
    }
    console.log('After try catch block');
}

console.log('Before calling getNameAsync');
getNameAsync(true, "Patel");
console.log('After calling getNameAsync');

async function getUserAndPost(userId){
    var user = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    var userJson = await user.json();
    console.log(userJson)

    var posts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userJson.id}`);
    var postsJson = await posts.json();
    console.log(postsJson);
}

getUserAndPost(1);