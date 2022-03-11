console.log('Hello');

/* Variables ---------------------------*/
const myConstant = 'Should Not Change';
let myLet = 'Timbuktu';
const myString = "I went to the park yesterday"
const myNumber = 2;

console.log('A Const Variable', myConstant);   

myLet = 'Something Else';

console.log('A Const Variable', myLet);   

/* Functions ---------------------------*/
const myFunction = (myNum) => {
    const addMeUp = 3 + myNum;
    console.log('addMeUp', addMeUp);
}

myFunction(4);
myFunction(7);
myFunction(16);


/* Data Types ---------------------------*/
const aString = "I went to the park.";
const aTemplateString = `${aString} yesterday`;
console.log ('Strings', aTemplateString);

const aNum = 123;
console.log('aNum', aNum);

const aObject = {
    name: 'Kyle Behrens',
    email: 'kylebehrens@me.com'
};

    console.log('aObject', aObject);

    const myArray = [
        'this is my string',
        { make: "Honda", Model: "CRV" },
        1234,
    ];

    console.log('myArray', myArray);