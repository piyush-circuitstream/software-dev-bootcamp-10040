// Primitives
let name: string = "Piyush";
let age: number = 25;
let isStudent: boolean = true;

// Arrays
let hobbies: string[] = ["Reading", "Gaming", "Cooking"];
let fruits: Array<string> = ["Apple", "Banana", "Orange"];
let randomData: Array<string | number> = ["Hello", 42, "World", 3.14];

// Functions
function greet(name: string): string {
    return `Hello, ${name}!`;
}
greet("Piyush");

function add(a: number, b?: number): number {
    if (b) {
        return a + b;
    }
    return a;
}

let person: { name: string; age: number } = {
    name: "Piyush",
    age: 25
}

// Union Types
let id: string | number = "12345";
id = 67890;

// Interfaces
interface User {
    name: string;
    age: number;
    email?: string; // Optional property
}

let user: User = {
    name: "Piyush",
    age: 25
}

let anotherUser: User = {
    name: "Alice",
    age: 30,
    email: "test@gmail.com"
}

// Type Inference
let city = "New York"; // TypeScript infers this as a string
let score = 95; // TypeScript infers this as a number

function multiply(a: number, b: number) {
    return a * b;
}

// Any type
let anyValue: any = "Hello";
anyValue = 42;
anyValue = true;
anyValue = [1, 2, 3];
anyValue.map((c) => c + 1);

// unknown type
let unknownValue: unknown = "Hello";
if (typeof unknownValue === "string") {
    console.log(unknownValue.toUpperCase());
}
unknownValue = [1, 2, 3];
unknownValue.map((c) => c + 1); // Error: Object is of type 'unknown'.