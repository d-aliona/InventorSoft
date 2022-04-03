function take(fn, count) {
    let rezultArray = [];
    for (let i = 0; i < count; i++) {
      rezultArray.push(fn());
    }
    return rezultArray;
 }