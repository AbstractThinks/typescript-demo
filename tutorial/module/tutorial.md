###默认导出

```javascript

//
//JQuery.d.ts
//
declare let $: JQuery;
export default $;

//
//App.ts
//
import $ from "JQuery";
$("button.continue").html( "Next Step..." );

```

```javascript
//
// child.ts
//
export class A {
    ...
}
export { A as B } ; //导出并重命名


//
// host.ts
//
import { ZipCodeValidator } from "./ZipCodeValidator";
import * as validator from "./ZipCodeValidator";

//导入一个使用了export =的模块时，必须使用TypeScript提供的特定语法import let = require("module")。
//
// ZipCodeValidator.ts
//
export = ZipCodeValidator;

//
//Test.ts
//
import zip = require("./ZipCodeValidator");

```
