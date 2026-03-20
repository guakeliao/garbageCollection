# _JavaScript_

### 1. 根据下面 _ES6_ 构造函数的书写方式，要求写出 _ES5_ 的

```js
class Example {
  constructor(name) {
    this.name = name;
  }
  init() {
    const fun = () => {
      console.log(this.name);
    };
    fun();
  }
}
const e = new Example('Hello');
e.init();
```

### 2. 数组去重有哪些方法？（美团 _19_ 年）

### 3. 描述下列代码的执行结果

```js
foo(typeof a);
function foo(p) {
  console.log(this);
  console.log(p);
  console.log(typeof b);
  let b = 0;
}
```

### 4. 描述下列代码的执行结果

```js
class Foo {
  constructor(arr) {
    this.arr = arr;
  }
  bar(n) {
    return this.arr.slice(0, n);
  }
}
var f = new Foo([0, 1, 2, 3]);
console.log(f.bar(1));
console.log(f.bar(2).splice(1, 1));
console.log(f.arr);
```

### 5. 描述下列代码的执行结果

```js
01 function f(count) {
02    console.log(`foo${count}`);
03    setTimeout(() => { console.log(`bar${count}`); });
04 }
05 f(1);
06 f(2);
07 setTimeout(() => { f(3); });
```

### 6. 描述下列代码的执行结果

```js
var a = 2;
var b = 5;
console.log(a === 2 || (1 && b === 3) || 4);
```

### 7. 描述下列代码的执行结果

```js
export class ButtonWrapper {
  constructor(domBtnEl, hash) {
    this.domBtnEl = domBtnEl;
    this.hash = hash;
    this.bindEvent();
  }
  bindEvent() {
    this.domBtnEl.addEventListener('click', this.clickEvent, false);
  }
  detachEvent() {
    this.domBtnEl.removeEventListener('click', this.clickEvent);
  }
  clickEvent() {
    console.log(`The hash of the button is: ${this.hash}`);
  }
}
```

### 8. 箭头函数有哪些特点

```
可以省略 function 单参数（） 一行表达式 {} return.
没有 this。没有 super 在编译的时候就已经确定了 this 指向。
没有 arguments
不能作为构造函数，没有自己的prototype
不能作为Generator函数	 生成器函数
```

### 9. 说一说类的继承

### 10. _new_ 操作符都做了哪些事？

```js
function myNew(Constructor, ...args) {
    // 1. 创建一个新对象，并将原型设置为构造函数的 prototype
    const obj = Object.create(Constructor.prototype);
    // 2. 执行构造函数，将 this 绑定到新对象
    const result = Constructor.apply(obj, args);
    // 3. 如果构造函数返回的是对象，则返回该对象，否则返回新创建的对象
    return result instanceof Object ? result : obj;
}
	
```

### 11. _call、apply、bind_ 的区别 ？

```
都是用于改变内部this 指向的。
call 和 apply 是立即执行。而 bind 是返回一个函数
call 接受参数逐个传递，bind 也是可以接受参数逐个传递，apply 是接受数组。
```



### 12. 事件循环机制（宏任务、微任务）

### 13. 你了解 _node_ 中的事件循环机制吗？_node11_ 版本以后有什么改变

### 14. 什么是函数柯里化？

```js
函数柯里化是一种将接受多个参数的函数转换为一系列接受单一参数的函数的技术
function curry(fn){
  return function curried(...args){
    if(args.length>fn.length){
      fn.apply(this,args)
    }else{
      return function (...nextArgs) {
        return curried.apply(this,args.concat(nextArgs))
      }
    }
  }
}
```



### 15. _promise.all_ 方法的使用场景？数组中必须每一项都是 _promise_ 对象吗？不是 _promise_ 对象会如何处理 ？

### 16. _this_ 的指向哪几种 ？

```tex
1.全局上下文
	非严格模式 window global 
	严格模式	undefined
2.对象的方法调用
	this 指向调用该方法的对象
3.独立函数调用
	非严格模式下，this 指向全局对象。严格模式下，this 是 undefined。
4.构造函数调用
	this 指向新创建的对象
5.箭头函数
	this 与其外层作用域一致
6.call、apply、bind 修改 this
7.DOM 事件处理函数
	事件处理函数中的 this 指向绑定事件的 DOM 元素
8.类方法
	默认指向实例对象，但在提取方法时可能丢失 this（需显式绑定）
```



### 17. _JS_ 中继承实现的几种方式

```
不会
```



### 18. 什么是事件监听

```
事件监听（Event Listening）是指在程序中为特定的事件（例如用户点击按钮、鼠标移动、键盘输入等）注册一个回调函数，当事件发生时，回调函数会被自动触发执行。事件监听通常用于响应用户的交互、浏览器的状态变化或其他异步事件。

在 JavaScript 中，事件监听通常通过 addEventListener 方法来实现。这个方法允许我们监听一个 DOM 元素上的特定事件，并在事件发生时执行相应的代码。
element.addEventListener(event, callback, useCapture);
```



### 19. 什么是 _js_ 的闭包？有什么作用？

### 20. 事件委托以及冒泡原理

### 21. _let const var_ 的区别？什么是块级作用域？如何用？

### 22. _ES5_ 的方法实现块级作用域（立即执行函数） _ES6_ 呢？

### 23. _ES6_ 箭头函数的特性

### 24. 箭头函数与普通函数的区别 ？

### 25. _JS_ 的基本数据类型有哪些？基本数据类型和引用数据类型的区别

```js
string number bool null undefined bigint symbool
obj
区别：
	存储方式，堆 栈。
  赋值 
  比较
```



### 26. _NaN_ 是什么的缩写

```
Not a Number  不是一个数字
NaN 不等于任何值   NaN !== NaN
使用 Number.isNaN(value) 来准确判断一个值是否为 NaN
使用 isNaN(value) 来判断一个值是否为 NaN，但要注意它会尝试将非数字值转换为数字
```



### 27. _JS_ 的作用域类型

```
全局作用域：代码中任何地方都可以访问。
函数作用域：在函数内部定义的变量只能在该函数内访问。
块级作用域：在块内（如 if 语句、for 循环等）定义的变量只能在该块内访问。
词法作用域：作用域的确定基于函数定义的位置，而不是函数执行的位置。
闭包作用域：函数可以记住并访问其外部作用域中的变量。
模块作用域：每个模块有独立的作用域，只能通过 export 和 import 与其他模块交互。
```



### 28. _undefined==null_ 返回的结果是什么？_undefined_ 与 _null_ 的区别在哪？

```
类型	undefined 类型	object 类型
表示的含义	变量声明了但未赋值，函数没有返回值	明确表示“空”或“无效”
比较	undefined == null 返回 true，undefined === null 返回 false	
用途	自动赋值给未初始化的变量、未返回值的函数等	用于手动设置变量为“空”或“无效”
布尔转换	false	false
数字转换	NaN	0
```



### 29. 写一个函数判断变量类型

```js
function getType(value) {
  if (value === null) {
    return 'null';  // 特殊处理 null，因为 typeof null 返回 'object'
  }
  if (Array.isArray(value)) {
    return 'array';  // 判断是否是数组
  }
  return typeof value;  // 对于其他类型，直接使用 typeof
}

function getType(value) {
  return Object.prototype.toString.call(value).slice(8, -1);
}

```



### 30. _js_ 的异步处理函数

```
Callback
Promise
Async/Await
setTimeout setInterval
```



### 31. _defer_ 与 _async_ 的区别

```
两者于<script>标签中。都是用于异步加载，不阻碍dom的生成。
区别在于:
async 异步加载，立即执行，执行顺序无法保证。
defer 异步加载，按顺序执行，等待 DOM 完成后执行
```



### 32. 浏览器事件循环和任务队列

### 33. 原型与原型链 （美团 19 年）

### 34. 作用域与作用域链 （美团 19 年）

![CleanShot-2024_12_09_07_07_45](/Users/guakeliao/Library/Application Support/CleanShot/media/media_Qs9ih8j1by/CleanShot-2024_12_09_07_07_45.png)

### 35. 闭包及应用场景以及闭包缺点 （美团 19 年）

```
闭包：指的是一个函数引用了这个函数之外的变量。
应用场景：闭包可以用来模拟类的私有变量 创建函数工厂 实现防抖和节流 执行函数表达式（IIFE）
缺点：	内存泄漏 调试困难 
闭包常用于事件监听器，但未移除监听器会导致内存泄漏
```



### 36. 继承方式 （美团 19 年）

```js
1. 原型链继承 
		将子类的原型设置为父类的一个实例，使子类可以继承父类的属性和方法。
2. 借用构造函数继承（经典继承） 在子类构造函数中调用父类构造函数，使子类拥有父类的属性。
3. 组合继承 结合原型链继承和构造函数继承，既能复用父类的方法，又能解决引用类型属性共享的问题。
4. 原型式继承 通过原型创建一个新对象，并继承原对象的属性和方法。
5. 寄生式继承 在原型式继承的基础上增强对象，返回一个新对象。
6. ES6 类继承
```



### 37. 原始值与引用值 （美团 19 年）

### 38. 描述下列代码的执行结果

```js
const first = () =>
  new Promise((resolve, reject) => {
    console.log(3);
    let p = new Promise((resolve, reject) => {
      console.log(7);
      setTimeout(() => {
        console.log(1);
      }, 0);
      setTimeout(() => {
        console.log(2);
        resolve(3);
      }, 0);
      resolve(4);
    });
    resolve(2);
    p.then((arg) => {
      console.log(arg, 5); // 1 bb
    });
    setTimeout(() => {
      console.log(6);
    }, 0);
  });
first().then((arg) => {
  console.log(arg, 7); // 2 aa
  setTimeout(() => {
    console.log(8);
  }, 0);
});
setTimeout(() => {
  console.log(9);
}, 0);
console.log(10);
```

### 39. 如何判断数组或对象（美团 19 年）

```
数组
Array.isArray
Object.prototype.toString.call(Value)
a instanceof Array
对象
typeof + null
Object.prototype.toString.call(Value)
constructor (value.constructor === Object constructor 可被覆盖，可能不准确)
```



### 40. 对象深拷贝与浅拷贝，单独问了 _Object.assign_（美团 19 年）

```js
//深拷贝
function deepClone(source){
  if(source === null || typeof source !== 'object'){
    return source
  }
  const copy = Array.isArray(source) ? [] : {}
  for (const key in source){
    if (source.hasOwnProperty(key)){
      copy[key] = deepClone(source[key])
    }
  }
  return copy
}
```



### 42. 说说 _instanceof_ 原理，并回答下面的题目（美团 19 年）

```js
instanceof 检查的是对象的原型链 object.__proto__ === Constructor.prototype

function myInstanceof(object, Constructor) {
  // 如果 object 是原始值，直接返回 false
  if (object === null || typeof object !== 'object') return false;

  // 获取对象的原型
  let proto = Object.getPrototypeOf(object);

  // 沿原型链查找
  while (proto) {
    if (proto === Constructor.prototype) {
      return true;
    }
    proto = Object.getPrototypeOf(proto); // 继续向上查找
  }
  return false; // 到达原型链末尾，未找到
}


function A() {}
function B() {}
A.prototype = new B();
let a = new A();
console.log(a instanceof B); // true of false ?
```

###

### 43. 内存泄漏（美团 19 年）

### 44. _ES6_ 新增哪些东西？让你自己说（美团 19 年）

```
let const
箭头函数
模板字符串
解构赋值
类（Class）
模块（Modules） import 和 export 
默认参数值
剩余参数 ...
扩展运算符 
Promise
Generator 函数
Map 和 Set
Symbol
WeakMap 和 WeakSet
Reflect
Proxy
```



### 45. _weakmap、weakset_（美团 _19_ 年）

```
WeakMap 的 键必须是对象，而且这些键是 弱引用
WeakSet 但它只允许 对象 类型的元素，并且这些元素是 弱引用。
```



### 46. 为什么 _ES6_ 会新增 _Promise_（美团 19 年）

```
为了更好地处理 JavaScript 中的异步编程,之前都是回调方式--回调地狱+错误处理困难。
```



### 47. _ES5_ 实现继承？（虾皮）

```
1 使用构造函数和原型链
		可以通过让子类的原型指向父类的实例来实现继承。
2 通过 Object.create 创建子类的原型
```

### 48. 科里化？（搜狗）

```js
柯里化就是对一个函数固定参数用的。可以把多参数固定成单参数的技术
function curry(fn){
  return function curried(...args){
    if(fn.length > args.length){
      fn.apply(this,args)
    }else{
      return function (nextArgs){
        return curried.apply(this,args.concat(nextArgs))
      }
    }
  }
}
```

### 49. 防抖和节流？（虾皮）

```js
//防抖
function debounce（fn,delay）{
  let timer = null
  return function(...args){
    clearTimeout(timer)
    timer = setTimeout(()=>{
      fn.apply(this.args)
    },delay)
  }
}
//节流
function throttle(fn,interval){
  let lastTime = 0
  return function(...args){
    if (Date.now() - lastTime >= interval){
      fn.apply(this,args)
      lastTime = Date.now()
    }
  }
}
```



### 50. 闭包？（好未来---探讨了 _40_ 分钟）

### 51. 原型和原型链？（字节）

### 52. 排序算法---（时间复杂度、空间复杂度）

```js
//1.冒泡排序 通过相邻元素的比较与交换，每一轮将最大的元素“冒泡”到数组末尾 时间复杂度 O(n*2)
function bubbleSort（arr）{
	let n = arr.length
  for(let i = 0;i<n;i++){
    for(let j = 0;i<n;j++){
      if(arr[j] > arr[j+1]){
        [arr[j],arr[j+1]] = [arr[j+1],arr[j]] 
      }
    }
  }
 return arr
}
//2.插入排序 将数组分为已排序和未排序两部分，从未排序部分取出元素插入到已排序部分的正确位置。
function insertionSort(arr){
  for (let i = i;i<arr.length;i++){
			let preIndex = i - 1;
      let current = arr[i];
    while(preIndex>=0 && arr[preIndex]>current){
      arr[preIndex+1] = arr[preIndex];
      preIndex --
    }
    arr[preIndex+1] = current
  }
  return arr
}
//3.选择排序 每一轮从未排序部分中选出最小值，放到数组的前面。
function selectionSort(arr) {
  const n = arr.length;
  for(let i=0;i<n-1;i++){
    let minIndex = i;
    for(let j = 1;j<n;j++){
      if(arr[j]<arr[minIndex]){
        minIndex = j
      }
    }
    [arr[i],arr[minIndex]] =  [arr[minIndex],arr[i]]
  }
  return arr;
}
//4.快速排序 通过选取一个基准值（pivot），将数组分为比基准值小和大的两部分，递归对两部分排序。
function quickSort(arr) {
  if arr.length<1 return arr
  let pivot = arr[0];
  let min = []
  let max = []
  for(let i = 1;i<arr.length;i++) {
    if(arr[i]>=pivot){
      max.push(arr[i])
    }else{
      min.push(arr[i])
    }
  }
  return [...quickSort(min),pivot,...quickSort(max)]
}
//5.归并排序 将数组分成两部分，分别排序后合并。
function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

function merge(left, right) {
    const result = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i++]);
        } else {
            result.push(right[j++]);
        }
    }

    return result.concat(left.slice(i), right.slice(j));
}
//6.堆排序 利用堆数据结构将最大值（或最小值）不断提取到数组末尾。
function heapSort(arr) {
    const n = arr.length;

    // 构建最大堆
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }

    // 提取元素
    for (let i = n - 1; i > 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]];
        heapify(arr, i, 0);
    }

    return arr;
}

function heapify(arr, n, i) {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;

    if (left < n && arr[left] > arr[largest]) largest = left;
    if (right < n && arr[right] > arr[largest]) largest = right;

    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        heapify(arr, n, largest);
    }
}
```



