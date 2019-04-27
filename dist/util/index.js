"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var getRandomInt = exports.getRandomInt = function getRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
};

var getRandomBoolean = exports.getRandomBoolean = function getRandomBoolean() {
    return Math.random() < 0.5;
};