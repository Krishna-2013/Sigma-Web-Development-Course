console.log("This is promises: ");

let promise1 = new Promise((resolve, reject) => {
    let a = Math.random();
    if(a<0.5) {
        reject("No random number isn't supporting you");
    } else {
        setTimeout(() => {
            console.log("Yes I am done");
            resolve("Krishna");
        }, 3000);
    }
});

let promise2 = new Promise((resolve, reject) => {
    let a = Math.random();
    if(a<0.5) {
        reject("No random number isn't supporting you 2");
    } else {
        setTimeout(() => {
            console.log("Yes I am done 2");
            resolve("Krishna 2");
        }, 1000);
    }
});

let p = Promise.all([promise1, promise2])

p.then((a)=> {
    console.log(a);
}).catch((err)=> {
    console.log(err);
})