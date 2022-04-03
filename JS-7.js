function bind(fn, context) {
    let bindArgs = [...arguments].slice(2);
    
    return function() {
     
       let fnArgs = [...arguments];
     
       return fn.apply(context, bindArgs.concat(fnArgs));
    }
}