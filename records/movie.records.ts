import { ValidationError } from "../utils/errors";
import { v4 as uuid } from "uuid";
import { pool } from "../utils/db";
import { FieldPacket } from "mysql2";

type MovieRecordResults = [MovieRecord[], FieldPacket[]];

export class MovieRecord {
    public id: string;
    public title: string;
    public director: string;
    public score: number;

    constructor(obj: MovieRecord) {
        const { id, title, director, score } = obj;

        if (title.length < 3 || title.length > 256) {
            throw new ValidationError(
                `The movie's title must have min 3 letter und max 256 letter.`
            );
        }

        this.id = uuid();
        this.title = title;
        this.director = director;
        this.score = score;
    }

    async insert(): Promise<any> {
        await pool.execute(
            "INSERT INTO `my_favourite_movies`(`id`, `title`, `director`, `score`) VALUES (:id, :title, :director, :score)",
            {
                id: this.id,
                title: this.title,
                director: this.director,
                score: this.score,
            }
        );

        return this.id;
    }

    static async topList(topCount: number): Promise<MovieRecord[]> {
        // lista of movies
        const [results] = (await pool.execute(
            "SELECT * FROM `my_favourite_movies` ORDER BY `score` DESC LIMIT :topCount",
            {
                topCount,
            }
        )) as MovieRecordResults;

        return results.map((obj) => new MovieRecord(obj));
    }

    static async isTitleTaken(title: string): Promise<boolean> {
        const [results] = (await pool.execute(
            "SELECT * FROM `my_favourite_movies` WHERE `title` = :title",
            {
                title: title,
            }
        )) as MovieRecordResults;

        return results.length > 0;
    }
}
