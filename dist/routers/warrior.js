"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.warriorRouter = void 0;
const express_1 = require("express");
exports.warriorRouter = (0, express_1.Router)();
exports.warriorRouter
    .get('/add-form', (req, res) => {
    res.render('warrior/add-form');
})
    .post('/', (req, res) => {
    res.render('warrior/warrior-added');
});
//# sourceMappingURL=warrior.js.map