import * as _ from 'lodash';


async function hello() {
    return 'world'
}

let lucky: number;

lucky = 23

type Style = 'bold' | 'italic' | 23 ;

let font: Style;

// font = 'something'

interface Person {
    first: string;
    last: string;
    [key: string]: any
}
const person: Person = {
    first: 'Jeff',
    last: 'Delaney',
}

const person2: Person = {
    first: 'Usain',
    last: 'Bolt',
    fast: true
}

// FUNCTIONS

function pow(x:number, y:number) {
    return Math.pow(x, y);
}

// pow('23', 'cool')
pow(10, 5)

function pow2(x:number, y:number): string {
    return Math.pow(x, y).toString();
}
pow2(10, 5)

// set type to void when not returning anything
function pow3(x:number, y:number): void {
    Math.pow(x, y).toString();
}
pow3(10, 5)

// ARRAYS

// const arr = []
// const arr: number[] = []
// can set type to number to ensure only nums
// const arr: Person[] = []

type MyList = [number?, string?, boolean?]
const arr: MyList = []

arr.push(1)
arr.push('23')
arr.push(false)

// GENERICS

class Observable<T> {
    constructor(public value: T) {}
} 

let x: Observable<number>;

let y: Observable<Person>;

// let z: new Observable(23)

