export function A():void {
    console.log("A");
}

export function B():void {
    console.log("B");
}

function C():void {
    console.log("C");
}

function E():void {
    console.log("E");
}
export default E;
export {C};
export {C as D};