### 53. 浏览器事件循环和 _node_ 事件循环（搜狗）

### 54. 闭包的好处

```
可以创建私有变量,可以避免全局污染
可以保存函数外的变量不被销毁

```



### 55. _let、const、var_ 的区别

![CleanShot-2024_12_10_04_29_11](/Users/guakeliao/Library/Application Support/CleanShot/media/media_6BH1XRTzIO/CleanShot-2024_12_10_04_29_11.png)

```
let const ES6新增。具有块级作用域。 const创建之后不能修改。
var 只有函数作用域。全局作用域 变量提升，可以多次声明和赋值
```



### 56. 闭包、作用域（可以扩充到作用域链）

```
作用域的类型
	全局作用域（Global Scope）
	局部作用域 函数作用域 块级作用域
闭包是指函数可以“记住”并访问它外部函数的变量，即使外部函数已经执行完毕
```



### 57. _Promise_

### 58. 实现一个函数,对一个 url 进行请求,失败就再次请求,超过最大次数就走失败回调,任何一次成功都走成功回调

```js
async function retryFn(fn,count){
  let res,err;  
	try {
		res = await fn();
    return [null, res]; 
  }catch (e){
    if( count > 0 ){
      return retryFn(fn,count-1)      
    }else{
			err = e
      return [err, null];
    }
  }
}
```



### 59. 冒泡排序

### 60. 数组降维

```js
使用 Array.prototype.flat() 方法 ,默认降维一层,你可以传递一个参数，指定降维的深度。
function flatten(arr) {
  let res = []
  for (let item of arr){
    if (Array.isArray(item)){
      res = [...res,...flatten(item)]
    }else{
      res.push(item)
    }
  }
  return res;
}
flatMap() 方法 flatMap() 是 map() 和 flat() 方法的结合,它相当于先执行 map()，然后执行 flat()，但是只降一层。
```

### 61. _call apply bind_

### 62. promise 代码题

```js
new Promise((resolve, reject) => {
  reject(1);
  console.log(2);
  resolve(3);
  console.log(4);
})
  .then((res) => {
    console.log(res);
  })
  .catch((res) => {
    console.log('reject1');
  });
try {
  new Promise((resolve, reject) => {
    throw 'error';
  })
    .then((res) => {
      console.log(res);
    })
    .catch((res) => {
      console.log('reject2');
    });
} catch (err) {
  console.log(err);
}
```

### 63. _proxy_ 是实现代理，可以改变 _js_ 底层的实现方式, 然后说了一下和 _Object.defineProperty_ 的区别

![CleanShot-2024_12_10_07_10_58](/Users/guakeliao/Library/Application Support/CleanShot/media/media_gtc26w0X6M/CleanShot-2024_12_10_07_10_58.png)

### 64. 使用 _ES5_ 与 _ES6_ 分别实现继承

```
ES5
使用构造函数创建类。
通过 Parent.call(this) 实现子类对父类构造函数的调用，继承父类的属性。
通过 Object.create(Parent.prototype) 设置子类的原型，继承父类的方法。
修复 constructor 指向。
ES6
使用 class 关键字定义类。
使用 extends 实现子类继承父类。
使用 super() 调用父类的构造函数。
```



### 65. 深拷贝

```js
function deepClone(obj){
  if(obj === null || typeof obj !== 'object') return obj
  //处理特殊对象
  if(obj instanceof Date) return new Date(obj)
  if(obj instanceif RegExp) return new RegExp(obj)
  let res = Array.isArray(obj) ? []: {}
  for key in obj {
    if(obl.hasOwnProperty(key)){
      res[key]=deepColne(obj[key])
    }
  }
  return res
}
```



### 66. _async_ 与 _await_ 的作用

```
处理异步。解决了 promise 这种链式调用，让代码写着像同步
```



### 67. 数据的基础类型（原始类型）有哪些

```
String
Number
Boolean
undefined
null
symbol
bigint


Object
Array
Date
RegExp
```



### 68. _typeof null_ 返回结果

```
typeof 用于检测数据的类型。
返回 'object'
在 JavaScript 的早期版本中，使用低位存储变量的类型信息。
```

![CleanShot-2024_12_10_07_33_41](/Users/guakeliao/Library/Application Support/CleanShot/media/media_YD6PaeKGot/CleanShot-2024_12_10_07_33_41.png)

### 69. 对变量进行类型判断的方式有哪些

```
typeof 用于检测数据类型。
instanceof 判断对象是否是构造函数的实例。原理：通过原型连往上查找。
Object.prototype.toString.call(XXX)
Array.isArray()
constructor 属性 每个对象都有一个 constructor 属性，指向创建该对象的构造函数
```



### 70. _typeof_ 与 _instanceof_ 的区别？ _instanceof_ 是如何实现？

```js
typeof 适用于检测数据类型的。原理就是检测二进制前三位。
instanceof 是用于判断对象是不是构造函数的实例。原理通过原型链往上查找
function myInstanceOf(obj,conr) {
  let proto = Object.getPrototypeOf(obj)
  while(proto){
    if(proto === conr.prototype) return true;
    proto = Object.getProtoTypeOf(proto)
  }
  return false
}
```



### 71. 引用类型有哪些，有什么特点

```
object
Array
Date
RegExp
function
map
set

存在堆中。引用类型的变量存储的是对象的引用（内存地址），而不是对象的实际值
比较两个对象是比较内存地址
```



### 72. 如何得到一个变量的类型---指函数封装实现

```js
function getTyep(obj) {
  return Object.prototype.toString.call(obj).slice(8,-1)
}
function getType(obj) {
  if (obj === null) return 'null'
  if (obj instanceof RegExp) return 'RegExp'
  if (obj instanceof Map) return 'Map'
  if (obj instanceof Date) return 'Date'
  return typeof obj
}
```



### 73. 什么是作用域、闭包

```
作用域是一个程序中定义变量和函数的可访问区域。
全局作用域
局部作用
	函数作用域 和 块级作用域
闭包是一个函数和它的词法作用域的组合。简而言之，闭包允许函数访问外部函数的变量，即使外部函数已经执行完毕。
闭包的特点：
	函数可以访问外部函数的变量
	持久化环境
```



### 74. 闭包的缺点是什么？闭包的应用场景有哪些？怎么销毁闭包？

```
容易引起内存泄露，调试困难，性能问题
应用场景：
	数据封装和私有变量
	事件处理器和回调函数
	柯里化
	延迟执行和缓存机制（防抖和节流）
手动销毁闭包或者清理其引用，防止内存泄漏。
```



### 75. *JS*的垃圾回收站机制

```
JavaScript 的垃圾回收策略
	引用计数
	标记清除
```



### 76. 什么是作用域链、原型链

### 77. _new_ 一个构造函数发生了什么

```js
//new 会创建一个空对象 {}。
//new 会将 constructor.prototype 赋给这个空对象的原型（[[Prototype]]）。
// 构造函数被调用，this 指向新创建的对象
// 构造函数没有显式返回对象，所以最终返回新创建的对象
function createInstance(constructor, ...args) {
  // 1. 创建空对象
  let obj = {};
  // 2. 将构造函数的原型赋给新对象
  obj.__proto__ = constructor.prototype;
  // 3. 调用构造函数，绑定新对象为 `this`
  let result = constructor.apply(obj, args);
  // 4. 如果构造函数返回的是对象，则返回该对象，否则返回新创建的对象
  return result instanceof Object ? result : obj;
}
```

### 78. 对一个构造函数实例化后. 它的原型链指向什么

```
```



### 79. 什么是变量提升

```
指的是在代码执行前，所有的变量声明（但不包括赋值）和函数声明会被 "提升" 到作用域的顶部。
```



### 80. == 和 === 的区别是什么

```
== 它在比较两个值时，会自动进行类型转换
```



### 81. _Object.is_ 方法比较的是什么

```
用于比较两个值是否严格相等。它与 === 相似
区别：
+0 -0 不相等
NaN NaN 相等
```



### 82. 基础数据类型和引用数据类型，哪个是保存在栈内存中？哪个是在堆内存中？

### 83. 箭头函数解决了什么问题？

```
this 绑定问题，不再需要手动绑定 this
简洁的语法
没有 arguments 对象
new 无法调用箭头函数
```



### 84. _new_ 一个箭头函数后，它的 _this_ 指向什么？

### 85. _promise_ 的其他方法有用过吗？如 _all、race_。请说下这两者的区别

### 86. _class_ 是如何实现的

```js
//JavaScript 的 class 实际上就是基于原型链机制实现的。在 ES6 之前，我们用构造函数来模拟面向对象编程的类。在 ES6 引入 class 语法后，它只是语法糖，底层依然是基于函数和原型链
  
class Person {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name}`);
  }
}
  
function Employee(name, position) {
  Person.call(this, name);  // 调用父类构造函数
  this.position = position;
}

Employee.prototype = Object.create(Person.prototype); 
Employee.prototype.constructor = Employee;

Employee.prototype.describeJob = function() {
  console.log(`${this.name} is a ${this.position}`);
};
```



### 87. _let、const、var_ 的区别

```
ES6 let const 变量提升，存在暂时性死区。全局作用域 函数作用域 块级作用域
var 变量提升。存在于全局作用于和函数作用于。可重新申明
```



### 88. _ES6_ 中模块化导入和导出与 _common.js_ 有什么区别

```
ES6 
	导出 export export default 导入 import 静态的。编译阶段就能确定以来关系，可以用来 tree shaking
	import 和 export 必须放到文件的顶层。模块的加载是异步的。 import（）
commonjs 
	导出 module.exports 导入 require（） 同步加载的，运行时执行。require 可以用到任何地方。
	
	加载时机：静态加载（同一个模块只加载一次，后面直接用缓存）。动态加载（每次都会执行 require 并返回结果）
	
```



### 89. 说一下普通函数和箭头函数的区别

```
new this arguments function this指向
```



### 90. 说一下 _promise_ 和 _async_ 和 _await_ 什么关系

```
async 标记的函数。返回的就是一个 promise。
Promise 提供了处理异步操作的基础，它是异步编程的底层构建块。
async 和 await 基于 Promise，它们简化了异步操作的写法，使得异步代码看起来像同步代码。
async 函数总是返回一个 Promise，而 await 使得我们可以暂停函数的执行，等待 Promise 完成。
因此，async 和 await 是对 Promise 的语法糖，它们让异步代码的编写更加清晰和易于维护。

```

### 91. 说一下你学习过的有关 _ES6_ 的知识点

```
let const
{} 块作用域
（）=>{}
promise
解构
扩展运算符和剩余参数 ...
map set
weakMap weakSet
symbol
字符串模版 ``
class
export import
generator 函数
默认参数
```

### 92. 了解过 _js_ 中 _arguments_ 吗？接收的是实参还是形参？

```
arguments 接收的是 实参，即调用函数时传递的实际值
形参和实参的区别：
	形参：在函数声明时定义的参数。
	实参：在函数调用时传递给函数的实际参数。
```

### 93. _ES6_ 相比于 _ES5_ 有什么变化

### 94. 强制类型转换方法有哪些？

```
1.数字类型转换
	Number() 可以将字符串、布尔值、null、undefined 等转换为数字。对于无法转换的值，返回 NaN .整体转换
	parseInt() 将字符串转换为整数。如果字符串的开头不能转换为整数，则返回 NaN。此方法忽略字符串中的空白和其他非数	字字符。 尽量转换。转换到不能转为为止
	parseFloat() 将字符串转换为浮点数，处理数字和小数部分，遇到非数字字符时停止转换。
	
	Number('12A') --- NAN
	parseInt('12A') -- 12
2.字符串类型转换
	String() 将任何类型的值转换为字符串。如果是 null 或 undefined，则返回 "null" 或 "undefined"。
	toString() 多数对象和基本数据类型（如 number、boolean 等）都有 toString() 方法，它将返回该值的字符串表示
3.布尔类型转换
	Boolean() 将任何值转换为布尔值
		以下值被转换为 false：
			false
			0
			NaN
			""（空字符串）
			null
			undefined
		所有其他值都被转换为 true。
4.对象类型转换
	Object() 将其他数据类型（例如 null、undefined）转换为对象
5.强制转换 null 和 undefined
	null 被自动转换为 false 在布尔上下文中，转换为 0 在数字上下文中，转换为 "null" 在字符串上下文中。
	undefined 被转换为 false 在布尔上下文中，转换为 NaN 在数字上下文中，转换为 "undefined" 在字符串上下文中。
```

### 95. 纯函数

```
没有副作用
同的输入一定产生相同的输出
它们在函数式编程中占据重要地位，并且由于可预测、可测试的特点，常被用于构建高质量、易维护的代码。
纯函数的优点：
	可预测性：由于纯函数对于相同输入总是产生相同输出，因此它的行为更容易预测和理解。
	可测试性：纯函数不依赖于外部状态，只依赖于传入的参数，所以它们更容易进行单元测试。
	并发友好：由于纯函数没有副作用，它们可以被安全地并行执行而不会互相影响。
	易于组合：纯函数可以方便地组合成更复杂的函数，因为它们没有副作用，只关注输入和输出。
纯函数的缺点：
	实际应用的限制：有些实际任务（例如读写文件、数据库操作、用户输入等）无法仅依赖于纯函数来完成，这些任务需要副作		用，因此纯函数的应用范围是有限的。
```



### 96. _JS_ 模块化

```js
JavaScript 模块化是指将代码分割成不同的模块（modules），每个模块封装特定的功能或逻辑，促进代码的复用、维护和组织性。
1.ES Module（ESM）
	这是现代 JavaScript 原生支持的模块化方式，使用 import 和 export 关键字。
		原生支持（现代浏览器和 Node.js 环境中均可用）。
		静态分析：import 和 export 必须在模块的顶层，加载时即可确定依赖关系。
		支持异步加载。
2.CommonJS（CJS）
	这是 Node.js 默认的模块化方式，使用 require 和 module.exports。
		动态加载：require 可以放在代码的任意位置。
		同步加载：适合于服务器端，不适合前端浏览器直接使用。
3.UMD（Universal Module Definition）
	UMD 是一种同时支持浏览器和 Node.js 环境的模块化规范，常用于库开发。
		兼容 AMD 和 CommonJS 规范。
		如果在浏览器环境下会挂载到全局对象（如 window）。
    (function (root, factory) {
      if (typeof module === 'object' && module.exports) {
        module.exports = factory(); // CommonJS
      } else if (typeof define === 'function' && define.amd) {
        define(factory); // AMD
      } else {
        root.myModule = factory(); // 浏览器
      }
    }(this, function () {
      return {
        hello: function () {
          console.log('Hello, world!');
        }
      };
   }));
4. AMD（Asynchronous Module Definition）
	这是为浏览器设计的模块化方案，使用 define 和 require。
		支持异步加载模块。
		通常用于前端，搭配 RequireJS 使用。
    // 定义模块
    define('math', [], function () {
      return {
        add: function (a, b) {
          return a + b;
        }
      };
    });
    // 使用模块
    require(['math'], function (math) {
      console.log(math.add(2, 3)); // 5
    });
5. IIFE（Immediately Invoked Function Expression）
	早期使用的一种模块化方式，通过闭包实现变量隔离。
  	简单易用，但缺乏模块依赖管理。
		已被现代模块化规范取代。
```



### 97. 看过 _jquery_ 源码吗？

```
核心部分
	模块加载：定义了 jQuery 核心以及依赖模块的加载方式。
	jQuery 核心：实现了 $ 的构造函数，以及工具方法和 DOM 操作。
	选择器引擎（Sizzle）：解析复杂的 CSS 选择器。
	事件处理：封装跨浏览器的事件绑定和触发机制。
	AJAX：提供了简化的异步请求接口。
	动画与效果：封装 DOM 动画效果。
	工具方法：如 $.extend、$.each 等通用工具
