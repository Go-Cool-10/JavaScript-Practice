let luckyNumber;

function generateLuckyNumber() {
    return new Promise((resolve, reject) => {
        let num = Math.floor(Math.random() * 100) + 1
        setTimeout(() => {
            if (num % 2 == 0) {
                resolve(num)
            }
            else {
                reject("Not a lucky number")
            }
        }, 3000);
    })
}

generateLuckyNumber().then((data) => { console.log(data) }).catch((error) => { console.log(error) })

