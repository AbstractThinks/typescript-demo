function printLabel(labelObj) {
    console.log(labelObj.label);
}
var myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
function printLabelInterface(labelObj) {
    console.log(labelObj.label);
}
var myObjInterface = { size: 10, label: "Size 10 Object" };
var myObjInterface2 = { size: 10, label: "Size 10 Object", b: "abc", a: "cccc" };
printLabelInterface(myObjInterface);
printLabelInterface(myObjInterface2);
var myFunc;
myFunc = function (a, b) {
    return true;
};
var myArray;
myArray = ["a", "b"];
var myStr = myArray[0];
var myClock = (function () {
    function myClock(h, m) {
    }
    myClock.prototype.setTime = function (d) {
        this.currentTime = d;
    };
    return myClock;
}());
var square = {};
square.color = "blue";
square.sideLength = 10;
var square2;
square2.color = "a";
var Control = (function () {
    function Control() {
    }
    return Control;
}());
