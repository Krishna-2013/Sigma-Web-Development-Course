function order (type) {
    const ranDelay = Math.floor(Math.random() * 10000) + 1;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`${type} coffe is ready!`);
        }, ranDelay);
    })
}

async function main (type) {
    const done = await order(type);
    console.log(done);
}

main("Cold")