```



### 98. 说一下 _js_ 中的 _this_

```
 1.全局作用域 window global 严格模式下 use strict
 2.普通函数 指向调用该函数的对象，没有调用者遵循第一点
 3.对象方法 向调用该方法的对象。赋值后调用，this 为 undefined
 4.构造函数 新创建的对象。
 5.箭头函数 它继承自定义时的上下文
 6.显式绑定  call、apply 和 bind 
 7.Class 与构造函数一致，指向实例。
 8.事件处理 this 默认指向触发事件的 DOM 元素。
```



### 99. _apply call bind_ 区别，手写

```js
Function.prototype.myCall = function(context,...args){
   context = context || globalThis
  const fnSymbol = Symbol();
  context[fnSymbol] = this;  // 将当前函数作为临时方法添加到 context
  const reslut = context[fnSymbol](...args);
  delete context[fnSymbol];
  reture result;
}
Function.prototype.myApply = function (context, args) {
  context = context || globalThis;
  const fnSymbol = Symbol();
  context[fnSymbol] = this;
  const result = context[fnSymbol](...(args || [])); // 如果没有参数，默认空数组
  delete context[fnSymbol];
  return result;
};
Function.prototype.myBind = function (context, ...args) {
  const fn = this; // 保存当前函数
  return function (...newArgs) {
    return fn.apply(context, [...args, ...newArgs]); // 合并绑定时的参数和调用时的参数
  };
};
```



### 100. 手写 _reduce flat_

```js
Array.prototype.myReduce = function	(callBack,initialValue){
  if(typeof callBack !== 'function'){
    throw new Error(`${callBack} is not a function`)
  }
  const array = this;
  let accumulator = initialValue;
  let startIndex = 0;
  if(accumulator === undefined) {
    accumulator = array[0];
    startIndex = 1;
  }
  for (let i = startIndex;i<array.length;i++){
    accumulator = callBack(accumulator,array[i],i,array)
  }
  return accumulator;
}

Array.prototype.myFlat = function(depth = 1){
	const array = this;
  if(depth<1) return array;
  const flatten = (arr,d)=>{
    return arr.reduce((acc,cur)=>{
      if(Array.isArray(cur) && d) {
        return acc.contact(flatten(cur,d-1))
      }else{
        return acc.contact(cur)
      }
    },[])
  }
  return flatten(array,depth)
}
```



### 101. == 隐试转换的原理？是怎么转换的

```
隐式转换的基本规则
	1.如果两个值类型相同：不进行类型转换，直接比较值。
	2.如果一个是 null，另一个是 undefined. 它们会被认为相等。
	3.如果一个是 number，另一个是 string. 将字符串转换为数字，然后进行比较。
	4.如果一个是 boolean 将布尔值转换为数字（true -> 1，false -> 0）然后进行比较。
	5.如果一个是 object，另一个是基本类型（number、string、boolean）：将对象转换为其原始值（通过 					ToPrimitive），然后进行比较。
总结：
null 和 undefined 特殊处理。
字符串和数字的转换以数字为主。
布尔值转换为数字。
对象通过 ToPrimitive 转换为原始值。
```



### 102. ['1', '2', '3'].map(parseInt) 结果是什么，为什么 （字节）

```
map 输出三个参数：value，index,array.
parseInt 接收 2 个参数。value，多少进制 2-36。
解答：
[1，NaN，NaN]
```



### 103. 防抖，节流是什么，如何实现 （字节）

```js
防抖:一个函数在规定的时间内，只执行最后一次。如果这个事件在这段时间内再次出触发，则重置等待时间。
function debounce(fn,delay) {
  let timer = null
  return function(...args){
    clearTimeout(timer)
    timer = setTimeout(()=>fn.apply(this,args),delay)
  }
}
截流：一个函数周期性的执行。期间无论触发多少次，只会在固定的时间内间隔执行
function throttle(fn,delay) {
  let lastTime = 0;
  return function (...args){
    let nowTime = Date.now();
    if(nowTime - lastTime >= delay) {
      fn.apply(this,args)
      lastTime = nowTime;
    }
  }
}
```



### 104. 介绍下 _Set、Map、WeakSet_ 和 _WeakMap_ 的区别（字节）

```
Set 一个集合，唯一性 顺序性 可遍历性
常用方法： add(v),delete(v),has(v),clear(),size
Map 主要用于存储键值对（key-value），其中键（key）和值（value）都可以是任意类型  
	键可以是任意类型
	键值对的顺序性
常用方法：set(key, value) get(key) has(key) delete(key) clear() size

WeakSet:键必须是对象，存储的对象是弱引用。不可迭代，无法获取大小。
WeakMap：键必须是对象。键是弱引用。不可迭代，无法获取大小。
```

![CleanShot-2024_12_11_06_19_09](/Users/guakeliao/Library/Application Support/CleanShot/media/media_oLhMJOemXk/CleanShot-2024_12_11_06_19_09.png)

### 105. _setTimeout、Promise、Async/Await_ 的区别（字节）

```
setTimeout(callback, delay, ...args); 渲染主线程拿到之后，立马结束这个任务，接着把这个放到计时线程中去。当时间到达，计时线程会把回调函数包装成一个任务放到宏队列中去。
Promise 有三种状态，pending fulfilled rejected 当状态一旦改变，就不会变动了。通过链式调用。放到微队列中去。
async/await 是 基于 Promise 的语法糖。它使得异步代码看起来像同步代码
```

![CleanShot-2024_12_11_06_26_46](/Users/guakeliao/Library/Application Support/CleanShot/media/media_HsYauwGwH5/CleanShot-2024_12_11_06_26_46.png)

### 106. _Promise_ 构造函数是同步执行还是异步执行，那么 _then_ 方法呢？（字节）

```
构造函数肯定是同步执行撒。
then() 方法本身是 同步调用 的。但它的回调函数（onFulfilled 或 onRejected）会被放到**微任务队列（Microtask Queue）**中，等到主线程任务执行完毕后才会异步执行。
```



### 107. 情人节福利题，如何实现一个 _new_ （字节）

```js
function Parent(name, age) {
	this.name = name;
	this.age = age;
};
Parent.prototype.sayName = function () {
	console.log(this.name);
};
function child(name,age,xxx){
	Parent.call(this,name,age)
  this.xxx = xxx
}
child.prototype = Object.create(Parent.prototype)
child.prototype.construtor = child;

function myNew(construtor,...args) {
   // 1. 创建一个空对象，并将其原型设置为构造函数的原型
  let obj = Object.create(construtor.prototype)
  // 2. 执行构造函数，将 `this` 绑定到新对象上
	let result = construtor.apply(obj,args);
  // 3. 如果构造函数返回的是对象，返回它；否则，返回新创建的对象
  return reslut typeof 'object'? reslut : obj;
}
```

### 108. 实现一个 _sleep_ 函数（字节）

```js
//基于 Promise 的 sleep
function sleep(ms){
	return new Promise(resolve=>setTimeout(resolve,ms))
}
//基于 setTimeout 的回调
function sleepCallback(ms, callback) {
    setTimeout(callback, ms);
}
// 阻塞式的 sleep
function sleepSync(ms) {
    const end = Date.now() + ms;
    while (Date.now() < end) {
        // 阻塞
    }
}
```



### 109. 使用 sort() 对数组 [3, 15, 8, 29, 102, 22] 进行排序，输出结果 （字节）

```
默认的 sort() 方法按字典顺序排序。 也就是字符串排序。
```



### 110. 实现 5.add(3).sub(2) (百度)

```js
Number.prototype.add = function(i) {
	return Number(this + i)
}
Number.prototype.sub = function(i) {
  return Number(this - i)
}
```



### 111. 给定两个数组，求交集

```js
function intersection(arr1,arr2){
	 const set1 = new Set(arr1);
   return arr2.filter(item => set1.has(item));
}
```



### 112. 为什么普通 _for_ 循环的性能远远高于 _forEach_ 的性能，请解释其中的原因。

```
1.函数调用开销 forEach每次会调用一个函数。增加调用栈的开销。
2.闭包的开销 forEach js会创建一个闭包来捕获回调函数的作用域 每次迭代时都需要处理更多的内存分配和垃圾回收工作
3.提前中止操作。forEach 通过抛出异常来中止循环，但这种方法并不优雅，且开销较大。
```

### 113. 实现一个字符串匹配算法，从长度为 n 的字符串 S 中，查找是否存在字符串 T，T 的长度是 m，若存在返回所在位置。

```js
function findIndex(S,T) {
  if (typeof S !== 'string' || typeof T !== 'string' || (S.length < T.length)) {
    return -1;
  }
	let i = 0,j = 0;
  while(i <= S.length - T.length) {
    if(S[i] === T[j]){
      i++;
      j++;
      if(j === T.length){
        retun i-j;
      }
    }else{
      i = i-j+1;
      j=0
    }
  }
  return -1;
}
```

### 114. 使用 _JavaScript Proxy_ 实现简单的数据绑定

```js
function bindData(data, element) {
  // 创建一个 Proxy，用于拦截数据的修改
  return new Proxy(data, {
    get(target, prop) {
      return Reflect.get(target, prop); // 返回目标对象的属性值
    },
    set(target, prop, value) {
      const result = Reflect.set(target, prop, value); // 更新目标对象的属性值
      // 更新对应 DOM 元素的内容
      if (element[prop]) {
        element[prop].textContent = value;
      }
      return result;
    }
  });
}

// 示例用法
const data = { name: "John", age: 30 };
// 绑定数据到 DOM 元素
const element = {
  name: document.getElementById("name"),
  age: document.getElementById("age")
};
// 使用 Proxy 包装数据对象
const proxyData = bindData(data, element);

// 修改数据时，自动更新 DOM
proxyData.name = "Alice"; // 自动更新 #name 元素内容为 "Alice"
proxyData.age = 25;       // 自动更新 #age 元素内容为 "25"

```



### 115. 数组里面有 _10_ 万个数据，取第一个元素和第 _10_ 万个元素的时间相差多少（字节）

```js
在 JavaScript 中，数组是基于对象实现的，其底层存储可以视为一种连续内存或哈希表的优化。因此，访问数组中的任意元素（包括第一个和第 10 万个元素）的时间复杂度是 O(1)，即常量时间。

const arr = Array.from({ length: 100000 }, (_, i) => i); // 创建一个 10 万长度的数组

console.time("First Element");
const first = arr[0]; // 访问第一个元素
console.timeEnd("First Element");

console.time("Last Element");
const last = arr[99999]; // 访问第 10 万个元素
console.timeEnd("Last Element");

console.log({ first, last });
```

### 116. 打印出 _1~10000_ 以内的对称数

```js
function findSymmetricNumbers(start,end){
  const symmetricNumbers = [];
  for(let i=start ; i < end ; i++) {
    const str = i.toString();
    const reversedStr = str.split('').reverse().jion('')
    if (str === reversedStr) {
      symmetricNumbers.push(str)
    }
  }
  return symmetricNumbers
}
```



### 117. 简述同步和异步的区别

### 118. 怎么添加、移除、复制、创建、和查找节点

```js
1. 添加节点
  // 获取父节点
  const parent = document.getElementById("parent");
  // 创建一个新的节点
  const newChild = document.createElement("div");
  // 添加为父节点的最后一个子节点
  parent.appendChild(newChild);
  // 插入到某个子节点之前
  parent.insertBefore(newChild, referenceNode);
  // 使用 modern API append
  parent.append(newChild);
2.移除节点
	parent.removeChild(target);
	// 直接移除目标节点（modern API）
	target.remove();
3. 复制节点
	// 复制节点（浅拷贝，不复制子节点）
	const shallowCopy = originalNode.cloneNode(false);
	// 复制节点（深拷贝，复制子节点）
	const deepCopy = originalNode.cloneNode(true);
4. 创建节点
	document.createElement("div");
	document.createTextNode("This is a text node");
5.查找节点
	getElementById: 根据 id 查找。
	getElementsByClassName: 根据类名查找。
	getElementsByTagName: 根据标签名查找。
	querySelector 和 querySelectorAll: 使用 CSS 选择器查找。
```

### 119. 实现一个函数 _clone_ 可以对 _Javascript_ 中的五种主要数据类型（_Number、string、 Object、Array、Boolean_）进行复制

```js
function deepClone(target){
  if(target === null || typeof target !== 'object') return target;
  const current = Array.isArray(target) ? [] : {}
  for(let key in target) {
    if(target.hasOwnProperty(key)){
      current[key] = deepClone(target[key])
    }
  }
  return current;
}
```



### 120. 如何消除一个数组里面重复的元素

```
最简单用 set
```



### 121. 写一个返回闭包的函数

```js
function A() {
  let b = 10
  return function(){
    b++
  }
}
```

### 122. 使用递归完成 1 到 100 的累加

```js
function add(start,end,total = 0 ) {
	total+=start
  if (start === end) return total;
  return add(start+1,end,total)
}
```

### 123. _Javascript_ 有哪几种数据类型

```
string boolean number null undefined symbol bigint
object Array Date Regexp
```



### 124. 如何判断数据类型

```
typeof 
instanceof
Object.prototype.toString.call()
```



### 125. console.log(1+'2')和 console.log(1-'2')的打印结果

```
'12', -1
```



### 126. _JS_ 的事件委托是什么，原理是什么

```
事件委托（Event Delegation）是一种在JavaScript中常用的技术，它的核心原理是利用事件冒泡机制。事件冒泡是指当在DOM树中的某个元素上触发了一个事件，这个事件会从该元素开始，逐级向上传播到其父元素，直到根元素（通常是document对象）。在这个过程中，每个祖先元素都有机会对事件做出响应
。
原理：就是利用事件冒泡机制
```



### 127. 如何改变函数内部的 _this_ 指针的指向

```
call apply bind
```

### 128. _JS_ 延迟加载的方式有哪些？

```
defer
async
动态创建<script>元素
使用import()动态导入（ES Modules）
```

### 129. 说说严格模式的限制

```
不允许使用未声明的变量：在严格模式下，尝试赋值给未声明的变量会导致错误。

不允许删除变量或对象：使用delete删除变量或对象会抛出错误。

不允许删除函数：尝试使用delete删除函数会抛出错误。

不允许函数参数重名：函数参数不能有相同的名称。

不允许使用八进制数字：以0开头的数字被视为八进制数，在严格模式下会导致语法错误。

不允许使用转义字符：在严格模式下，不允许使用转义字符来表示八进制数。

不允许对只读属性赋值：尝试对一个只读属性赋值会抛出错误。

不允许对使用getter方法读取的属性进行赋值：尝试对这样的属性赋值会抛出错误。

不允许删除一个不允许删除的属性：例如Object.prototype是一个不可删除的属性，尝试删除会抛出错误。

变量名不能使用 "eval" 和 "arguments" 字符串：这些是保留字，不能用作变量名。

不允许使用 with 语句：with 语句会改变作用域链，增加运行时错误的风险。

eval 不会在它的外层作用域引入变量：在严格模式中，eval 有自己的作用域，不影响外部作用域。

禁止 this 关键字指向全局对象：在函数内部，如果this没有被显式绑定，它不会默认指向全局对象，而是undefined。

保留关键字：一些关键字被保留，以适应未来JavaScript版本的新特性，如implements, interface, let, package, private, protected, public, static, yield等。

