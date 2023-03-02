"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharactersCollection = void 0;
const Sorter_1 = require("./Sorter");
class CharactersCollection extends Sorter_1.Sorter {
    constructor(str) {
        super();
        this.data = str;
        this.length = str.length;
    }
    compare(i, j) {
        return this.data[i].toUpperCase() > this.data[j].toUpperCase();
    }
    swap(i, j) {
        let wordArr = this.data.split('');
        let temp = wordArr[i];
        wordArr[i] = wordArr[j];
        wordArr[j] = temp;
        this.data = wordArr.join('');
    }
}
exports.CharactersCollection = CharactersCollection;
