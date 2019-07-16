function somefunction() {
  for (var index = 0; index < 10; index++) {
    console.log(index);
    for (var index = 0; index < 10; index++) {
      console.log("  " + index);
    }
  }
}
somefunction();