函数必须声明在顶层：不允许在非函数的代码块内声明函数。
```

### 130. _attribute_ 和 _property_ 的区别是什么？

```
attribute是 html 的属性。它们是HTML标签中定义的特性
我们通常需要使用特定的方法（如getAttribute和setAttribute）来获取和设置HTML元素的Attribute，
值只能是字符串
存在于HTML标签中
property 是 js 对象的属性。用于描述一个对象的成员或特征 
可以直接通过.运算符或[]运算符访问和修改对象的Property.
值可以是任何JavaScript类型
存在于DOM对象中
```

### 131. _ES6_ 能写 _class_ 么，为什么会出现 _class_ 这种东西?

```
更清晰的语法
面向对象编程
简化原型操作
```



### 132. 常见兼容性问题

```
样式渲染问题 解决方案包括使用CSS Reset或Normalize.css来统一样式基线
JavaScript和DOM兼容性 解决方案是使用条件代码来处理不同浏览器的差异
CSS3前缀问题 为了兼容不同的浏览器，可能需要为CSS3属性添加浏览器前缀 Autoprefixer和PostCSS。
移动端兼容性问题
禁止iOS识别长串数字为电话：可以通过添加<meta content="telephone=no" name="format-detection" />来解决。
禁止iOS和Android用户选中文字：可以通过设置-webkit-user-select:none来禁止用户选中文字。
```

### 133. 函数防抖节流的原理

```js
function debounce(fn,delay) {
  let timer = null;
  return function (...args){
    cleartimeout(timer);
    timer = setTimeout(()=>{
      fn.apply(this,args)
    },delay)
  }
}

function throttle(fn,delay){
  let lastTime = 0;
  return function(...args){
    if(Date.now()-lastTime>delay){
      fn.apply(this,delay)
  		lastTime = Date.now()
    }
  }
}
```

### 134. 原始类型有哪几种？_null_ 是对象吗？

```
string number boolean undefined null symbol bigint
```

### 135. 为什么 _console.log(0.2+0.1==0.3) // false_

```
是由于浮点数的精度问题导致的。这个问题源于IEEE 754标准，这是计算机中表示浮点数的国际标准。根据这个标准，某些小数在二进制形式下无法被精确表示，因此它们会被舍入到最接近的可表示值。
```

### 136. 说一下 _JS_ 中类型转换的规则？

```
```



### 137. 深拷贝和浅拷贝的区别？如何实现

```

```



### 138. 如何判断 _this_？箭头函数的 _this_ 是什么

### 139. _call、apply_ 以及 _bind_ 函数内部实现是怎么样的

```js
Function.prototype.myCall = function(context,...args) {
  context = context || window
  const sy = symbol();
  context[sy] = this;
 	let result = context[sy](...args);
  delete  context[sy]
  return result;
}
Function.prototype.myApply = function(context,args) {
  context = context || window
  const sy = symbol();
  context[sy] = this;
 	let result = context[sy](...args);
  delete  context[sy]
  return result;
}
Function.prototype.myBind = function (context, ...args) {
  const fn = this; // 保存当前函数
  return function (...newArgs) {
    return fn.apply(context, [...args, ...newArgs]); // 合并绑定时的参数和调用时的参数
  };
};
```

### 140. 为什么会出现 _setTimeout_ 倒计时误差？如何减少

```js
硬件讲起。没有原子钟。
可以从渲染原理讲起 计时线程，宏（延时）队列 渲染线程执行
源码：超过 5 层。默认加 4ms
后台选项卡浏览器会对定时器延迟进行强制限制
如何减少
1. 使用 Date 或 performance.now 校准时间
	通过记录目标时间点，并在每次回调中校准误差。
    const interval = 1000 
    const nextTime = Date.now()+interval
    const tick = ()=>{
      const nowTime = Date.now;
      const errorTime = nowTime - nextTime;  
      console.log(errorTime)
      nextTime += interval
      setTimeout(tick,interval-errorTime)
    }
    setTimeout(tick,interval)
2.使用 requestAnimationFrame（适合短间隔）
    let start = performance.now()
    function tick() {
      const elapsed = performance.now() - start;
      console.log(elapsed)
      start = performance.now()
      requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
3.使用 Web Worker 来运行独立线程，避免主线程阻塞。
  // worker.js
  onmessage = function(e) {
      const interval = e.data.interval;
      setInterval(() => {
          postMessage('tick');
      }, interval);
  };

  // 主线程
  const worker = new Worker('worker.js');
  worker.postMessage({ interval: 1000 });
  worker.onmessage = (e) => {
      console.log(e.data); // "tick"
  };
4. 使用高性能库
对于复杂场景，可以使用专门的定时器库，例如 Timer.js。
```

### 141. 谈谈你对 _JS_ 执行上下文栈和作用域链的理解

```
执行上下文是 JavaScript 代码执行时的环境，它定义了变量、函数、对象的访问规则以及当前代码的运行位置。
	全局执行上下文
	函数执行上下文
	eval 执行上下文
	执行上下文栈是一个后进先出（LIFO）的栈结构
作用域是代码中变量的可访问范围。JavaScript 使用词法作用域（Lexical Scope），即作用域在定义时就确定了，与代码的书写位置有关。
	全局作用域
	函数作用域
	块作用域
作用域链是由多个作用域连接起来形成的一条链，用于解析变量。
```

### 142. _new_ 的原理是什么？通过 _new_ 的方式创建对象和通过字面量创建有什么区别？

```js
1.创建一个新的对象，然后使这个对象的__proto__指向构造函数的 prototype。
2.然后调用构造函数，this 绑定为新的对象。
3.如果构造函数返回类型是对象，就返回对象。不是就返回第一步创建的那个对象。
function myNew(construtor,...args){
  let obj = Object.create(construtor.prototype)
  let result = construtor.apply(obj,args)
  return result && typeof result === 'object' ? result : obj
}
```



### 143. _prototype_ 和 \_\__proto_\_\_ 区别是什么？

```
prototype 是构造函数的属性，它指向一个对象，该对象包含可以由构造函数创建的实例共享的属性和方法。
当通过构造函数创建实例时，实例的 __proto__ 会指向构造函数的 prototype。
用于定义所有实例共享的属性和方法。
__proto__ 是所有对象的内部属性（实际上是一个 getter/setter），它指向创建该对象的构造函数的 prototype。
```

![CleanShot-2024_12_12_06_30_17](/Users/guakeliao/Library/Application Support/CleanShot/media/media_T1B2dEK2AB/CleanShot-2024_12_12_06_30_17.png)

### 144. 使用 ES5 实现一个继承？

```js
function Person(name){
  this.name = name
}

Person.prototype.say = function (){
  console.log(this.name)
}

function Child(name,age) {
	Person.call(this,name)
  this.age = age;
}
Child.prototype = Object.create(Persion.prototype)
Child.prototype.construtor = Child
let child = new Child('jav',33);

```



### 145. 取数组的最大值（_ES5、ES6_）

![CleanShot-2024_12_12_06_48_58](/Users/guakeliao/Library/Application Support/CleanShot/media/media_KBa7l2VXao/CleanShot-2024_12_12_06_48_58.png)



### 146. _ES6_ 新的特性有哪些？

```
let const
字符串模版
解构赋值
箭头函数
class
模块化
函数默认参数
剩余参数
扩展运算符
promise
map set weakMap weakSet
symbol
generator for of
```



### 147. _Promise_ 有几种状态, _Promise_ 有什么优缺点 ?

```
三种状态:
pending
fulfilled
rejected

优点
  相比于以前的 callback 代码更加清晰直观
  链式调用
  错误捕获
缺点
	不支持同步操作
	不具备超时机制
	回调地狱仍然存在
	错误传递不直观
	老浏览器兼容问题
	会阻塞异步操作
	
```

### 148. _Promise_ 构造函数是同步还是异步执行，_then_ 呢 ? _Promise_ 如何实现 _then_ 处理 ?

```js
是同步的。then 异步执行。尽管它是被同步调用的。

class MyPromise {
  // 初始化构造函数
  constructor(executor) {
    this.state = 'pending'; // 初始状态是 pending
    this.value = undefined; // 存储 resolve/reject 的值
    this.reason = undefined; // 存储 reject 的原因
    this.callbacks = []; // 存储 then 中的回调函数

    // resolve 函数
    const resolve = (value) => {
      if (this.state === 'pending') {
        this.state = 'fulfilled'; // 状态变为 fulfilled
        this.value = value;
        this.executeCallbacks(); // 执行所有的回调函数
      }
    };

    // reject 函数
    const reject = (reason) => {
      if (this.state === 'pending') {
        this.state = 'rejected'; // 状态变为 rejected
        this.reason = reason;
        this.executeCallbacks(); // 执行所有的回调函数
      }
    };

    // 执行构造函数中的 executor（异步或同步）
    try {
      executor(resolve, reject);
    } catch (err) {
      reject(err); // 如果 executor 抛出异常，直接调用 reject
    }
  }

  // 执行所有的回调函数
  executeCallbacks() {
    // 将回调函数放入微任务队列
    if (this.state === 'fulfilled') {
      setTimeout(() => {
        this.callbacks.forEach(callback => {
          callback.onFulfilled(this.value);
        });
      }, 0);
    } else if (this.state === 'rejected') {
      setTimeout(() => {
        this.callbacks.forEach(callback => {
          callback.onRejected(this.reason);
        });
      }, 0);
    }
  }

  // then 方法，支持链式调用
  then(onFulfilled, onRejected) {
    // 如果没有传入回调函数，默认返回当前的值
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
    onRejected = typeof onRejected === 'function' ? onRejected : reason => { throw reason; };

    // 返回一个新的 Promise，支持链式调用
    return new MyPromise((resolve, reject) => {
      // 处理当前 Promise 状态为 fulfilled
      const handleFulfilled = () => {
        try {
          const result = onFulfilled(this.value);
          if (result instanceof MyPromise) {
            result.then(resolve, reject); // 如果返回的是 Promise，则递归调用
          } else {
            resolve(result); // 返回结果给下一个 then
          }
        } catch (err) {
          reject(err); // 捕获异常并传递给下一个 then
        }
      };

      // 处理当前 Promise 状态为 rejected
      const handleRejected = () => {
        try {
          const result = onRejected(this.reason);
          if (result instanceof MyPromise) {
            result.then(resolve, reject); // 如果返回的是 Promise，则递归调用
          } else {
            resolve(result); // 返回结果给下一个 then
          }
        } catch (err) {
          reject(err); // 捕获异常并传递给下一个 then
        }
      };

      // 当前状态为 pending，回调函数推入 callbacks 队列
      if (this.state === 'pending') {
        this.callbacks.push({
          onFulfilled: handleFulfilled,
          onRejected: handleRejected
        });
      } else if (this.state === 'fulfilled') {
        handleFulfilled(); // 状态为 fulfilled，直接执行
      } else if (this.state === 'rejected') {
        handleRejected(); // 状态为 rejected，直接执行
      }
    });
  }

  // catch 方法，用于捕获 reject
  catch(onRejected) {
    return this.then(null, onRejected);
  }
}

// 测试代码
const promise1 = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve('Success');
  }, 1000);
});

promise1.then((result) => {
  console.log(result);  // 输出: 'Success'
  return 'Next Success';
}).then((result) => {
  console.log(result);  // 输出: 'Next Success'
}).catch((error) => {
  console.log(error);  // 捕获错误
});

```



### 149. _Promise_ 和 _setTimeout_ 的区别 ?

```
一个加到微任务，一个加到宏任务。
```



### 150. 如何实现 _Promise.all_ ?

```js
function myPromiseAll(promises) {
  return new Promise((resolve, reject) => {
    if(!Array.isArray(promises)){
   		return	reject(new TypeError('Argument must be an array')) 
	  }
    if(promises.length === 0) return resolve([]) 
    const results = []
    let completed = 0
    promises.forEach((promise,index)=>{
      Promise.resolve(promise).then(res=>{
        results[index]=res;
        completed+=1;
        if(completed === promises.length){
          resolve(results)
        }
      }).catch(err=>{
        reject(err)
      })
    })
  });
}
```



### 151. 如何实现 _Promise.finally_ ?

```js
if (!Promise.prototype.finally) {
  Promise.prototype.finally = function (onFinally) {
    const P = this.constructor; // 当前 Promise 的构造函数
    return this.then(
      // 成功时执行 onFinally 并继续返回原结果
      (value) => P.resolve(onFinally()).then(() => value),
      // 失败时执行 onFinally 并继续返回原错误
      (reason) =>
        P.resolve(onFinally()).then(() => {
          throw reason;
        })
    );
  };
}
```



### 152. 如何判断 _img_ 加载完成

```
img.onload = function() {
  console.log('图片加载完成');
};

img.onerror = function() {
  console.log('图片加载失败');
};

推荐使用 load 事件和 error 事件：这两者是最常见和最稳定的方式来判断图片是否加载成功或失败。
complete 属性：适用于判断图片是否已经加载，但无法提供具体的加载状态（成功或失败）。适合某些特定场景。
Promise 包装：使用 Promise 可以方便地管理异步加载操作，特别是在需要链式调用时。
```



### 153. 如何阻止冒泡？

```
1.使用 event.stopPropagation()
	stopPropagation() 方法可以阻止事件冒泡，使得事件不会传递给父元素或其他事件监听器。
2.使用 event.stopImmediatePropagation()
	stopImmediatePropagation() 方法不仅会阻止事件的冒泡，还会阻止当前事件的其他处理程序执行。这意味着，如果当前		元素上有多个事件处理程序，调用 stopImmediatePropagation() 后，剩余的处理程序也不会被执行。
3. 阻止默认事件行为event.preventDefault()

IE8及之前：
	event.cancelBubble = true 来阻止事件冒泡。
	event.returnValue = false;  // 来阻止默认行为
```



### 154. 如何阻止默认事件？

```
event.preventDefault();
event.returnValue = false;
```



### 155. 如何用原生 _js_ 给一个按钮绑定两个 _onclick_ 事件？

```js
方法 1：使用 addEventListener
buttoin.addEventListener('click',function(event){})
方法 2：手动调用多个函数
button.onclick = function () {
  firstEvent();
  secondEvent();
};
```



### 156. 拖拽会用到哪些事件

```
1. 拖拽相关事件
	dragstart 用户开始拖动一个元素时触发
	drag 当元素被拖动时触发（拖动过程中会连续触发）。
	dragend 当拖动操作结束（松开鼠标或取消拖动）时触发。
	dragenter 当拖动的元素进入一个有效的放置目标时触发。
	dragover 当拖动的元素在放置目标上方移动时持续触发
	dragleave 当拖动的元素离开一个有效的放置目标时触发。
	drop 当拖动的元素被释放到一个放置目标上时触发。
2. 鼠标事件
	mousedown 当用户按下鼠标按钮时触发。
	mousemove 当鼠标移动时触发。
	mouseup 当鼠标按钮松开时触发。
3. 触摸事件（针对移动设备）
	touchstart 手指接触屏幕时触发。
	touchmove 手指在屏幕上移动时触发。
	touchend 手指离开屏幕时触发。
	
结合拖拽事件的常见流程
初始化拖拽
使用 dragstart 或 mousedown 设置拖拽数据。
实时反馈
使用 drag 或 mousemove 更新元素的显示状态或位置。
进入/离开目标区域
使用 dragenter 和 dragleave 来管理目标区域的高亮状态。
释放放置
使用 drop 或 mouseup 获取拖拽结果。
```



### 157. _document.write_ 和 _innerHTML_ 的区别

```
document.write 是一种直接将内容插入到文档流中的方法。它会立即将指定内容写入到文档中。
  特点
    覆盖文档内容：
      如果 document.write 在文档加载完成后执行，会清空整个页面内容并插入新内容。
    执行时机依赖：
      在文档解析阶段调用时，它会将内容直接插入到当前位置。
      在文档完全加载后调用时，会清空现有内容。
    用于动态加载：
      可以动态加载外部资源，例如脚本或样式。
  缺点
    破坏性： 在页面加载完成后调用时，会导致页面内容丢失。
    性能低： 动态加载内容时，可能会引发页面重绘。
    逐渐过时： 在现代开发中很少使用，除非特定场景（如兼容旧代码或动态加载资源）。
    
