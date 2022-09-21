import { Request, Response } from "express";
import { join, resolve } from "path";


export default function (req: Request, res: Response) {
  try {
    const path =resolve(join(__dirname, '../public/index.html')) ;

    res.sendFile(path);
  } catch (error) {
    return res.status(500).json({ message: 'Something went wrong' })
  }
} 