"use strict";
function A() {
    console.log("A");
}
exports.A = A;
function B() {
    console.log("B");
}
exports.B = B;
function C() {
    console.log("C");
}
exports.C = C;
exports.D = C;
function E() {
    console.log("E");
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = E;
