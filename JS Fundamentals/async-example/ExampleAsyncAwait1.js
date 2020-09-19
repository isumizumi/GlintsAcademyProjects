const isNumber = (a, b) => new Promise((resolve, reject) => {
    setTimeout(() => {
        if (isNaN(a) || isNaN(b)) {
            err = 'One of input is not a number';
            reject(err);
        } else {
            resolve(true);
        }
    }, 500)
});

const divide = (a, b) => new Promise((resolve, reject) => {
    setTimeout(() => {
        if (b === 0) {
            err = 'Divide by zero';
            return reject(err);
        }

        const result = Number(a) / Number(b);
        resolve(result);
    }, 1500)
});

const multiply = (a, b) => new Promise((resolve, reject) => {
    setTimeout(() => {
        const result = Number(a) * Number(b);
        resolve(result);
    }, 1000)
});

const add = (a, b) => new Promise((resolve, reject) => {
    setTimeout(() => {
        const result = Number(a) + Number(b);
        resolve(result);
    }, 500);
});

const run = async function(a, b) {
    try {
        await isNumber(a, b);
        const divideResult = await divide(a, b);
        const multiplyResult = await multiply(divideResult, 7);
        const addResult = await add(multiplyResult, 1);

        console.log(`The final result is ${addResult}`);
    } catch (e) {
        console.log(err);
    }

};

run(6, 3);