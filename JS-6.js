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