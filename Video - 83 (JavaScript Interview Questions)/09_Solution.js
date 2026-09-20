function placeOrder (product) {
    const ranNum = Math.floor(Math.random() * 10000) + 1;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Order for ${product} confirmed!`);
        }, ranNum);
    })
}

async function main (product) {
    const done = await placeOrder(product);
    console.log(done);
}

main("Book")