innerHTML 是一个 DOM 元素的属性，用于获取或设置元素内部的 HTML 内容。
特点
	操作特定元素：
		innerHTML 只作用于特定的 DOM 元素，而不会影响整个文档。
	灵活性高：
		可通过设置 HTML 字符串动态更新元素的内容。
	安全性注意：
		直接插入用户输入内容时，可能会导致 XSS 攻击，需要小心处理。
优点
	非破坏性： 不会清空整个页面，只影响指定的元素。
	现代化： 现代开发中常用它来动态更新页面内容。

```



### 158. _jQuery_ 的事件委托方法 _bind 、live、delegate、one、on_ 之间有什么区别？

```
.bind()
  引入版本： jQuery 1.0
  功能： 为选定的元素直接绑定事件处理程序。
  特点：直接绑定：仅对当前选定的元素生效，无法绑定到未来动态添加的元素上（即不支持事件委托）。
       性能较低：为每个元素单独注册事件处理器，消耗内存。
  $('#button').bind('click', function() {
    alert('Button clicked!');
  });
	状态： 从 jQuery 3.0 开始被移除，推荐用 .on() 代替。
	
.live()
  引入版本： jQuery 1.3
  功能： 为当前和未来的匹配元素绑定事件处理程序（通过事件委托实现）。
  特点：
  事件委托：将事件绑定到文档根节点（document），再通过事件冒泡进行匹配。
  性能问题：所有事件都需要经过根节点的处理，性能较差，特别是在大型文档中。
   状态： 从 jQuery 1.7 开始被废弃，jQuery 1.9 后被移除，推荐用 .on() 代替。
  $('.dynamic').live('click', function() {
    alert('Dynamic element clicked!');
  });

  
.delegate()
  引入版本： jQuery 1.4.2
  功能： 将事件绑定到某个祖先元素上，支持动态添加的子元素（事件委托）。
  特点：
  更高效的事件委托：事件绑定在更近的父节点上，而非整个文档。
  灵活性高：允许选择绑定的祖先节点，可以指定特定的子元素选择器。
  状态： 从 jQuery 1.7 开始被 .on() 替代，仍然可用，但不推荐。
  $('#parent').delegate('.child', 'click', function() {
    alert('Child element clicked!');
  });

.one()
  引入版本： jQuery 1.0
  功能： 绑定事件处理程序，仅触发一次后自动解除绑定。
  特点： 单次事件处理：适用于需要在某一操作完成后不再处理的场景。
  状态： 仍然可用，无需替代。
  $('#button').one('click', function() {
  	alert('This will only trigger once!');
	});
	
.on()
	引入版本： jQuery 1.7.
	功能： 统一了 .bind()、.live() 和 .delegate() 的功能，支持直接绑定和事件委托。
  特点：
  统一的事件绑定方法：可用于直接绑定和委托绑定。
  性能优化：允许指定事件委托的父级节点，提高性能。
  推荐方法：现代 jQuery 中最常用的事件绑定方式。
  状态： 推荐方法，替代了 .bind()、.live() 和 .delegate()。
	$('#parent').on('click', '.child', function() {
  	alert('Child element clicked!');
	});

```

![CleanShot-2024_12_14_09_53_05](/Users/guakeliao/Library/Application Support/CleanShot/media/media_M02cfNo7ot/CleanShot-2024_12_14_09_53_05.png)

### 159. _$(document).ready_ 方法和 _window.onload_ 有什么区别？

![CleanShot-2024_12_14_09_54_07](/Users/guakeliao/Library/Application Support/CleanShot/media/media_bMzgyxNr41/CleanShot-2024_12_14_09_54_07.png)

```
原生替代 jQuery： 如果你不用 jQuery，可以使用 DOMContentLoaded 事件，效果类似于 $(document).ready。
```

### 160. jquery 中$.get()提交和$.post()提交有区别吗？

### 161. _await async_ 如何实现 （阿里）

```js
// _async 的实现基于生成器（Generator）函数，通过 yield 暂停和恢复执行流程。
function _async(generatorFunc) {
  return function (...args) {
    const generator = generatorFunc(...args);

    function handleResult(next) {
      if (next.done) {
        return Promise.resolve(next.value);
      }
      return Promise.resolve(next.value).then(
        value => handleResult(generator.next(value)),
        error => handleResult(generator.throw(error))
      );
    }

    try {
      return handleResult(generator.next());
    } catch (err) {
      return Promise.reject(err);
    }
  };
}

//用法示例
const _await = value => new Promise(resolve => setTimeout(() => resolve(value), 1000));

const asyncFunction = _async(function* () {
  console.log("Step 1");
  const value = yield _await(42); // 模拟异步操作
  console.log("Step 2: Received value", value);
  return "Done!";
});

asyncFunction().then(console.log); // 输出：Step 1 -> Step 2: Received value 42 -> Done!

```



### 162. _clientWidth,offsetWidth,scrollWidth_ 的区别

```
clientWidth
	描述：元素的可见宽度（包括内边距 padding，但不包括边框 border 和滚动条的宽度）。
	适用范围：只能用于 Element 节点。
	典型用途：获取元素内容加内边距的可见区域宽度。
	clientWidth = 内容宽度 (content) + 内边距 (padding)
offsetWidth
	描述：元素的实际渲染宽度（包括内边距 padding、边框 border 和滚动条的宽度）。
	适用范围：只能用于 Element 节点。
	典型用途：获取元素占据的总宽度，常用于布局计算。
	offsetWidth = 内容宽度 (content) + 内边距 (padding) + 边框宽度 (border) + 滚动条宽度
scrollWidth
	描述：元素内容的实际宽度（包括不可见的部分）。
	如果内容超出可见范围，scrollWidth 会比 clientWidth 大。
	如果内容未超出，scrollWidth 与 clientWidth 相等。
	适用范围：只能用于 Element 节点。
	典型用途：获取元素内容的总宽度，常用于滚动区域计算。
	scrollWidth = 内容宽度 (content) + 内边距 (padding) + 溢出隐藏的内容宽度
```

![CleanShot-2024_12_16_07_07_52](/Users/guakeliao/Library/Application Support/CleanShot/media/media_g5Q6pYPuLq/CleanShot-2024_12_16_07_07_52.png)

### 163. 产生一个不重复的随机数组

```js
方法 1：利用 Set 去重
function generateUniqueRandomArray(size, min, max) {
  const set = new Set();
  while (set.size < size) {
    const random = Math.floor(Math.random() * (max - min + 1)) + min;
    set.add(random);
  }
  return Array.from(set);
}
// 生成长度为 10 的随机数组，范围在 1 到 100 之间
console.log(generateUniqueRandomArray(10, 1, 100));

方法 2：洗牌算法
function generateUniqueRandomArray(size, min, max) {
  if (max - min + 1 < size) {
    throw new Error("范围不足以生成指定长度的数组");
  }
  const array = Array.from({ length: max - min + 1 }, (_, i) => i + min);
  
  // 洗牌算法 (Fisher-Yates Shuffle)
  for (let i = array.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
  }

  return array.slice(0, size);
}
// 生成长度为 10 的随机数组，范围在 1 到 100 之间
console.log(generateUniqueRandomArray(10, 1, 100));

方法 3：递归生成
function generateUniqueRandomArray(size, min, max) {
  const result = [];
  while (result.length < size) {
    const random = Math.floor(Math.random() * (max - min + 1)) + min;
    if (!result.includes(random)) {
      result.push(random);
    }
  }
  return result;
}
// 生成长度为 10 的随机数组，范围在 1 到 100 之间
console.log(generateUniqueRandomArray(10, 1, 100));

方法 4：用位操作优化去重 (适用于整数范围较小时)
function generateUniqueRandomArray(size, min, max) {
  const used = new Array(max - min + 1).fill(false);
  const result = [];
  while (result.length < size) {
    const random = Math.floor(Math.random() * (max - min + 1)) + min;
    if (!used[random - min]) {
      used[random - min] = true;
      result.push(random);
    }
  }
  return result;
}
// 生成长度为 10 的随机数组，范围在 1 到 100 之间
console.log(generateUniqueRandomArray(10, 1, 100));
```



### 164. _continue_ 和 _break_ 的区别

### 165. 如何在 _jquery_ 上扩展插件，以及内部原理（腾讯）

```
1.1 对象方法扩展
	扩展 $.fn：$.fn 是 jQuery.prototype 的别名，通过扩展 $.fn，所有 jQuery 对象都能访问新方法。
	对象方法扩展会将新方法添加到 jQuery 对象的原型上，这样可以通过 jQuery 对象调用插件。
	$.fn.myPlugin = function (options) {}
1.2 全局方法扩展
	全局方法扩展会将新方法添加到 jQuery 本身，通常用于工具类方法。
	$.myUtility = function (text) {
  	console.log(text);
	};

```

### 166. _async/await_ 如何捕获错误

```
补充：
	在浏览器中，可以使用 window.onunhandledrejection，这种方式适合捕获所有未处理的 Promise 错误。
```

### 167. _Proxy_ 对比 _Object.defineProperty_ 的优势

```
Object.defineProperty 只能拦截对象的 get set 操作。
Proxy 支持动态新增或删除属性的监听。可监听数组操作。可监听对象本身的结构变化。支持更好的默认行为。使用 Proxy 不会污染原对象。Proxy 对性能的影响较小
```

![CleanShot-2024_12_16_07_30_25](/Users/guakeliao/Library/Application Support/CleanShot/media/media_xJKOBtbiRw/CleanShot-2024_12_16_07_30_25.png)

### 168. 原型链，可以改变原型链的规则吗?

```
动态修改原型链（Object.setPrototypeOf 或 Object.create）。
使用 Proxy 实现自定义属性查找逻辑。
修改 Object.prototype 来影响所有普通对象（不推荐）。
创建无原型对象（断开原型链）。
使用函数或类控制对象的继承规则。
```



### 169. 讲一讲继承的所有方式都有什么？手写一个寄生组合式继承

```js
1.原型链继承
	Child.prototype = new Parent(); // 子类的原型指向父类的实例
	Child.prototype.constructor = Child; // 修正 constructor
2.借用构造函数继承（经典继承）
	function Child(name, age) {
  	Parent.call(this, name); // 调用父类构造函数
	  this.age = age;
	}
3.组合继承
	结合 原型链继承+借用构造函数继承
4. 原型式继承
	直接基于一个对象创建一个新对象，是对原型链继承的简化。
	const child = Object.create(parent); // 创建一个新对象，原型指向 parent
5. 寄生式继承
	对原型式继承进行扩展，在继承的同时增强对象。
  function createObject(o) {
    const clone = Object.create(o);
    clone.sayHi = function () {
      console.log('Hi from Child');
    };
    return clone;
  }
  const parent = {
    name: 'Parent',
    sayHello() {
      console.log('Hello from Parent');
    }
  };
  const child = createObject(parent);
6. 寄生组合式继承
  function Parent(name) {
    this.name = name;
  }
  Parent.prototype.sayHello = function () {
    console.log('Hello from Parent');
  };
  function Child(name, age) {
    Parent.call(this, name); // 借用构造函数
    this.age = age;
  }
  // 寄生式优化原型链继承
  function inheritPrototype(child, parent) {
    child.prototype = Object.create(parent.prototype);   // 子类原型指向副本
    child.prototype.constructor = child;// 修正 constructor
  }
  inheritPrototype(Child, Parent);
  const child = new Child('Alice', 25);
	7. ES6 Class 继承
   class Child extends Parent {
    constructor(name, age) {
      super(name); // 调用父类构造函数
      this.age = age;
    }
  }
```

![CleanShot-2024_12_16_07_49_56](/Users/guakeliao/Library/Application Support/CleanShot/media/media_5kedazIqpn/CleanShot-2024_12_16_07_49_56.png)

### 170. _JS_ 基本数据类型有哪些？栈和堆有什么区别，为什么要这样存储。（快手）

```
两者主要的区别体现在 存储方式、访问方式 和 存储内容 上。
由于栈的 后进先出 特性，栈内存的管理更简单，速度更快，适合存储生命周期短、大小固定的数据（如基本数据类型）。
由于对象的大小是动态的，且生命周期不确定，堆内存允许更加灵活的内存分配。
```

![CleanShot-2024_12_16_07_57_16](/Users/guakeliao/Library/Application Support/CleanShot/media/media_GvFlM0iCrj/CleanShot-2024_12_16_07_57_16.png)

### 171. _setTimeout(() => {}, 0)_ 什么时候执行

```
在当前执行栈清空之后、下一个事件循环开始之前。
```



### 172. _js_ 有函数重载吗（网易）

```
没有。
函数重载是指同一个函数名可以接受不同数量或类型的参数并进行不同的处理.
JavaScript 是动态类型语言，函数参数的数量和类型不固定。js允许同名函数重复声明时，后面的声明会覆盖前面的声明。
模拟函数重载的方式
	1.arguments.length 根据不同数量的参数执行不同的逻辑。
	2. 基于参数类型的重载 typeof 可以帮助检查参数的类型，根据不同类型执行不同的操作。
	3. 使用对象作为参数 
```



### 173. 给你一个数组，计算每个数出现的次数，如果每个数组返回的数都是独一无二的就返回 _true_ 相反则返回的 _flase_

### 174. 封装一个能够统计重复的字符的函数，例如 _aaabbbdddddfff_ 转化为 _3a3b5d3f_

```js
function calcCharNum(str) {
  let arr = [...new Set(str)]
  let ob = {}
  for (let key of arr) {
    if (ob[key] == null) {
      ob[key] = 0
    }
  }
  for (let i = 0; i < str.length; i++) {
    ob[str[i]]++
  }
  let s = ''
  for (let key in ob) {
    s += `${ob[key]}${key}`
  }
  return s
}
```

### 175. 写出代码的执行结果，并解释为什么？

```js
function a() {
  console.log(1);
}
(function () {
  if (false) {
    function a() {
      console.log(2);
    }
  }
  console.log(typeof a);
  a();
})();
```

### 176. 写出代码的执行结果，并解释为什么？

```js
alert(a);
a();
var a = 3;
function a() {
  alert(10);
}
alert(a);
a = 6;
a();
```

### 177. 写出下面程序的打印顺序，并简要说明原因

```js
setTimeout(function () {
  console.log('set1');
  new Promise(function (resolve) {
    resolve();
  }).then(function () {
    new Promise(function (resolve) {
      resolve();
    }).then(function () {
      console.log('then4');
    });
    console.log('then2');
  });
});
new Promise(function (resolve) {
  console.log('pr1');
  resolve();
}).then(function () {
  console.log('then1');
});

setTimeout(function () {
  console.log('set2');
});
console.log(2);

new Promise(function (resolve) {
  resolve();
}).then(function () {
  console.log('then3');
});
```

### 178. _javascript_ 中什么是伪数组？如何将伪数组转换为标准数组

```
伪数组（array-like object）指的是具有类数组的某些特征，但不是真正数组的对象
具有一个 length 属性，表示包含的元素数量。
可以通过 数字索引 来访问其元素（即 obj[0], obj[1] 等）。
常见的伪数组：
	arguments 对象
	DOM 方法返回的节点列表
转换为标准数组:
	Array.prototype.slice.call()
	Array.form()
	扩展运算符（...）
	for 循环手动转换
