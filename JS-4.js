function fmap(a, gen) {
   
    return function(...args) {
       let genFunc = gen.bind(this, ...args);
       
       return a(genFunc())
    }
}