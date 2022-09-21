import { Request, Response } from "express";
import Figure from "../model/Figure";

export const getFigures = async (req: Request, res: Response) => {
  try {
    const figures = await Figure.find({}, { __v: 0 });
    return await res.status(200)
      .json(figures);

  } catch (e) {
    return res.status(500)
      .json({ message: 'Something went wrong' });
  }
}