function printLabel(labelledObj:{label: string}) {
  console.log(labelledObj.label);
}

let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
//let myObj2 = { size: 10, label: 20 };
//printLabel(myObj2);  error myObj2.label  number;





interface LabelledValue {
  label: string;
}

function printLabelInterface(labelledObj: LabelledValue) {
  console.log(labelledObj.label);
}

let myObjInterface = {size: 10, label: "Size 10 Object"};
printLabelInterface(myObj);
