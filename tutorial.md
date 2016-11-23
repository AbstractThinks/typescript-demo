##编译

* 不带任何输入文件的情况下调用tsc，编译器会从当前目录开始去查找tsconfig.json文件，逐级向上搜索父目录。
* 不带任何输入文件的情况下调用tsc，且使用命令行参数--project（或-p）指定一个包含tsconfig.json文件的目录。
* 当命令行上指定了输入文件时，tsconfig.json文件会被忽略。


```javascript

{
    "compileOnSave": true,   //可以让IDE在保存文件的时候根据tsconfig.json重新生成文件
    "compilerOptions": {
        //默认所有可见的"@types"包会在编译过程中被包含进来。 node_modules/@types文件夹下以及它们子文件夹下的所有包都是可见的； 也就是说，./node_modules/@types/，../node_modules/@types/和../../node_modules/@types/等等。
        "typeRoots" : ["./typings"], //如果指定了typesRoots，只有typesRoots下面的包才会被包含进来
        "types" : ["node", "lodash", "express"],//如果指定了types，只有被列出来的包才会被包含进来。
        "module": "system",
        "noImplicitAny": true,
        "removeComments": true,
        "preserveConstEnums": true,
        "outFile": "../../built/local/tsc.js",
        "sourceMap": true
    },
    "files": [
        "core.ts",
        "sys.ts",
        "types.ts",
        "scanner.ts",
        "parser.ts",
        "utilities.ts",
        "binder.ts",
        "checker.ts",
        "emitter.ts",
        "program.ts",
        "commandLineParser.ts",
        "tsc.ts",
        "diagnosticInformationMap.generated.ts"
    ],
    "include": [
        "src/**/*"
    ],
    "exclude": [
        "node_modules",
        "**/*.spec.ts"
    ]
}


```