```

### 179. _array_ 和 _object_ 的区别

![CleanShot-2024_12_16_08_49_26](/Users/guakeliao/Library/Application Support/CleanShot/media/media_C9fECjFBMd/CleanShot-2024_12_16_08_49_26.png)

### 180. _jquery_ 事件委托

```js
$(parentSelector).on(eventType, childSelector, function() {
    // 事件处理逻辑
});
// 例子
$('#list').on('click', 'li', function() {
    alert($(this).text());
});
```

### 181. _JS_ 基本数据类型

### 182. 请实现一个模块 _math_，支持链式调用`math.add(2,4).minus(3).	(2);`

```js
class Math {
  constructor() {
    this.v = 0
  }
  // 加
  add(a, b) {
    this.v += a + b
    return this
  }
  //减
  minus(a) {
    this.v -= a
    return this
  }
  // 乘
  times(a) {
    this.v *= a
    return this
  }
  value() {
    return this.v
  }
}

```

### 183. 请简述 _ES6_ 代码转成 _ES5_ 代码的实现思路。

```
将 ES6 转成 ES5 的主要过程包括：
  解析 ES6 代码并生成 AST。 抽象语法树。
  转换 ES6 的新特性（如箭头函数、类、模块等）为 ES5 兼容的语法。、
  	 常见的:
  	 	箭头函数
  	 	类       函数和原型上的方法
  	 	模块			import 和 export -> require 和 module.exports
  	 	模版字符串 拼接
  	 	promise		转化为回调函数或者通过使用 polyfill 来提供 Promise 的功能	
  	 	解构赋值    
  	 	默认参数    a = a||1
  	 	let const  -> var
  使用 polyfill 填补浏览器不支持的新特性。
  生成最终的 ES5 代码。
```



### 184. 下列代码的执行结果

```js
async function async1() {
  console.log('async1 start');
  await async2();
  console.log('async1 end');
}
async function async2() {
  console.log('async2');
}
console.log('script start');
setTimeout(function () {
  console.log('setTimeout');
}, 0);
async1();
new Promise(function (resolve) {
  console.log('promise1');
  resolve();
}).then(function () {
  console.log('promise2');
});
console.log('script end');
```

### 185. _JS_ 有哪些内置对象？

```
1. 基础数据类型对象
	Object
	Function
	Array
	String
	Number
	Boolean
	Symbol
	Bigint
2. 全局对象
	globalThis  在所有 JavaScript 环境下（包括浏览器、Node.js 等）访问全局对象的统一方式。
	window
	self
	this
3. 日期和时间
	Date
4. 数学相关对象
	Math,Number
5. 正则表达式
	RegExp: 用于处理和操作正则表达式。
6. 错误处理
  Error: 基础错误对象，可以用于抛出和捕获错误。
  EvalError: 处理 eval() 函数的错误。
  RangeError: 数值范围错误（如超出有效数组索引）。
  ReferenceError: 引用错误（如未定义的变量）。
  SyntaxError: 语法错误。
  TypeError: 类型错误（例如对非对象调用方法）。
  URIError: 与 URI 操作相关的错误（如 decodeURIComponent()）。
7. 浏览器相关的对象
	document: 浏览器中的文档对象，用于操作网页内容。
  window: 浏览器的窗口对象，提供了浏览器的一些功能，如 alert(), prompt() 等。
  navigator: 用于获取浏览器的相关信息。
  localStorage: 提供本地存储功能，可以在用户的浏览器中保存数据。
  sessionStorage: 提供会话存储功能，只在浏览器会话期间有效。
  console: 提供日志记录功能，用于调试和输出信息。
```

### 186. _DOM_ 怎样添加、移除、移动、复制、创建和查找节点

```
1. 添加节点
  appendChild(): 向父节点的子节点列表的末尾添加一个新的子节点。
  insertBefore(): 在父节点的指定子节点之前插入新的子节点。
	append()（推荐）：可插入节点或字符串，支持多个参数。
2. 移除节点
	removeChild(): 从父节点中删除一个子节点。
	remove(): 删除当前节点（没有父节点参数），直接移除节点本身。
3. 移动节点
	appendChild(): 可以用来将节点从一个位置移动到另一个位置。
4. 复制节点
	cloneNode()：复制节点。
5. 创建节点
  document.createElement()：创建一个 HTML 元素节点。
  document.createTextNode()：创建一个文本节点。
  document.createDocumentFragment()：创建一个文档片段。
6. 查找节点
	getElementById()：按 ID 查找。
  getElementsByTagName()：按标签名查找。
  getElementsByClassName()：按类名查找。
  querySelector()（推荐）：按 CSS 选择器查找第一个节点。
  querySelectorAll()（推荐）：按 CSS 选择器查找所有节点。
  childNodes 和 children：获取子节点。
    childNodes 包括所有类型的子节点（如文本节点）。
    children 仅包含元素子节点。

```

### 187. _eval_ 是做什么的？

```
eval() 会解析并执行字符串中的代码，并返回执行结果。
```

### 188. _null_ 和 _undefined_ 的区别？

```
补充：
	Number（null） ---- 0
	Number（undefined） ---- NaN
```

### 189. _new_ 操作符具体干了什么呢？

```js
Function.prototype.MyNew = function(construtor,...args) {
  let obj = Object.create(construtor.prototype);
  let result = construtor.apply(obj,args);
  return result && typeof result === 'object' ? result : obj
}	
```



### 190. 去除字符串中的空格

```
1.split(' ').jion('')
2.replaceAll(' ')
3.const result = str.replace(/\s+/g, ""); // 去除所有空格
4.String.prototype.trim()
```



### 191. 常见的内存泄露，以及解决方案

```
1. 循环引用 (Circular References)
2. 事件监听器没有移除
3. DOM 对象未被释放
	const element = document.querySelector('#some-element');
	document.body.removeChild(element); // 从 DOM 移除元素
	// 但没有取消对 element 的引用
	element = null; // 解除引用
4. 全局变量
5. 定时器 (setInterval 和 setTimeout) 未清除
6. 闭包导致的内存泄漏
```



### 192. 箭头函数和普通函数里面的 _this_ 有什么区别

```
箭头函数中的 this 会捕获定义时所在环境的 this，并且始终指向这个值。
```



### 193. 设计⼀个⽅法(_isPalindrom_)以判断是否回⽂(颠倒后的字符串和原来的字符串⼀样为回⽂)

### 194. 设计⼀个⽅法(_findMaxDuplicateChar_)以统计字符串中出现最多次数的字符

```js
function _findMaxDuplicateChar(str) {
    if (!str) return null; // 处理空字符串

    const charMap = {};
    let maxChar = '';
    let maxCount = 0;

    // 遍历字符串，统计每个字符的出现次数
    for (const char of str) {
        charMap[char] = (charMap[char] || 0) + 1;

        // 更新最大次数的字符
        if (charMap[char] > maxCount) {
            maxChar = char;
            maxCount = charMap[char];
        }
    }

    return { char: maxChar, count: maxCount };
}

```

### 195. 设计⼀段代码，使得通过点击按钮可以在 _span_ 中显示⽂本框中输⼊的值

### 196. _map_ 和 _forEach_ 的区别？

### 197. _Array_ 的常用方法

```
push pop unshift shift
forEach
map
filter
find
includes
indexOf
jion
slice
splice
sort
reverse
reduce
flat 将嵌套数组展开到指定深度。
flatMap 对数组中的每个元素调用回调函数，并将结果展平一层
```



### 198. 数组去重的多种实现方式

```
set
filter： array.filter((item, index) => array.indexOf(item) === index);
```

### 199. 什么是预解析（预编译）

```
JavaScript 是一种解释型语言，但在代码执行之前，它会经历一个“准备阶段”（即预解析）。这包括：
创建执行上下文（Execution Context）
分配内存空间：
标识提升（Hoisting）
```

### 200. 原始值类型和引用值类型的区别是什么？

### 201. 冒泡排序的思路，不用 _sort_

### 202. _symbol_ 用途

```
Symbol 的主要用途是解决属性名冲突的问题，并提供一种方式来创建不可变的、唯一的标识符。
```

### 203. 什么是函数式编程，应用场景是什么

```
函数式编程是一种编程范式，它强调使用纯函数和不可变的数据结构，避免使用共享状态和副作用。函数式编程的核心思想是将计算过程看作数学函数的运算。
函数式编程的主要特性：
	纯函数（Pure Function）
	不可变性（Immutability）
	高阶函数（Higher-Order Function）
	函数是一等公民（First-Class Citizen）
	无状态（Statelessness）
	组合性（Composition）
应用场景
	1. 数据处理和流操作
	2. 无状态组件
	3. 并发和并行计算
	4. 构建可靠性高的系统
	5. 动态配置和策略模式
	6. 数据流和响应式编程
```

### 204. 事件以及事件相关的兼容性问题

```
1. 冒泡和捕获:
  早期 IE（IE8 及以下）不支持标准的事件模型，而是使用 attachEvent，仅支持冒泡阶段。
  if (element.addEventListener) {
      element.addEventListener("click", handler, false); // 标准
  } else if (element.attachEvent) {
      element.attachEvent("onclick", handler); // 兼容 IE8
  }
2. 标准事件对象:
  function handler(event) {
      event = event || window.event; // 获取事件对象
      var target = event.target || event.srcElement; // 获取事件目标
      console.log(target);
  }
3. 事件委托:
	主要涉及 event.target 的支持（IE 中为 event.srcElement）。
4. 事件默认行为和传播:
	阻止默认行为
		W3C 标准使用 event.preventDefault()。
		IE 使用 event.returnValue = false。
	停止事件传播：
		W3C 标准使用 event.stopPropagation()。
		IE 使用 event.cancelBubble = true。
5. 事件类型兼容性
    鼠标事件：
      早期 IE 不支持 mouseenter 和 mouseleave，可以使用 mouseover 和 mouseout 代替。
    键盘事件：
      keypress 在现代浏览器中已被废弃，应使用 keydown 和 keyup。
      键码获取：event.key 或 event.code（现代浏览器），event.keyCode（早期浏览器）。
6. 事件绑定的兼容性
    动态绑定：
      使用 addEventListener 或 attachEvent。
    移除事件：
      使用 removeEventListener 或 detachEvent。
```



### 205. _JS_ 小数不精准，如何计算

```
JavaScript 的浮点数不精确问题是因为它使用 IEEE 754 双精度浮点数格式
1. 使用整数运算（放大处理）
		将小数转换为整数进行计算，最后再除以放大的倍数。
2. 使用 toFixed 方法
		toFixed 会将小数舍入到指定的小数位，并返回字符串形式，可以通过 Number 或 parseFloat 转换为数值。
3. 使用 BigDecimal 库
4. 使用原生 BigInt 或者大数计算
		BigInt 是 JavaScript 内置的任意精度整数，但不直接支持小数运算。需要将小数转为整数后使用。
5. 转换为 Fraction (分数) 处理
		通过第三方库如 fraction.js 来处理小数问题，将小数转换为分数表示，避免浮点误差。
```



### 206. 写一个 _mySetInterVal(fn, a, b)_，每次间隔 _a,a+b,a+2b_ 的时间，然后写一个 _myClear_，停止上面的 _mySetInterVal_

```js
function mySetInterVal(fn, a, b) {
  let timerId = null;
  let count = 0;

  let run = ()=>{
		fn();
    count++;
    let delay = a + b*count;
    timerId = setTimeout(run,delay)
  }
  // 启动初始定时器
 timerId = setTimeout(run, a);
  
 return ()=>{
   clearTimeout(timerId)
   timerId = null
 }
}
function myClear(clearFn) {
  clearFn()
}
```



### 207. 合并二维有序数组成一维有序数组，归并排序的思路

```js
function flatArr(arr){
  return [].concat(...arr).sort((a, b) => a - b);
}
```

### 208. 给定一个字符串，请你找出其中不含有重复字符的最长子串的长度。

```js
function findSubString(str){
  let lastLong = 0
	let currentlong = 0
  let lastArr = []
  let currentArr = []
  for(let i = 0 ;i<str.length;i++){
    if(!currentArr.includes(str[i])){
      currentArr.push(str[i])
      currentlong ++;
    }else{
			if (lastLong < currentlong){
        lastLong = currentlong;
        lastArr = [...currentArr];
      }
      currentlong = 0;
      currentArr.length = 0;
      i--
    }
  }
  return [lastLong, lastArr]
}
```

### 209. 有一堆整数，请把他们分成三份，确保每一份和尽量相等（11，42，23，4，5，6 4 5 6 11 23 42 56 78 90）(滴滴 _2020_)

```
没做出来
```

### 210. 手写发布订阅（头条 2020）

````js
class EventBus {
  constructor(){
    this.events = new Map()
  }
  on(type,hander){
    let handers = this.events.get(type)
    if(!handers){
      handers = []
      this.events.set(type,handers);
    }
		handers.push(hander);
  }
  once(type,hander){
    const warpper = (...args)=>{
      hander(...args);
      this.off(type,hander)
    }
    this.on(type,warpper)
  }
  off(type,hander) {
    let handers = this.events.get(type)
    handers = handers.filter(h=>h!==hander);
  }
  emit(type,...args) {
    let handers = this.events.get(type)
    handers?.forEach(hander=>hander(...args))
  }
}
````



### 211. 手写用 _ES6proxy_ 如何实现 _arr[-1]_ 的访问（滴滴 2020）

```js
function findArr(arr) {
 return new Proxy(arr,{
    get(target,prop) {
      const index = Number(prop);
      if (index<0){
				return target[target.length+idnex];
      }
      return target[index]
    }
   set(target,prop,value) {
  	 const index = Number(prop);
      if (index<0){
			 target[target.length+idnex] = value
      }
			target[index] = value
 	}
  })
}
```

### 212. 下列代码执行结果

```js
console.log(1);
setTimeout(() => {
  console.log(2);
  process.nextTick(() => {
    console.log(3);
  });
  new Promise((resolve) => {
    console.log(4);
    resolve();
  }).then(() => {
    console.log(5);
  });
});
new Promise((resolve) => {
  console.log(7);
  resolve();
}).then(() => {
  console.log(8);
});
process.nextTick(() => {
  console.log(6);
});
setTimeout(() => {
  console.log(9);
  process.nextTick(() => {
    console.log(10);
  });
  new Promise((resolve) => {
    console.log(11);
    resolve();
  }).then(() => {
    console.log(12);
  });
});
```

### 213. Number() 的存储空间是多大？如果后台发送了一个超过最大自己的数字怎么办

```
在 JavaScript 中，Number 类型使用 64位浮点数（IEEE 754 双精度标准）进行表示。
Number 类型占用 8字节（64位） 的存储空间。
64位分为三部分：
1位：符号位，决定正负。
11位：指数部分，用于表示数字的范围。
52位：尾数部分（有效位数），用于表示数字的精度。
最大整数是:2 的 53 次方 - 1；

```

### 214. 事件是如何实现的？(字节 2020)

```
事件是基于 发布/订阅模式 和 观察者模式 的机制实现的，核心思想是 事件的监听与触发。
发布/订阅模式
  发布者：负责触发事件。
  订阅者：监听事件并在事件触发时执行相关逻辑。
  事件系统是通过中间的 事件中心 管理发布者和订阅者的关系。
观察者模式
	观察者直接绑定到目标对象，当目标对象状态发生变化时，观察者会被通知。

事件机制的核心：
  监听：注册事件和回调函数。
  触发：在事件发生时调用对应的回调函数。
  管理：支持事件的添加、移除等操作。
实现方式：
  浏览器中的 DOM 事件采用捕获和冒泡模型。
  Node.js 的事件系统基于 EventEmitter。
  自定义事件系统可以通过维护一个事件与回调列表的映射关系实现。
