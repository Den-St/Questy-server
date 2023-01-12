"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compareArrays = void 0;
const compareArrays = (arr1, arr2) => {
    if (arr1.length !== arr2.length)
        return false;
    for (let i = 0; i < arr1.length; i++) {
        if (!arr2.includes(arr1[i]))
            return false;
    }
    return true;
};
exports.compareArrays = compareArrays;
//# sourceMappingURL=compareArrays.js.map