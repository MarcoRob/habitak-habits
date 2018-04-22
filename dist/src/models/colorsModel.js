"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var ColorModel = exports.ColorModel = {
    orange: {
        value: "orange darken-1",
        minRange: 0,
        maxRange: 10
    },
    red: {
        value: "red darken-1",
        minRange: -1 * Number.MAX_SAFE_INTEGER,
        maxRange: 0
    },
    yellow: {
        value: "yellow darken-2",
        minRange: 10,
        maxRange: 40
    },
    blue: {
        value: "blue darken-1",
        minRange: 50,
        maxRange: Number.MAX_SAFE_INTEGER
    },
    green: {
        value: "light-green  darken-1",
        minRange: 40,
        maxRange: 50
    }
};

var colList = [];

for (var color in ColorModel) {
    colList.push(color.value);
}

var colorList = exports.colorList = colList;

var colorDefault = exports.colorDefault = ColorModel.orange.value;