```

### 215. 下列代码执行结果

```js
Promise.resolve()
  .then(() => {
    console.log(0);
    return Promise.resolve(4);
  })
  .then((res) => {
    console.log(res);
  });

Promise.resolve()
  .then(() => {
    console.log(1);
  })
  .then(() => {
    console.log(2);
  })
  .then(() => {
    console.log(3);
  })
  .then(() => {
    console.log(5);
  })
  .then(() => {
    console.log(6);
  });


// 涉及到吸收状态:
p.then(()=>吸收状态)
```

### 216. 判断数组的方法，请分别介绍它们之间的区别和优劣

```
Array.isArray(value)
value instanceof Array
Object.prototype.toString.call(value)
value.constructor === Array
```

### 217. JavaScript 中的数组和函数在内存中是如何存储的？

```
```



### 218. _JavaScript_ 是如何运行的？解释型语言和编译型语言的差异是什么？

```
JavaScript 是一种解释型语言，运行过程依赖于 JavaScript 引擎（如 V8、SpiderMonkey）
1. 脚本加载
	JavaScript 文件通过 <script> 标签或动态加载方式被嵌入到 HTML 页面中。浏览器解析 HTML 文档时遇到 <script> 会下载和执行对应的 JavaScript 文件。
2. 编译和执行
	JavaScript 是 即时编译（JIT, Just-In-Time Compilation）语言，并不像传统解释型语言那样逐行解释执行，而是经历了以下步骤：
	解析（Parsing）：
		JavaScript 引擎将源码分割成语法单元（Token），然后生成 抽象语法树（AST）。
		AST 是源码的结构化表示，用于后续的优化和执行。
	字节码生成：
		基于 AST，生成一种中间表示（字节码），供虚拟机执行。
		一些常用的代码可能被直接优化为机器码（通过 JIT 编译器）。
	执行：
		字节码或机器码在虚拟机中被逐步执行。
		JavaScript 是单线程的，但通过事件循环机制实现异步操作。
3. 引擎优化
	现代 JavaScript 引擎（如 Chrome 的 V8）会对代码进行多次优化：
	解释执行：初始代码直接解释为字节码执行，速度快但效率不高。
	JIT 编译：将热点代码优化为机器码，提升性能。
	垃圾回收：通过标记-清除或引用计数的方式，自动回收不再使用的内存。
```

![CleanShot-2024_12_19_12_29_22](/Users/guakeliao/Library/Application Support/CleanShot/media/media_0b6wXC6C11/CleanShot-2024_12_19_12_29_22.png)

### 219. 列举你所了解的编程范式？

```
1. 面向过程编程（Procedural Programming）
2. 面向对象编程（Object-Oriented Programming, OOP）
3. 函数式编程（Functional Programming, FP）
4. 声明式编程（Declarative Programming）
5. 逻辑编程（Logic Programming）
6. 数据驱动编程（Data-Driven Programming）
面向切面编程（Aspect-Oriented Programming, AOP）：关注横切关注点（如日志、安全）。
命令式编程（Imperative Programming）：明确每一步如何操作。
....
```

### 220. 什么是面向切面（AOP）的编程？

```
面向切面编程是一种编程范式，旨在通过分离横切关注点（Cross-Cutting Concerns）来提升代码的模块化和可维护性。它特别适用于解决那些会散布在多个模块中的逻辑（如日志记录、安全校验、性能监控等）。
```



### 221. _JavaScript_ 中的 _const_ 数组可以进行 _push_ 操作吗？为什么？

### 222. JavaScript 中对象的属性描述符有哪些？分别有什么作用？

```
configurable
enumerable
value
writable
get
set


通过 Object.getOwnPropertyDescriptor() 获取指定属性的描述符
```



### 223. _JavaScript_ 中 _console_ 有哪些 _api_ ?

```js
1. 输出相关
	console.log()	console.info()	console.warn()	console.error()	console.debug()	
2. 分组与格式化
	console.group() 	console.groupCollapsed()	console.groupEnd()	
3. 计时
	console.time(label)	 console.timeLog(label)	console.timeEnd(label)	
4. 表格和对象
	console.table()	console.dir()	
5. 断言
	console.assert()	
6. 追踪与清除
	console.trace()	
	console.clear()	
7. 自定义样式
	使用 %c 格式化输出 console.log('%cHello, World!', 'color: blue; font-size: 20px;');
8. 计数
	console.count(label)	console.countReset(label)	
```

### 224. 简单对比一下 _Callback、Promise、Generator、Async_ 几个异步 _API_ 的优劣？

```
Promise:链式调用过长时依然可能变得难以维护
Generator :要配合第三方库（如 co）处理异步流。相较于 async/await，语法复杂。
Async/Await:必须在支持 ES2017 的环境下使用（现代环境基本都支持）.如果嵌套过深，仍可能影响代码可读性。
```

### 225. _Object.defineProperty_ 有哪几个参数？各自都有什么作用

```
三个参数:
	1. 目标对象（obj）
	2. 属性名（prop）
	3. 描述符对象（descriptor）
			控制属性的行为（包括 value、writable、configurable、enumerable，以及 get 和 set 方法）。
```

### 226. _Object.defineProperty_ 和 _ES6_ 的 _Proxy_ 有什么区别？

![CleanShot-2024_12_20_02_11_42](/Users/guakeliao/Library/Application Support/CleanShot/media/media_WYaTtze8Mc/CleanShot-2024_12_20_02_11_42.png)

### 227. _intanceof_ 操作符的实现原理及实现

 ```js
 instanceof 是 JavaScript 中用来判断一个对象是否是某个构造函数的实例。其原理基于对象的原型链。
 
 function myIntanceof(obj,construtor) {
   let objProto = Object.getPrototypeOf(obj);
   while(objProto) {
     if (objProto === construtor.prototype) return true
     objProto = Object.getPrototypeOf(objProto);
   }
   return false
 }
 ```

### 228. 强制类型转换规则？

```
转换为字符串 (String)
	String(value)
	value.toString()（如果支持 toString 方法）
转换为数字 (Number)
	Number(value)
	一元加号 +value
	parseInt() 或 parseFloat()（仅适用于字符串数字）
转换为布尔值 (Boolean)
	Boolean(value)
	双重否定 !!value
```

![CleanShot-2024_12_20_02_37_16](/Users/guakeliao/Library/Application Support/CleanShot/media/media_NwAq6QHiuT/CleanShot-2024_12_20_02_37_16.png)

![CleanShot-2024_12_20_02_38_48](/Users/guakeliao/Library/Application Support/CleanShot/media/media_1xDqfF1w9a/CleanShot-2024_12_20_02_38_48.png)

![CleanShot-2024_12_20_02_39_53](/Users/guakeliao/Library/Application Support/CleanShot/media/media_y4zfPDIr4t/CleanShot-2024_12_20_02_39_53.png)

![CleanShot-2024_12_20_02_41_22](/Users/guakeliao/Library/Application Support/CleanShot/media/media_TpgZf8wYn0/CleanShot-2024_12_20_02_41_22.png)

### 229. _Object.is_( ) 与比较操作符 “===”、“==” 的区别

```
Object.is() 精确比较，适用于需要判断“完全一致”的场景。
	特殊处理：
			NaN 被认为等同于自身。
			区分 +0 和 -0。
===（严格相等）
	特殊处理：
			NaN 不等于任何值，包括它自己。
			不区分 +0 和 -0。
==（宽松相等)
	常见隐式转换：
			字符串和数字可以相互转换："42" == 42 // true。
			布尔值会转换为数字：true == 1 // true。
			null 和 undefined 互相相等：null == undefined // true。
```



### 230. `+` 操作符什么时候用于字符串的拼接？

```
任意一侧是字符串类型.就进行字符串拼接
如果一侧是对象等非原始类型，会尝试将其转成字符串
```

### 231. _object.assign_ 和扩展运算法是深拷贝还是浅拷贝

```js
是浅拷贝。
深拷贝实现
function deepClone(obj) {
  if(obj === null || typeof obj !=='object') return obj
  let reslut = Array.isArray(obj) ? [] : {};
  for (const key in obj) {
    if(Object.hasOwnProperty(key)) {
      reslut[key] = deepClone(obj[key])
    }
  }
  return reslut
}

使用 structuredClone（推荐） Modern JavaScript 提供了原生深拷贝方法。
JSON 序列化方式
使用第三方库（如 Lodash） Lodash 的 cloneDeep 方法可以深拷贝对象。
```

### 232. _const_ 对象的属性可以修改吗

### 233. 如果 _new_ 一个箭头函数的会怎么样

```
报错： // TypeError: XXX is not a constructor

箭头函数没有 [[Construct]] 内部方法
箭头函数没有自己的 this
```

### 234. 扩展运算符的作用及使用场景

```
用于解构数组或对象，以及收集剩余参数

场景：
	数组拷贝 [...arr]
	数组合并 [...arr1, ...arr2]
	数组拆分/解构 [first, ...rest] = [1, 2, 3, 4];
	
	对象拷贝 { ...obj }
	对象合并 { ...obj1, ...obj2 }
	对象解构 { a, ...rest } = { a: 1, b: 2, c: 3 };
	
	收集剩余参数 sum(...numbers)
	展开参数列表 Math.max(...nums)
	
扩展运算符只复制源对象的可枚举属性，不包括不可枚举的属性或 Symbol。
```

### 235. _Proxy_ 可以实现什么功能？

```
1. 拦截对象属性的操作
	拦截属性的访问、赋值、删除等操作，允许你自定义这些行为。
2. 拦截方法调用
	拦截函数调用（包括普通函数和构造函数），自定义调用行为。
3. 拦截对象的默认行为
	比如拦截 in 操作符、Object.keys()、Object.getOwnPropertyDescriptors() 等。
4. 动态代理
	可以在运行时动态定义对象的行为，而不需要修改对象本身。

```

### 236. 对象与数组的解构的理解

```
1. 数组解构赋值
		基本用法	const [a, b, c] = [1, 2, 3];
		默认值	 const [x, y, z = 10] = [1, 2]; // z 没有值时使用默认值
		跳过某些值 const [first, , third] = [1, 2, 3];
		剩余元素 const [head, ...rest] = [1, 2, 3, 4];
		交换变量 [a, b] = [b, a]; // 交换
		嵌套解构 const [a, [b, c]] = [1, [2, 3]];
2. 对象解构赋值
		基本用法 const { name, age } = person;
	  重命名变量 const { name: userName, age: userAge } = person;
		默认值 const { name, gender = "Female" } = person;
		剩余属性 const { name, ...rest } = { name: "Alice", age: 25, job: "Engineer" };
		嵌套解构 const { address: { city, zip } } = person;
```



### 237. 如何提取高度嵌套的对象里的指定属性？

```js
1. 使用解构赋值提取嵌套属性
2. 使用可选链操作符 (?.)
3. 使用 Lodash 库的 _.get 函数  const city = _.get(data, "user.profile.address.city", "Unknown");
4. 使用递归函数处理动态路径
	function getNestedProperty(obj, path, defaultValue) {
 		 return path.split('.').reduce((acc, key) => acc && acc[key], obj) ?? defaultValue;
	}
```

### 238. _Unicode、UTF-8、UTF-16、UTF-32_ 的区别？

```
Unicode 是一种字符集标准，旨在为全球所有语言和符号提供统一的编码系统。
UTF-8 是 Unicode 的一种具体编码方式，用 1 到 4 个字节表示字符。
UTF-16 使用 2 或 4 个字节表示字符。
UTF-32 使用固定的 4 个字节表示所有字符。
```

![CleanShot-2024_12_23_01_38_35](/Users/guakeliao/Library/Application Support/CleanShot/media/media_Je7ol4aJui/CleanShot-2024_12_23_01_38_35.png)

### 239. 为什么函数的 _arguments_ 参数是类数组而不是数组？如何遍历类数组?

```
高效访问：arguments 主要用于函数内部快速访问传入的参数，而不需要创建完整的数组实例。
兼容历史代码：arguments 是 ES3 引入的，而数组方法（如 map、forEach 等）是在 ES5 才引入的，因此最初的设计无需支持数组方法。
动态特性：arguments 绑定的是函数调用时的参数列表，可以动态访问和修改。

如何遍历类数组 arguments？
方法 1：普通 for 循环  for (let i = 0; i < arguments.length; i++)
方法 2：for...of 循环（支持可迭代对象）  for (let value of arguments)
方法 3：将类数组转换为数组后操作   const args = Array.from(arguments); const args = [...arguments];
  const args = Array.prototype.slice.call(arguments);
```

### 240. _escape、encodeURI、encodeURIComponent_ 的区别

```
escape、encodeURI 和 encodeURIComponent 都是 JavaScript 中用于对字符串进行编码的函数
1. escape()（已废弃）
	作用
		将字符串中的非 ASCII 字符（例如：空格、中文等）转换为百分号编码的形式（如 %20）。
		对大多数 ASCII 字符不进行编码，但会编码某些特殊字符，如 @, +, / 等。
	问题
		编码不完整：不会对所有保留字符编码，如 # 不会被编码。
		已被废弃：在现代开发中不推荐使用。
2. encodeURI()
	作用
		编码 完整 URI（统一资源标识符），但不会编码 URI 中合法的特殊字符，如 :、/、?、& 和 #。
		适合用于编码整个 URI，而不是其中的组件部分。
  特点
		不会对以下字符进行编码： : / ? # & = + , @
		适合直接编码完整 URL，而不破坏 URL 结构。
3. encodeURIComponent()
	作用
		编码 URI 的组成部分（Component），包括所有非字母数字字符。
		适合对 URL 参数或片段单独编码，避免保留字符干扰 URL 结构。
	特点
		编码更彻底，会对保留字符也进行编码：: / ? # & = + , @
		通常用于 URL 查询参数的编码，以确保数据不会破坏原始 URL。
		
最佳实践
	完整 URL 编码：encodeURI()
	查询参数或片段编码：encodeURIComponent()
```

![CleanShot-2024_12_23_02_58_44](/Users/guakeliao/Library/Application Support/CleanShot/media/media_8vlE6sCEMX/CleanShot-2024_12_23_02_58_44.png)

### 241. _use strict_ 是什么意思 ? 使用它区别是什么？

```
ES5 引入的严格模式。用于更严格地执行代码规则，以提高代码的安全性和健壮性。
```

### 242. _for...in_ 和 _for...of_ 的区别

```
for...in 用于 遍历对象的可枚举属性名，包括继承自原型链的属性
for...of 用于 遍历可迭代对象（如数组、字符串、Map、Set 等）的 值
```

![CleanShot-2024_12_23_03_09_29](/Users/guakeliao/Library/Application Support/CleanShot/media/media_PKykDGHGLZ/CleanShot-2024_12_23_03_09_29.png)

### 243. _ajax、axios、fetch_ 的区别

```
AJAX 是一种在不刷新整个页面的情况下，异步地 请求和接收数据的技术。它并不指代一个具体的技术，而是指一种方法。AJAX 是基于 XMLHttpRequest 对象实现的.
Axios 是一个基于 Promise 的 JavaScript HTTP 库，它封装了 XMLHttpRequest 或 Fetch，使得发送 HTTP 请求变得更简单和易于处理。
Fetch API 是现代浏览器中提供的原生 API，用于执行网络请求，它是 XMLHttpRequest 的替代方案。
```

![CleanShot-2024_12_23_03_31_12](/Users/guakeliao/Library/Application Support/CleanShot/media/media_5YtmyuMNtv/CleanShot-2024_12_23_03_31_12.png)

### 244. 下面代码的输出是什么？（ _D_ ）

```javascript
function sayHi() {
  console.log(name);
  console.log(age);
  var name = 'Lydia';
  let age = 21;
}

