export const add = (a: number, b: number) => a + b;
export const multiply = (a: number, b: number) => {
  if (a === undefined || b === undefined) {
    throw new Error('Input cannot be undefined');
  }
  return a * b; 
};