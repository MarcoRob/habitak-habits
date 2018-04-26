"use strict"

export const ColorModel = {
    orange: {
        value: "orange",
        minRange: 0,
        maxRange: 10
    },
    red: {
        value: "red",
        minRange: -1*Number.MAX_SAFE_INTEGER,
        maxRange: 0
    },
    yellow: {
        value: "yellow",
        minRange: 10,
        maxRange: 40
    },
    blue: {
        value: "blue",
        minRange: 50,
        maxRange: Number.MAX_SAFE_INTEGER
    },
    green: {
        value: "green",
        minRange: 40,
        maxRange: 50
    }
}

export const colorList = ["red", "yellow", "blue", "green", "orange"];

export const colorDefault = ColorModel.orange.value;