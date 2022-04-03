function sequence(start = 0, step = 1) {
    let startValue = start - step;
    return function() {
       startValue += step;
       return startValue;
    }
  }