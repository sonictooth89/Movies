import { NextFunction, Request, Response } from "express";
import { resolve } from "path";

export class ValidationError extends Error {};

export const handleError = (err: Error, rew: Request, res: Response, next: NextFunction): void => {
    console.error(err);

    res
        .status(err instanceof ValidationError ? 400 : 500)
        .render('error', {
            message: err instanceof ValidationError ? err.message : 'Sorry, please try again leter...',
        })
}