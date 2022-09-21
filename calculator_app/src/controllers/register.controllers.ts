import { Request, Response } from "express";
import User from "../model/User";
import validator from "validator";
import { comparePassword, hashPassword } from "../utils/managePassword";
import { generateToken } from "../utils/token";



export const register = async (req: Request, res: Response) => {

  try {

    if (validator.isEmail(req.body.email) && !validator.isEmpty(req.body.username) && !validator.isEmpty(req.body.password)) {
      const ifExist = await User.findOne({ username: req.body.username });

      if (!ifExist) {
        const user = await User.create({
          username: req.body.username,
          email: req.body.email,
          password: await hashPassword(req.body.password)
        });

        return await res.status(201).json({ username: user.username, email: user.email, id: user._id });
      } else {
        return res.status(409).json({ message: 'User already exist!' })
      }
    }
    throw new Error();

  } catch (e) {
    return res.status(500).json({ message: 'Something went wrong' });
  }
}





export const login = async (req: Request, res: Response) => {
  try {
    const user = await User.findOne({ username: req.body.username }, { __v: 0 });
    if (user) {
      if (await comparePassword(req.body.password, user.password as string)) {
        let { password, ...rest } = user.toJSON();
        const userLogin = {
          ...rest,
          token: await generateToken(rest),
          expiresIn: 24 * 60 * 60
        }

        return res.status(200).json(userLogin)
      }
      throw new Error();
    }
    return res.status(404).json({ message: 'user not exist' })
  } catch (e) {
    return res.status(500).json({ message: 'Something went wrong' });
  }

}




/**
 * In this disconnection function,
 *  we can create a token table in order 
 * to save the disconnected user tokens
 * 
 */
export const logout = async () => {

}