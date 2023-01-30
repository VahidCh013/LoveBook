export const addMinutes=(date:Date, minutes:number):Date=> {
    const dateCopy = new Date(date);
    dateCopy.setMinutes(date.getMinutes() + minutes);
  
    return dateCopy;
  }