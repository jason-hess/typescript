let theList2: number[] = [1, 2, 3]; // or: let anotherList: Array<number> = [1, 2, 3];
// because arrays are JavaScript arrays, you can add elements to them and create holes in them
let hole2: number = theList2[99]; // sets `hole` to undefined

console.log(hole2);
