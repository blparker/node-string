
module.exports = replace = function(str, data) {
  return parse(str, data);
};

function parse(str, data) {
  if(typeof data === 'string') {
    return str.replace(/\$\{.+\}/, data);
  }

  var toReplace = getReplacements([], '', data);

  for(var i = 0; i < toReplace.length; i++) {
    str = str.replace('${'+ toReplace[i][0] +'}', toReplace[i][1]);
  }

  return str;
}

function getReplacements(arr, str, data) {
  for(var prop in data) {
    if(typeof data[prop] === 'object') {
      if(str.length === 0) str = prop;
      else str = str + '.' + prop;
      getReplacements(arr, str, data[prop]);
    }
    else {
      if(str.length === 0) arr.push([ prop, data[prop] ]);
      else arr.push([ str + '.' + prop, data[prop] ]);
    }
  }
  return arr;
}

