"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("express-async-errors");
const method_override_1 = __importDefault(require("method-override"));
const express_2 = require("express");
const express_handlebars_1 = require("express-handlebars");
const home_1 = require("./routers/home");
const warrior_1 = require("./routers/warrior");
const arena_1 = require("./routers/arena");
const hall_of_fame_1 = require("./routers/hall-of-fame");
const app = (0, express_1.default)();
app.use((0, method_override_1.default)('_method'));
app.use((0, express_2.urlencoded)({
    extended: true,
}));
app.use((0, express_2.static)('public'));
app.engine('.hbs', (0, express_handlebars_1.engine)({
    extname: '.hbs',
    // helpers: ????,
}));
app.set('view engine', '.hbs');
// TUTAJ SA SCIEZKI
app.use('/', home_1.homeRouter);
app.use('/warrior', warrior_1.warriorRouter);
app.use('/arena', arena_1.arenaRouter);
app.use('/hall-of-fame', hall_of_fame_1.hallOfFameRouter);
// app.use(handleError);
app.listen(3000, 'localhost', () => {
    console.log('Listening oh http://localhost:3000');
});
//# sourceMappingURL=index.js.map