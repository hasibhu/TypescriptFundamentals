import { viteLogo } from '/vite.svg';

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


// console.log(sum('Here is the total of your imput : ', 1,2,3,4,5,6,7));




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

// console.log(functionCall);



// if type of the input is number return double of it and if type of the input is string return upper case of the input 

const processInput = (input: number | string): number|string => {
    
    if (typeof input === "number") {
        return input * 2;
    } else {
       return input.toUpperCase();
    }


}


// console.log(processInput('Hello'));


// without destructuring 
const createEmployee1 = (employee: { id: number }): { id: number, isActive: boolean } => {
    
    return { id: employee.id, isActive: employee.id%2===0}
}

// console.log(createEmployee1({ id: 33 }));



// with destructuring 
const createEmployee = ({ id }: { id: number }): { id: number, isActive: boolean } => {
    return { id, isActive: id % 2 === 0 }
};
// console.log(createEmployee({id:36}));



// without destructuring 

const createStudent = (student: { id: number;  name: string}): void =>{
    console.log(`Id is: ${student.id} and name is:  ${student.name}`);
}

const newStudent = {
    id: 100,
    name: "Hasib"
}
// console.log(createStudent(newStudent));

// next line will remove undefined output 
// createStudent(newStudent);






// Your task is to create a function named processData that accepts two parameters:
// - The first parameter, input, should be a union type that can be either a string or a number.
// - The second parameter, config, should be an object with a reverse property of type boolean, by default it "reverse" should be false
// The function should behave as follows:
// - If input is of type number, the function should return the square of the number.
// - If input is of type string, the function should return the string in uppercase.
// - If the reverse property on the config object is true, and input is a string, the function should return the reversed string in uppercase.


const processData = (input: string | number,
    config: { reverse: boolean } = { reverse: false }): number | string => {
    
    
    if (typeof input === 'number') {
      return input * input;
    } else {
       return config.reverse? input.toLocaleUpperCase().split('').reverse().join('') : input.toUpperCase()
    }




}

// console.log(processData(10));




// type alias and intersection  
 
type User = { id: number, name: string, isActive: boolean }

const john: User = {
    id: 1,
    name: "john",
    isActive: true
};

const hasib: User = {
    id: 2,
    name: "hasib",
    isActive: false
};



const createUser = (user: User): { id: number, name: string, isActive: boolean } => {
    
    console.log(`Hello there ${user.name.toUpperCase()}!!!!!`);

    return user
}

// createUser(hasib)


// chalange

// Define the Employee type: Create a type Employee with properties id (number), name (string), and department (string) .
// - Define the Manager type: Create a type Manager with properties id (number), name (string), and employees (an array of Employee).

// - Create a Union Type: Define a type Staff that is a union of Employee and Manager.**

// - Create the printStaffDetails function: This function should accept a parameter of type Staff. Inside the function, use a type guard to check if the 'employees' property exists in the passed object. If it does, print a message indicating that the person is a manager and the number of employees they manage. If it doesn't, print a message indicating that the person is an employee and the department they belong to.
//


type Employee = { id: number, name: string, department: string };
type Manager = { id: number, name: string, employees: Employee[] };

type Staff = Manager | Employee;

const alice : Employee = {id:1, name: 'alice', department: 'Sales'}
const steve: Employee = { id: 2, name: 'steve', department: 'HR' };
const bobo: Manager = { id: 3, name: 'bobo', employees: [alice, steve] }


const printStaffDetails = (staff: Staff): void => {
    if ("employees" in staff) {
        console.log(`${staff.name} is a manager in the ${staff.employees.length} employees.`);
    } else {
        console.log(` ${staff.name} is an employee in the ${staff.department} employes. `);
    }

}

// console.log(printStaffDetails(alice));
// console.log(printStaffDetails(steve));
// console.log(printStaffDetails(bobo));



// union type 

type Book = { id: number, name: string, price: number };
type DiscountedBook = Book & { discount: number };

const book1: Book = {
    id: 1,
    name: 'Josna o Jononir Golpo',
    price: 300
};

const book2: Book = {
    id: 2,
    name: 'Modhanno',
    price: 200
};


// const discountedBook: Book &{discount: number} = {
//      id: 3,
//     name: 'Himu',
//     price: 800,
//     discount: 120
// }
const discountedBook: DiscountedBook = {
     id: 3,
    name: 'Himu',
    price: 800,
    discount: 120
}


