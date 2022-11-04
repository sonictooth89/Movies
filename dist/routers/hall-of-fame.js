"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hallOfFameRouter = void 0;
const express_1 = require("express");
exports.hallOfFameRouter = (0, express_1.Router)();
exports.hallOfFameRouter
    .get('/', (req, res) => {
    res.render('hall-of-fame/list');
});
//# sourceMappingURL=hall-of-fame.js.map