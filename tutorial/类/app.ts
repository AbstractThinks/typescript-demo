/**
 * 传统的JavaScript程序使用函数和基于原型的继承来创建可重用的组件，
 * 但对于熟悉使用面向对象方式的程序员来讲就有些棘手，
 * 因为他们用的是基于类的继承并且对象是由类构建出来的
 */

class A {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return `hello, ${this.greeting}`;
    }
}

let a = new A("world");
console.log(a.greet());

/**
 * 继承
 * 包含构造函数的派生类必须调用super()，它会执行基类的构造方法。
 */
class B {
    name: string;
    constructor(theName: string){
        this.name = theName;
    }
    move(distanceInMeter:number = 0) {
        console.log(`${this.name} moved ${distanceInMeter}m`);
    }
}

class C extends B {
    constructor(name: string) {
        super(name);
    }
    move(distanceInMeter = 5){
        console.log("Slithering....");
        super.move(distanceInMeter);
    }
}

class D extends B {
    constructor(name: string) {
        super(name);
    }
    move(distanceInMeter = 45) {
        console.log("Slithering....");
        super.move(distanceInMeter);
    }
}

let c = new C("C");
let d: B = new D("D");

c.move();
d.move(34);

/**
 * 当成员被标记成private时，
 * 它就不能在声明它的类的外部访问
 */
class E {
    public name: string;
    private name2: string;
    public constructor(theName: string) {
        this.name = theName;
        this.name2 = theName;
    }
    public move(distanceInMeter: number) {
        console.log(distanceInMeter);
    }
}

let e = new E("jesse");
console.log(e.name);
// console.log(e.name2);   //error: 'name2' is private;

/**
 * protected修饰符与private修饰符的行为很相似，
 * 但有一点不同，protected成员在派生类中仍然可以访问。
 */

class F {
    protected name: string;
    constructor(theName: string) {
        this.name = theName;
    }
}

class G extends F {
    private department: string;
    constructor(name: string, department: string) {
        super(name);
        this.department = department;
    }
    public getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in this ${this.department}`;
    }
}

let g = new G("jesse", "sales");
console.log(g.getElevatorPitch);
// console.log(g.name); //error  protected成员在派生类中仍然可以访问


/**
 * 静态属性
 */

class H {
    static origin = {x: 0, y: 0};
    constructor(public scale: number){}
    calculateDistance(point:{x: number, y: number}) {
        let xDist = (point.x - H.origin.x);
        let yDist = (point.y - H.origin.y);
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    }

}

let h1 = new H(1.0);
let h2 = new H(5.0);

console.log(h1.calculateDistance({x: 10, y: 10}));
console.log(h2.calculateDistance({x: 10, y: 10}));
