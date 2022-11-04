"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.homeRouter = void 0;
const express_1 = require("express");
exports.homeRouter = (0, express_1.Router)();
exports.homeRouter
    .get('/', (req, res) => {
    res.render('home/home');
});
//# sourceMappingURL=home.js.map