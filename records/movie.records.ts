import { ValidationError } from "../utils/errors";
import {v4 as uuid} from 'uuid';
import { pool } from "../utils/db";
import {FieldPacket} from 'mysql2';

type MovieRecordResults = [MovieRecord[], FieldPacket[]]


export class MovieRecord {
    public id?: string;
    /**
     * Name is always uniqe. Example ````console.log()````
     */
    public readonly title: string;
    public readonly director: string;
    public readonly score: number;

    constructor(obj: Omit<MovieRecord, 'insert' | 'update'>) {
        const {id, title, director, score} = obj;

        // const stats = [score];

        // const sum = stats.reduce((prev, curr) => prev + curr, 0);

        // for (const stat of stats) {
        //     if (stat < 1) {
        //         throw new ValidationError('The minimum score must be 1.')
        //     }
        // }

        // if (sum > 10) {
        //     throw new ValidationError('The maximum score must be 10.');
        // };

        if (title.length < 3 || title.length > 256) {
            throw new ValidationError (`The movie's title must have min 3 letter und max 256 letter.`)
        }

        this.id = id ?? uuid();
        this.title = title;
        this.director = director;
        this.score = score;
    }

    async insert (): Promise<any> {
       await pool.execute("INSERT INTO `my_favourite_movies`(`id`, `title`, `director`, `score`) VALUES (:id, :title, :director, :score)", {
        id: this.id,
        title: this.title,
        director: this.director,
        score: this.score
       });
        
       return this.id;
    };

    // async update (id: string): Promise<void> {
    //     await pool.execute("UPDATE `my_favourite_movies` WHERE ìd` = :id SET `score`= :score", {
    //         score: this.score,
    //     })
    //};

    // static async getOne (id: string): Promise<MovieRecord | null> { // pobiera jednego wojownika
    //     const [results] = await pool.execute("SELECT * FROM `my_favourite_movies` WHERE `id` = :id", {
    //         id: id,
    //     }) as MovieRecordResults;

    //     return results.length === 0 ? null : results[0];
    // };

    static async topList (topCount: number): Promise<MovieRecord[]> { // lista wszystkich filmow
        const [results] = await pool.execute("SELECT * FROM `my_favourite_movies` ORDER BY `score` DESC LIMIT :topCount", {
            topCount,
        }) as MovieRecordResults;

        return results.map(obj => new MovieRecord(obj));
    };

    // static async listTop (topCount: number): Promise<WarriorRecord[]> { // topowi zawodnicy
    //     const [results] = await pool.execute("SELECT * FROM `warriors` ORDER BY `wins` DESC LIMIT: topCount", {
    //         topCount,
    //     }) as WarriorRecordResults;

        // return results.map(obj => new WarriorRecord(obj));
    // };

    static async isTitleTaken(title: string): Promise<boolean> {
        const [results] = await pool.execute("SELECT * FROM `my_favourite_movies` WHERE `title` = :title", {
            title: title,
        }) as MovieRecordResults;

        return results.length > 0;
    };
}