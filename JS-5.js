function partial(func, ...argsPartial) {
    return function(...args) {
        return func.apply(this, argsPartial.concat(args)) 
    }
}
  