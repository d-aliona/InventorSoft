function pluck(objects, fieldName) {
    let rezultArray = [];
    
    for (let obj of objects) {
       rezultArray.push(obj[fieldName])
    } 
    return rezultArray; 
}
  