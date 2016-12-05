// namespace 命名（命名不能和文件名相同）
var BB;
(function (BB) {
    function E() {
        console.log("E");
    }
    BB.E = E;
})(BB || (BB = {}));
var BB;
(function (BB) {
    function F() {
        console.log("F");
    }
    BB.F = F;
})(BB || (BB = {}));
/// <reference path="./B.ts" />
/// <reference path="./C.ts" />
// tsc --outFile A.js A.ts B.ts C.ts
BB.E();
BB.F();
