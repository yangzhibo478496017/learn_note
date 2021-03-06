const {log} = console;
log(...[1, 2, 3])

function f(v, w, x, y, z) {
    log(v, w, x, y, z)
}

const args = [0, 1, 4];
f(-1, ...args, 2, ...[3]);

let x = 1;
x = -2;
log(...(x > 0 ? ['a'] : []))

// 只有函数调用时，扩展运算符才可以放在圆括号中，否则会报错
// (...[1, 2])
// log((...[1, 2]))
log(...[1, 2])

log(Math.max(...[14, 3, 77]))
log(Math.max(14, 3, 77))

let arr1 = [0, 1, 2];
let arr2 = [3, 4, 5];
arr1.push(...arr2)
log(arr1)

let date = new Date(...[2015, 1, 1])
log(date)

log(new Date())

const a1 = [1, 2];
const a2 = a1;
a2[0] = 2;
log(a1)
// 上面代码中，a2并不是a1的克隆，而是指向同一份数据的另一个指针。修改a2，会直接导致a1的变化

const a3 = a1.concat();
a3[0] = 3;
log(a1, a3)

//合并数组
log([...a1, ...a3])

const b1 = [{foo: 1}]
const b2 = [{bar: 2}]
const b3 = b1.concat(b2);
const b4 = [...b1, ...b2];
log(b3[0] === b1[0])
log(b4[0] === b1[0])

const [first, ...rest] = [1, 2, 3, 4, 5];
log(first, rest)

const [first1, ...rest1] = [];
log(first1, rest1)

const [first2, ...rest2] = ["foo"];
log(first2, rest2)

// 如果将扩展运算符用于数组赋值，只能放在参数的最后一位，否则会报错。
const [...butLast, last] = [1, 2, 3, 4, 5];
// log(butLast)








