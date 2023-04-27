let p = new Promise((resolve, reject)=>{
    let a = 1+2;
    if (a == 2){
        resolve("Success");

    }else{
        reject("Failed");
    }
})

p.then((message)=>console.log('this is in the then() '+message))
//Going to run for a resolve. Resolve has single parameter thus single parameter in resolve
.catch((message)=>{console.log('This in the catch '+message)});
/*Promises useful if you need to do something for long time in background
such as: download image from server. Do something after its complete and catch something if failed*/

//Use promises for asynchronous
//Use try and catch for synchronus


//try catch and callbacks?