import { Router } from "express";
import { MovieRecord } from "../records/movie.records";

export const favouriteMoviesRouter = Router();


favouriteMoviesRouter

    .get('/', async (req, res): Promise<void> => {
        const topMovies = await (await MovieRecord.topList(3))
        .map((movie, index) => {
            return {
                place: index + 1,
                movie,
            }
        });

        res.render('favourite-movies/list', {
            movies: topMovies,
        });
    });