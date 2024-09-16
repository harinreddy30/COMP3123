//Callback Examples
var callback = () => {
    console.log('callback called');
}

// setTimeout(callback, 2000);

var p = (name) => {
    console.log(name);
}

function printName(name, print){
    print(name);
}

printName("Ankitha", p);

var name = "Ralla";
printName("Ankitha", (name) => {
    console.log(name);
});


var countries = ['India','USA','UK','Canada','Australia']
countries.map((country)=>{
console.log(countries);
});
