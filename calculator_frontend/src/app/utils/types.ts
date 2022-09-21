
export interface Figure {
  _id: string;
  label: string;
}


export interface Unity {
  _id: string;
  value: string;
  label: string;
}

export interface HistoryCalculator {
  id: number,
  typeCalcul: string;
  figure: string;
  value: number,
  unity: string
}


export interface AuthResult {
  _id : string;
  username: string;
  email: string ;
  token: string;
  expiresIn : number 
}

export interface User {
  username: string;
  email: string ;
  password: string;
}

