import { NextFunction, Request, Response } from "express";
import { compareToken } from '../utils/token';

const EXCLUDE_PATH = [
  '/api/v1/auth/register',
  '/api/v1/auth/login',
]


export default async function auth(req: Request, res: Response, next: NextFunction) {
  try {

    if(EXCLUDE_PATH.some(url=>url ==req.url)){
      return next();
    }

    const token = req.headers.authorization?.split(' ')[1] as string;

    if (await compareToken(token)) {
      return next();
    } else {
      return res.status(401).json({ message: 'unauthenticated user' })
    }
  } catch (e) {
    return res.status(500).json({ message: 'Something went wrong' });
  }
}