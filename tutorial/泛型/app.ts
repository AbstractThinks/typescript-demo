/**
 *  虽然使用any类型后这个函数已经能接收任何类型的arg参数，
 *  但是却丢失了一些信息：传入的类型与返回的类型应该是相同的。
 *  如果我们传入一个数字，我们只知道任何类型的值都有可能被返回。
 */
 // function identity(arg: any): any {
 //     return arg;
 // }
/**
 * 因此，我们需要一种方法使返回值的类型与传入参数的类型是相同的。
 */
function identity<T>(arg: T):T{
    // console.log(T.length); error   //function identity<T>(arg: T[]):T[]  编译通过
    return arg;
}

let output = identity<string>("jesse"); //第一种完全参数
let output2 = identity("jesse"); //第二种使用类型推论
