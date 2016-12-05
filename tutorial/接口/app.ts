function printLabel(labelObj:{label:string}):void {
    console.log(labelObj.label);
}

let myObj = {size: 10, label: "Size 10 Object"};

printLabel(myObj);

/**
 *TypeScript的核心原则之一是对值所具有的shape进行类型检查。
 *它有时被称做“鸭式辨型法”或“结构性子类型化”。
 *在TypeScript里，接口的作用就是为这些类型命名和为你的代码或第三方代码定义契约。
 */

interface LabelValueInterface{
    label: string;
    color?: string;   //可选属性
    readonly x?: number; //只读属性, 不可更改
    //最简单判断该用readonly还是const的方法是看要把它做为变量使用还是做为一个属性。 做为变量使用的话用const，若做为属性则使用readonly。
    [propName: string]: any;  //未知参数传入   例：myObjInterface2, 可传入多个未知参数
}

function printLabelInterface(labelObj: LabelValueInterface):void{
    console.log(labelObj.label);
}

let myObjInterface = {size: 10, label: "Size 10 Object"};
let myObjInterface2 = {size: 10, label: "Size 10 Object", b:"abc", a:"cccc"};
printLabelInterface(myObjInterface);
printLabelInterface(myObjInterface2);


/**
 * 函数类型
 * 接口能够描述JavaScript中对象拥有的各种各样的外形。 除了描述带有属性的普通对象外，接口也可以描述函数类型。
 */
interface FuncInterface {
    (a: string, b: string):boolean;
}

let myFunc:FuncInterface;

myFunc = function(a: string, b: string):boolean {
    return true;
}

/**
 * 可索引的类型
 */
interface StringArray {
    [index:number]:string
}

let myArray:StringArray;
myArray = ["a", "b"];
let myStr:string = myArray[0];


/**
 * 类接口
 */

interface ClassInterface {
    currentTime: Date;
    setTime(d:Date);
}

class myClock implements ClassInterface {
    currentTime: Date;
    setTime(d: Date) {
        this.currentTime = d;
    }
    constructor(h: number, m: number) {}
}

/**
 * 扩展接口
 */
interface Shape {
    color: string;
}

interface Square extends Shape {
    sideLength: number;
}

let square = <Square>{};
square.color = "blue";
square.sideLength = 10;


let square2:Square;
square2.color = "a";


class Control {
    private state: any;
}

interface SelectableControl extends Control {
    // select(): void;
}
