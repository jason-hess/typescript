class IndexableEx {
  [index: number]: string;
}

let dictionary = new IndexableEx();
dictionary[10] = "10";
console.log(dictionary[10]);
