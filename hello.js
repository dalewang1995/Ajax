'use strict';

var a = ['A', 'B', 'C'];
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
a.forEach(function (element, index, array) {
    // element: 指向当前元素的值
    // index: 指向当前索引
    // array: 指向Array对象本身
    console.log(element);
});
arr.reduce(function (x, y) {
    return x + y;
}); // 25


var
    r,
    arr = ['apple', 'strawberry', 'banana', 'pear', 'apple', 'orange', 'orange', 'strawberry'];
r = arr.filter(function (element, index, self) {
	console.log(self.indexOf(element));
    return self.indexOf(element) === index;
});

r.forEach(function (element, index, r) {
	console.log(element);
})