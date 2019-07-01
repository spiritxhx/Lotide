const flatten = array =>{
  let output=[];
  array.forEach(ele=>{
    if (Array.isArray(ele)){
      output.push(...flatten(ele));
    } else {
      output.push(ele);
    }
  });
  return output;
}

module.exports = flatten;