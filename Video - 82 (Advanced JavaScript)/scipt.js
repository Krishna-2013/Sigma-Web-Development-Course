async function sleep() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(45);
        }, 1000);
    })
}

function sum(a,b,c) {
    console.log(a+b+c);
}

// IIFE

(async function main() {
    // let a = await sleep()
    // console.log(a);
    // let b = await sleep()
    // console.log(b);

    // let [x,y, ...rest] = [1,5,4,3,7,3,5];
    // console.log(x,y,rest);

    let obj = {
        a:1,
        b:2,
        c:3,
    }

    let {a,b} = obj;
    console.log(a,b);

    let arr = [3,5,4,5,6,7];
    let [p,q,r] = arr;
    sum(arr[0], arr[1], arr[2]);
    sum(p,q,r);
    sum(...arr);
})()