sayHi();
```

- A: _Lydia_ 和 _undefined_
- B: _Lydia_ 和 _ReferenceError_
- C: _ReferenceError_ 和 _21_
- D: _undefined_ 和 _ReferenceError_

### 245. 下面代码的输出是什么？（ _C_ ）

```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}
```

- A: _0 1 2_ 和 _0 1 2_
- B: _0 1 2_ 和 _3 3 3_
- C: _3 3 3_ 和 _0 1 2_

### 246. 下面代码的输出是什么？（ _B_ ）

```javascript
const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => 2 * Math.PI * this.radius,
};

shape.diameter();
shape.perimeter();
```

- A: _20_ 和 _62.83185307179586_
- B: _20_ 和 _NaN_
- C: _20_ 和 _63_
- D: _NaN_ 和 _63_

### 247. 下面代码的输出是什么？（ _A_ ）

```
+true;
!"Lydia";
```

- A: _1_ 和 _false_
- B: _false_ 和 _NaN_
- C: _false_ 和 _false_

### 248. 哪个选项是不正确的？（ _A_ ）

```javascript
const bird = {
  size: 'small',
};

const mouse = {
  name: 'Mickey',
  small: true,
};
```

- A: _mouse.bird.size_
- B: _mouse[bird.size]_
- C: _mouse[bird["size"]]_
- D: 以上选项都对

### 249. 下面代码的输出是什么？（ _A_ ）

```javascript
let c = { greeting: 'Hey!' };
let d;

d = c;
c.greeting = 'Hello';
console.log(d.greeting);
```

- A: _Hello_
- B: _undefined_
- C: _ReferenceError_
- D: _TypeError_

### 250. 下面代码的输出是什么？（ _C_ ）

```js
let a = 3;
let b = new Number(3);
let c = 3;

console.log(a == b);
console.log(a === b);
console.log(b === c);
```

- A: _true_ _false_ _true_
- B: _false_ _false_ _true_
- C: _true_ _false_ _false_
- D: _false_ _true_ _true_

### 251. 下面代码的输出是什么？（ _D_ ）

```js
class Chameleon {
  static colorChange(newColor) {
    this.newColor = newColor;
  }
  constructor({ newColor = 'green' } = {}) {
    this.newColor = newColor;
  }
}
const freddie = new Chameleon({ newColor: 'purple' });
freddie.colorChange('orange');
```

- A: _orange_
- B: _purple_
- C: _green_
- D: _TypeError_

### 252. 下面代码的输出是什么？（ _A_ ）

```js
let greeting;
greetign = {}; // Typo!
console.log(greetign);
```

- A: _{}_
- B: _ReferenceError: greetign is not defined_
- C: _undefined_

### 253. 当我们执行以下代码时会发生什么？（ _A_ ）

```js
function bark() {
  console.log('Woof!');
}

bark.animal = 'dog';
```

- A 什么都不会发生
- B: _SyntaxError. You cannot add properties to a function this way._
- C: _undefined_
- D: _ReferenceError_

> **分析：**
>
> 因为函数也是对象！（原始类型之外的所有东西都是对象）
>
> 函数是一种特殊类型的对象，我们可以给函数添加属性，且此属性是可调用的。

### 254. 下面代码的输出是什么？（ _A_ ）

```js
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const member = new Person('Lydia', 'Hallie');
Person.getFullName = () => this.firstName + this.lastName;

console.log(member.getFullName());
```

- A: _TypeError_
- B: _SyntaxError_
- C: _Lydia Hallie_
- D: _undefined_ _undefined_

### 255. 下面代码的输出是什么？（ _A_ ）

```js
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const lydia = new Person('Lydia', 'Hallie');
const sarah = Person('Sarah', 'Smith');

console.log(lydia);
console.log(sarah);
```

- A: _Person { firstName: "Lydia", lastName: "Hallie" }_ 和 _undefined_
- B: _Person { firstName: "Lydia", lastName: "Hallie" }_ 和 _Person { firstName: "Sarah", lastName: "Smith" }_
- C: _Person { firstName: "Lydia", lastName: "Hallie" }_ 和 _{}_
- D: _Person { firstName: "Lydia", lastName: "Hallie" }_ 和 _ReferenceError_

### 256. 事件传播的三个阶段是什么？（ _D_ ）

- A: 目标 > 捕获 > 冒泡
- B: 冒泡 > 目标 > 捕获
- C: 目标 > 冒泡 > 捕获
- D: 捕获 > 目标 > 冒泡

### 259. 下面代码的输出是什么？（ _B_ ）

```js
function getPersonInfo(one, two, three) {
  console.log(one);
  console.log(two);
  console.log(three);
}

const person = 'Lydia';
const age = 21;

getPersonInfo`${person} is ${age} years old`;
```

- A: _Lydia_ _21_ _["", "is", "years old"]_
- B: _["", "is", "years old"]_ _Lydia_ _21_
- C: _Lydia_ _["", "is", "years old"]_ _21_

### 266. 下面代码的输出是什么？（ _C_ ）

```js
const obj = { 1: 'a', 2: 'b', 3: 'c' };
const set = new Set([1, 2, 3, 4, 5]);

obj.hasOwnProperty('1');
obj.hasOwnProperty(1);
set.has('1');
set.has(1);
```

- A: _false_ _true_ _false_ _true_
- B: _false_ _true_ _true_ _true_
- C: _true_ _true_ _false_ _true_
- D: _true_ _true_ _true_ _true_

### 267. 下面代码的输出是什么？（ _C_ ）

```js
const obj = { a: 'one', b: 'two', a: 'three' };
console.log(obj);
```

- A: _{ a: "one", b: "two" }_
- B: _{ b: "two", a: "three" }_
- C: _{ a: "three", b: "two" }_
- D: _SyntaxError_

### 270. 下面代码的输出是什么？（ _B_ ）

```js
const a = {};
const b = { key: 'b' };
const c = { key: 'c' };

a[b] = 123;
a[c] = 456;

console.log(a[b]);
```

- A: _123_
- B: _456_
- C: _undefined_
- D: _ReferenceError_

### 272. 单击按钮时 _event.target_ 是什么？（ _C_ ）

```html
<div onclick="console.log('first div')">
  <div onclick="console.log('second div')">
    <button onclick="console.log('button')">Click!</button>
  </div>
</div>
```

- A: _div_ 外部
- B: _div_ 内部
- C: _button_
- D: 所有嵌套元素的数组

### 275. 下面代码的输出是什么？（ _B_ ）

```js
function sayHi() {
  return (() => 0)();
}

typeof sayHi();
```

- A: _"object"_
- B: _"number"_
- C: _"function"_
- D: _"undefined"_

### 276. 下面这些值哪些是假值？（ _A_ ）

```js
0;
new Number(0);
('');
(' ');
new Boolean(false);
undefined;
```

- A: _0_ _""_ _undefined_
- B: _0_ _new Number(0)_ _""_ _new Boolean(false)_ _undefined_
- C: _0_ _""_ _new Boolean(false)_ _undefined_
- D: 所有都是假值。

### 280. 下面代码的输出是什么？（ _A_ ）

```js
(() => {
  let x, y;
  try {
    throw new Error();
  } catch (x) {
    (x = 1), (y = 2);
    console.log(x);
  }
  console.log(x);
  console.log(y);
})();
```

- A: _1_ _undefined_ _2_
- B: _undefined_ _undefined_ _undefined_
- C: _1_ _1_ _2_
- D: _1_ _undefined_ _undefined_

### 286. _document.write_ 和 _innerHTML_ 有哪些区别？

### 287. 假设有两个变量 _a_ 和 _b_，他们的值都是数字，如何在不借用第三个变量的情况下，将两个变量的值对调？

### 288. 前端为什么提倡模块化开发？

### 289. 请解释 _JSONP_ 的原理，并用代码描述其过程。

### 290. 列举几种 _JavaScript_ 中数据类型的强制转换和隐式转换。

### 291. 分析以下代码的执行结果并解释为什么。

```js
var a = { n: 1 };
var b = a;
a.x = a = { n: 2 };

console.log(a.x);
console.log(b.x);
```

### 293. 下面的代码打印什么内容？为什么？

```js
var b = 10;
(function b() {
  b = 20;
  console.log(b);
})();
```

### 294. 下面代码中，_a_ 在什么情况下会执行输出语句打印 _1_ ？

```js
var a = ?;
if(a == 1 && a == 2 && a == 3){
 	console.log(1);
}

toString valueOf 或者弄一个 Proxy 劫持 get
```

### 295. 介绍前端模块化的发展。

```
1. 早期阶段：无模块化开发
2. 第一阶段：IIFE (Immediately Invoked Function Expression)
3. 第二阶段：CommonJS（Node.js 环境）
4. 第三阶段：AMD (Asynchronous Module Definition)
5. 第四阶段：UMD (Universal Module Definition)
6. 第五阶段：ES Modules (ESM)
7. 第六阶段：现代打包工具与动态模块加载
```

![CleanShot-2024_12_23_06_54_03](/Users/guakeliao/Library/Application Support/CleanShot/media/media_v7u6KbtNPp/CleanShot-2024_12_23_06_54_03.png)

### 296. 请指出 _document.onload_ 和 document.ready 两个事件的区别

```
document.onload 是浏览器原生事件 当 HTML 文档和所有相关资源（如图片、CSS 文件和脚本）全部加载完成后触发。.
document.ready document.ready 是 jQuery 提供的事件 DOM 加载完成后即可触发，不等待图片、CSS 等外部资源加载。可以用原生 JavaScript 实现类似功能
		document.addEventListener('DOMContentLoaded', function () {
			  console.log('DOM 加载完成！');
		});
```

![CleanShot-2024_12_23_07_04_28](/Users/guakeliao/Library/Application Support/CleanShot/media/media_s8xOFUhaPD/CleanShot-2024_12_23_07_04_28.png)

### 297. 表单元素的*readonly* 和 _disabled_ 两个属性有什么区别？

### 298. 列举几种你知道的数组排序的方法。

### 299. 区分什么是“客户区坐标”、“页面坐标”、“屏幕坐标”？

### 300. 如何编写高性能的 _JavaScript_？

302  **Webpack 构建配置优化**

```
1. Webpack 构建配置优化
	代码拆分（Code Splitting）
		使用 Webpack 的 SplitChunksPlugin 对第三方依赖和业务代码进行拆分，将常用依赖（如 Vue、ECharts）单独打包，避免重复加载，提高浏览器缓存命中率。
		动态加载路由组件（import()），实现按需加载，减少初始加载包体积。
	Tree Shaking
		开启 Webpack 的 sideEffects 和 TerserPlugin，移除未使用的代码（如 Lodash 或其他工具库的冗余模块）。
	Bundle 压缩
		使用 TerserPlugin 对 JavaScript 文件进行压缩；启用 css-minimizer-webpack-plugin 对 CSS 文件进行压缩，减少资源大小。
	资源预加载和预取（Preload/Prefetch）
		配置 Webpack 的 HtmlWebpackPlugin，为关键资源添加 preload 标记，提前加载关键资源。为非关键但未来可能需要的资源配置 prefetch，优化页面流畅性。
	多线程与缓存
		使用 thread-loader 和 cache-loader 提升打包效率，减少重复编译时间。
	图片优化
		配置 image-webpack-loader 对图片资源进行无损压缩，并引入 WebP 格式，提高图片加载效率。
2. CDN 静态资源加载
	将静态资源托管到 CDN
		配置 Webpack 的 externals，将常用的第三方库（如 Vue、ECharts）排除打包，通过 CDN 加载，减小打包体积。
		使用 CDN 提供的文件版本管理功能（如哈希值命名）确保缓存有效性。
	静态资源缓存策略
		配置 HTTP 头的 Cache-Control 和 ETag，实现长效缓存策略，减少重复加载资源的网络开销。
  优化静态资源路径
		使用 CDN 的边缘节点加速，将资源分发至离用户最近的服务器，缩短网络请求延迟。
3. 其他优化措施
	Webpack 打包分析
	借助 webpack-bundle-analyzer 插件，对打包后的体积进行分析，找出体积大的模块并优化（如减少 Lodash 使用，按需引入）。
```

304 虚拟滚动

```js
//vue-virtual-scroll-list
//静态模式
  <virtual-list style="height: 360px; overflow-y: auto;" // make list scrollable
    :data-key="'uid'"
    :data-sources="items"
    :data-component="itemComponent"
  />
// 动态模式
<virtual-list
  :data-key="'id'"
  :data-sources="items"
  :keeps="30"
  :estimate-size="50"
  :data-component="DynamicItem"
  :extra-props="{ dynamicHeights }"
/>
	借助 Vue 的生命周期钩子和 ResizeObserver 实现动态高度检测
  mounted() {
    // 监听 DOM 高度变化
    this.observeHeight();
  },
  methods: {
    observeHeight() {
      const resizeObserver = new ResizeObserver(() => {
        const height = this.$refs.item.offsetHeight;
        if (height !== this.computedHeight) {
          this.computedHeight = height;
          this.dynamicHeights[this.id] = height; // 更新高度映射表
          this.$emit('updateDynamicHeight', { id: this.id, height });
        }
      });
      resizeObserver.observe(this.$refs.item);
    },
```

305 **基于 JSON 的低代码解析组件**

```js
目标：通过 JSON 配置文件动态生成页面，减少重复代码，提高开发效率。
1.组件结构设计
  定义核心组件，用于解析 JSON 配置并生成页面：
    FormRenderer：渲染动态表单。
    TableRenderer：渲染动态表格。
    ActionRenderer：渲染操作按钮。
  提供全局注册入口，支持按需引入和动态扩展。
2.关键功能实现
(1) JSON 配置驱动渲染
  根据业务需求定义一套标准的 JSON 配置格式，用于描述页面布局和交互逻辑
  {
    "type": "form",
    "fields": [
      { "label": "用户名", "key": "username", "type": "input", "required": true },
      { "label": "年龄", "key": "age", "type": "number", "required": false },
      { "label": "性别", "key": "gender", "type": "select", "options": ["男", "女"] }
    ],
    "actions": [
      { "type": "submit", "label": "提交", "action": "submitForm" },
      { "type": "reset", "label": "重置", "action": "resetForm" }
    ]
  }
(2) 动态渲染引擎
	在 FormRenderer 中，解析 JSON 配置并动态生成表单：
    <template>
      <el-form :model="formData" :rules="formRules">
        <el-form-item
          v-for="field in fields"
          :key="field.key"
          :label="field.label"
          :prop="field.key"
        >
          <component
            :is="getComponentType(field.type)"
            v-model="formData[field.key]"
            v-bind="field.options"
          />
        </el-form-item>
        <el-button
          v-for="action in actions"
          :key="action.label"
          @click="handleAction(action)"
        >
          {{ action.label }}
        </el-button>
      </el-form>
    </template>

    <script>
    export default {
      props: ['config'],
      data() {
        return {
          formData: {}, // 动态生成的表单数据
          formRules: {}, // 动态生成的表单验证规则
        };
      },
      computed: {
        fields() {
          return this.config.fields || [];
        },
        actions() {
          return this.config.actions || [];
        },
      },
      methods: {
        getComponentType(type) {
          const map = { input: 'el-input', number: 'el-input-number', select: 'el-select' };
          return map[type] || 'el-input';
        },
        handleAction(action) {
          this.$emit(action.action, this.formData); // 触发对应的操作
        },
      },
    };
    </script>
(3) 扩展与插件机制
扩展逻辑：支持开发者通过插件注入新的组件类型和事件逻辑。例如，自定义 date 类型组件：
Vue.component('el-date-picker', {
  props: ['value'],
  template: `<input type="date" :value="value" @input="$emit('input', $event.target.value)" />`
});


```

