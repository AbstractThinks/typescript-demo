class Hello {
    constructor(public helloworld: string) {}
    greet() {
        return `<h1>${this.helloworld}</h1>`;
    }
}
let i: string = "1234";
var hello = new Hello("Hello, world");
document.body.innerHTML = hello.greet();
