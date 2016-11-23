function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
var myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
function printLabelInterface(labelledObj) {
    console.log(labelledObj.label);
}
var myObjInterface = { size: 10, label: "Size 10 Object" };
printLabelInterface(myObj);
