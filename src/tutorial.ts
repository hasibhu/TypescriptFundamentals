
// const help = (name1 : string) => {
//     return console.log(name1)
// }
// help('Hello Hasib')



// const calculate = (price: number) => {
//     return console.log(price );
// }


// calculate(66)


// const names: string[] = ['me', 'then', 'hello'];
// const check: string = 'hello';

// for (let i: number = 0; i < names.length; i++) {
//     if (names[i] === check) {
//         console.log(`Found at try ${i+1}: ${check}`);
//         // This will exit the function after the first match
//         break;
//     } else {
//         console.log(`No name matched at try: ${i+1}`);
//     }
    
// }


// const calculatePrice = (price: number, discount?: number ): number => {
//     return price - (discount || 0);
// }

// console.log(calculatePrice(300, 18));



// sum of several inputs

const sum = (message: string, ...numbers: number[]): string => {
    let total = numbers.reduce((previous, current) => {
        return previous + current;
    }, 0)

    return(`${message} ${total}`)
}


console.log(sum('Here is the total of your imput : ', 1,2,3,4,5,6,7));




// function for making sum of the of input range 

const sumOfRange = (message: string, startNum: number, endNum: number): string => {
    
    const numbers: number[] = [];
    
    for (let i = startNum; i <= endNum; i++) {
        numbers.push(i)
    };

    let total = numbers.reduce((previous, current) => {
        return previous + current;
    }, 0);

    return (`${message} : ${total}`)
};


const functionCall: string = sumOfRange('Total of your input range; ', 1, 10)

console.log(functionCall);
