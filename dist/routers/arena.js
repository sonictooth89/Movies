"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arenaRouter = void 0;
const express_1 = require("express");
exports.arenaRouter = (0, express_1.Router)();
exports.arenaRouter
    .get('/fight-form', (req, res) => {
    res.render('arena/fight-form');
})
    .post('/fight', (req, res) => {
    res.render('arena/fight');
}); // POST /arena/fight
//# sourceMappingURL=arena.js.map