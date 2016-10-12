/*
 * @Author: abnercrack
 * @Date:   2016-10-12 20:35:54
 * @Last Modified 2016-10-12
 * @Last Modified time: 2016-10-12 20:37:39
 */

'use strict';

function uuid() {
    /*jshint bitwise:false */
    var i, random;
    var uuid = '';

    for (i = 0; i < 32; i++) {
        random = Math.random() * 16 | 0;
        if (i === 8 || i === 12 || i === 16 || i === 20) {
            uuid += '-';
        }
        uuid += (i === 12 ? 4 : (i === 16 ? (random & 3 | 8) : random))
            .toString(16);
    }

    return uuid;
}
module.exports = uuid;
