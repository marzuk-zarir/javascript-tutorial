/**
 * ! ES6 module system based on import and export...in this module system each class is declare in each file... and it is easy to read and debug
 * ? export mean put and import means take
 * note: custom file name shouldn't javascript reserved keyword otherwise it throws a error
 * 
 * * import_syntax ==> {import custom_file_name from 'file_path_in_string'}
 * * import_everything_from_one_file_syntax ==> {import * as custom_file_name from 'file_path_in_string'}
 * * import_someitems_from_one_file_syntax ==> {import {item_name, item_name....} as custom_file_name from 'file_path_in_string'}
 * 
 * * export_syntax ==> {export mode_name item_name}
 */
import Rectangle from './Rectangle'
import Circle from './Circle'
import Square from './Square'
/* // ?import every items from func file
import * as _function from './func' */
// ?import sum and div function from func file
import {add, div} from './func'

let rect = new Rectangle('blue', 30, 15)
let circle = new Circle('magenta', 8)
let sqr = new Square('green', 10)

console.log(rect)   // Rectangle {color: "blue", width: 30, height: 15}
console.log(circle)     // Circle {color: "magenta", radius: 8}
console.log(sqr)    // Square {color: "green", hand: 10}
// console.log(_function)  // Module {__esModule: true, …}
console.log(add(2, 5))  // 7
console.log(div(10, 2)) // 5