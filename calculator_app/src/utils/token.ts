import jwt from 'jsonwebtoken';

export const generateToken = async (data: any) => {
  return jwt.sign(data, process.env.JWT_PASSWORD as string, {
    expiresIn : `24h`
  })
}

export const compareToken = async (token: string) => {
  return new Promise((resolve, _) => {
    jwt.verify(token, process.env.JWT_PASSWORD as string, (err) => {
      if(!err){
        resolve(true)
      }
      resolve(false)
    })
  })
}

