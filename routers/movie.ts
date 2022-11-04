import { Router } from "express";
import { MovieRecord } from "../records/movie.records";
import { ValidationError } from "../utils/errors";

export const movieRouter = Router();


movieRouter

    .get('/add-form', (req, res) => {
        res.render('movie/add-form');
    })

    .post('/', async (req, res) => {
        if (await MovieRecord.isTitleTaken(req.body.title) ) {
            throw new ValidationError(`The name ${req.body.title} is alredy taken. Choose another one.`);
        }

        const movie = new MovieRecord({
            ...req.body,
            score: Number(req.body.score),
        });
        await movie.insert();
        
        res.render('movie/movie-added', {
            id: movie.id,
            name: movie.title,
        });
    });