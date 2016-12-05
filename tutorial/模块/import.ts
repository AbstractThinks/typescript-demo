// es2015

import E, {A, B, C, D} from './export';
import * as module from './export';  //整个模块导入的方式

A();
B();
C();
D();
E();
module.A();
module.B();
module.C();
module.D();
module.default();
