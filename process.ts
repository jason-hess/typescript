let aNumber = 10;

function addOne(aNumber: number): number {
  return aNumber + 1;
}

console.log(addOne(aNumber));

type numberMapEntry = [string, number];
let one: numberMapEntry = ["one", 1];
let two: numberMapEntry = ["two", 2];
let numberMap: numberMapEntry[] = [one, two, ["three", 3], ["four", 4]];

console.log(one[0]);
console.log(two[1]);

enum CarMake {
  Kia,
  Toyota
}

let aCarMake = CarMake.Kia;
if (aCarMake == CarMake.Kia) {
  console.log("KIA!");
}
switch (aCarMake) {
  case CarMake.Kia:
    console.log("KIA");
    break;

  default:
    break;
}

function aVoidFunction(): void {
  let aNumber: unknown = 10;
  let aString = aNumber as any;
}
