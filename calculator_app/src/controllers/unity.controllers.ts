import { Request, Response } from "express";
import Unity from "../model/Unity";

export const getUnity = async (req: Request, res: Response) => {
  try {
    const unities = await Unity.find({}, { __v: 0});
    return await res.status(200)
      .json(unities);

  } catch (e) {
    return res.status(500)
      .json({ message: 'Something went wrong' });
  }
}