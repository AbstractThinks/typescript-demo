/**
 * [isDone description] 布尔值
 * @type {boolean}
 */
let isDone: boolean = true;
let notDone: boolean = false;

/**
 * [dec description] 数字
 * @type {number}
 */
let dec: number = 6;        //十进制
let hex: number = 0xf00d;   //16进制
let binary: number = 0b1010;//2进制   10
let octal: number = 0o20;   //8进制   16

/**
 * [name description] 字符串
 * @type {string}
 */
let myname: string = 'jesse';
let age: number = 27;
let sentence: string = `Hello, my name is ${ myname }, my age is ${ age }`;

let listJs = [1, 2, 3];
let list: number[] = [1, 2, 3];
let listArray: Array<number> = [1, 2, 3];

/**
 * [string description] 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同
 * @type {[type]} 元祖
 */
let x: [string, number];
x = ['hello', 10]; //x = [10, 'hello'] error

console.log(x[0].substr(1));  // 'hello'.substr(1);

x[3] = 'world'; // OK, 字符串可以赋值给(string | number)类型  x[6] = true; // Error布尔不是(string | number)类型

enum Color {Red=1, Green=2, Blue=3};
let cNum: Color = Color.Green;   //2
let cstring: string = Color[2];

/**
 * [notSure description]
 * @type {any} 任意值
 */
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean

let listAny: any[] = [1, true, "free"];

/**
 * [u description]
 * @type {undefined} Null 和 Undefined
 */
let u: undefined = undefined;
let n: null = null;

/**
 * [someValue description] 在你清楚地知道一个实体具有比它现有类型更确切的类型
 * @type {any} 类型断言
 */
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length; //尖括号写法
let strLengthAs: number = (someValue as string).length; //as写法
