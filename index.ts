import express from "express";
import 'express-async-errors';
import methodOverride from "method-override";
import {static as eStatic, urlencoded} from "express";
import {engine} from "express-handlebars";
import { homeRouter } from "./routers/home";
import { movieRouter } from "./routers/movie";
import { favouriteMoviesRouter } from "./routers/favourite-movies";
import './utils/db';
import { handleError } from "./utils/errors";


const app = express();

app.use(methodOverride('_method'));
app.use(urlencoded({ // to jest do korzystania z formularzy
    extended: true,
}));
app.use(eStatic('public'));
app.engine('.hbs', engine({
    extname: '.hbs',
    // helpers: ????,
}));
app.set('view engine', '.hbs');

// TUTAJ SA SCIEZKI
app.use('/', homeRouter);
app.use('/movie', movieRouter);
app.use('/favourite-movies', favouriteMoviesRouter);

// NA KONIEC BLEDY
app.use(handleError);


// app.use(handleError);

app.listen(3000, 'localhost', () => {
    console.log('Listening oh http://localhost:3000')
});

