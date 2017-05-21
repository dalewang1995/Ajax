/**
 * Created by wyj on 2017/5/20.
 */
'use strict';
var map = new Map();
map.set('first', 'hello');
map.set('second', 'world');

for (let [key, value] of map) {
    document.write(key + " is " + value);
    document.write("111");
}
document.write('\u{1F680}' === '\uD83D\uDE80');