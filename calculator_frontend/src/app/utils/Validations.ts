export const ifCorrectText = (text: string) => {
  if (text.length > 0) {
    if (Number(text) > 0) {
      return true;
    }
  }
  return false;
}

export const valid =(text : string)=>{
  if (text.length > 0) {
    if (Number(text) > 0) {
      return true;
    }
  }
  return false;
}