var Hello = (function () {
    function Hello(helloworld) {
        this.helloworld = helloworld;
    }
    Hello.prototype.greet = function () {
        return "<h1>" + this.helloworld + "</h1>";
    };
    return Hello;
}());
var i = "1234";
var hello = new Hello("Hello, world");
document.body.innerHTML = hello.greet();
//# sourceMappingURL=helloworld.js.map