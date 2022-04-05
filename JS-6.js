function partialAny(fn, ...args) {
    let param = [...arguments].slice(1);
    
    return function (...argsFn) {
        let innerParams = [...arguments];
        let j = 0; 
        for (let i = 0; i < param.length; i++){ 
            if (param[i] === undefined) {
                param[i] = innerParams[j];
                j++;
            }
        }
        if (innerParams.length > j) {
            param = param.concat(innerParams.slice(j))
        }
        return fn.apply(this, param);
    }
}

// another variants how to silve this task 
//1
 function partialAny(func, ...rest) {
  return function (...rest2) {
     let copy = [...rest]
     rest2.forEach((el) => {
       let undEl = copy.findIndex((el) => el === undefined)
      if (undEl !== -1) {
         copy[undEl] = el
      } else {
         copy.push(el)
       }
     })
     console.log(copy)
     return func.call(this, ...copy)
   }
 }

//2
function partialAny(fn, ...args) {
    
    return (...args2) => {

        return fn(...args.map(arg => arg === undefined ? args2.shift() : arg), ...args2)
    }
}
