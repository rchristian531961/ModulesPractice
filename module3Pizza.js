const func1=()=>{
    // console.log("Started preparing Pizza");
    return new Promise((resolve, reject) => {
    if (Math.random() > 0.5){
        setTimeout(()=>resolve("Started preparing Pizza"), 3);
    }
    else{
        setTimeout(()=>reject("No starting Prepare"),3);
    }
    })
}

const func2=()=>{
    // console.log("Pizza Base is Prepared");
    return new Promise((resolve, reject) => {
        if (Math.random() > 0.5){
            setTimeout(()=>resolve("Pizza Base is Prepared"), 10);
        }
        else{
            setTimeout(()=>reject("Can't Prepare"),10);
        }
        })
}
    
const func3=()=>{
    // console.log("Cheese is added on Pizza");
    return new Promise((resolve, reject) => {
        if (Math.random() > 0.5){
            setTimeout(()=>resolve("Cheese is added on Pizza"), 30);
        }
        else{
            setTimeout(()=>reject("No Cheese"),30);
        }
        })
}

const func4=()=>{
    // console.log("Veggies are added on Pizza");
return new Promise((resolve, reject) => {
    if (Math.random() > 0.5){
        setTimeout(()=>resolve("Veggies are added on Pizza"), 40);
    }
    else{
        setTimeout(()=>reject("No Veggies"),40);
    }
    })}

const func5=()=>{
    // console.log("Pizza is heated");
    return new Promise((resolve, reject) => {
    if (Math.random() > 0.5){
        setTimeout(()=>resolve("Pizza is heated"), 50);
    }
    else{
        setTimeout(()=>reject("Not heated"),50);
    }
    })
    
}

const func6=()=>{
    // console.log("Pizza is ready");
    return new Promise((resolve, reject) => {
        if (Math.random() > 0.5){
            setTimeout(()=>resolve("Pizza is Ready"), 60);
        }
        else{
            setTimeout(()=>reject("Not Ready"),60);
        }
        })
}

func1()
    .then((result)=>console.log("Success!"+result))
    .catch((error)=>console.log("Error!"+error));

func2()
    .then((result)=>console.log("Success!"+result))
    .catch((error)=>console.log("Error!"+error));

func3()
    .then((result)=>console.log("Success!"+result))
    .catch((error)=>console.log("Error!"+error));
func4()
    .then((result)=>console.log("Success!"+result))
    .catch((error)=>console.log("Error!"+error));

func5()
    .then((result)=>console.log("Success!"+result))
    .catch((error)=>console.log("Error!"+error));

func6()
    .then((result)=>console.log("Success!"+result))
    .catch((error)=>console.log("Error!"+error));

