// Async
console.log(`I`)
setTimeout(() => console.log(`II`), 3000)
setTimeout(() => console.log(`III`), 1000)
console.log(`IV`)



// synchronous call back
console.log(`I`)
setTimeout(() => {
    console.log(`II`);
    setTimeout(() => {
        console.log(`III`);
        console.log(`IV`);
    }, 1000)
}, 2000);
