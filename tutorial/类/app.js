var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var A = (function () {
    function A(message) {
        this.greeting = message;
    }
    A.prototype.greet = function () {
        return "hello, " + this.greeting;
    };
    return A;
}());
var a = new A("world");
console.log(a.greet());
var B = (function () {
    function B(theName) {
        this.name = theName;
    }
    B.prototype.move = function (distanceInMeter) {
        if (distanceInMeter === void 0) { distanceInMeter = 0; }
        console.log(this.name + " moved " + distanceInMeter + "m");
    };
    return B;
}());
var C = (function (_super) {
    __extends(C, _super);
    function C(name) {
        return _super.call(this, name) || this;
    }
    C.prototype.move = function (distanceInMeter) {
        if (distanceInMeter === void 0) { distanceInMeter = 5; }
        console.log("Slithering....");
        _super.prototype.move.call(this, distanceInMeter);
    };
    return C;
}(B));
var D = (function (_super) {
    __extends(D, _super);
    function D(name) {
        return _super.call(this, name) || this;
    }
    D.prototype.move = function (distanceInMeter) {
        if (distanceInMeter === void 0) { distanceInMeter = 45; }
        console.log("Slithering....");
        _super.prototype.move.call(this, distanceInMeter);
    };
    return D;
}(B));
var c = new C("C");
var d = new D("D");
c.move();
d.move(34);
var E = (function () {
    function E(theName) {
        this.name = theName;
        this.name2 = theName;
    }
    E.prototype.move = function (distanceInMeter) {
        console.log(distanceInMeter);
    };
    return E;
}());
var e = new E("jesse");
console.log(e.name);
var F = (function () {
    function F(theName) {
        this.name = theName;
    }
    return F;
}());
var G = (function (_super) {
    __extends(G, _super);
    function G(name, department) {
        var _this = _super.call(this, name) || this;
        _this.department = department;
        return _this;
    }
    G.prototype.getElevatorPitch = function () {
        return "Hello, my name is " + this.name + " and I work in this " + this.department;
    };
    return G;
}(F));
var g = new G("jesse", "sales");
console.log(g.getElevatorPitch);
var H = (function () {
    function H(scale) {
        this.scale = scale;
    }
    H.prototype.calculateDistance = function (point) {
        var xDist = (point.x - H.origin.x);
        var yDist = (point.y - H.origin.y);
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    };
    return H;
}());
H.origin = { x: 0, y: 0 };
var h1 = new H(1.0);
var h2 = new H(5.0);
console.log(h1.calculateDistance({ x: 10, y: 10 }));
console.log(h2.calculateDistance({ x: 10, y: 10 }));
