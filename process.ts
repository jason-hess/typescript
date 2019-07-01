function doSomething(aString: string): number {
  const length = aString.replace("1", "").length;
  return length;
}

let lengthOfDoSomething = doSomething("10");

console.log(lengthOfDoSomething);
