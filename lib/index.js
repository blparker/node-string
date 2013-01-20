
module.exports = replace = function(str, data) {
  parse(str, data);
};

function parse(str, data) {
  var currentState = 0
    , v = ''
    , p = [];

  for(var i = 0; i < str.length; i++) {
    var ch = str[i];

    switch(currentState) {
      case 0:
        if(ch === '$') currentState = 1;
        break;
      case 1:
        if(ch === '{') currentState = 2;
        else currentState = 0;
        break;
      case 2:
        if(ch === '}') currentState = 0;
        else {
          currentState = 3;
          v += ch;
        }
        break;
      case 3:
        if(ch === '}') currentState = 4;
        else v += ch;
        break;
      case 4:
        currentState = 0;
        break;
    }
  }

  if(currentState === 4) {  // Ended with a variable ( '}' )
    p.push(v);
  }

  var ret = doReplace(str, p, data);
  console.log("### ", ret);

  //console.log("#### ", currentState);
  //console.log(str, data);
}

function doReplace(str, p, data) {
  if(typeof data === 'string') {
    return str.replace('${'+ p[0] +'}', data);
  }
  
  for(var prop in data) {
    console.log("### ", prop, data[prop]);
  }
}

replace('hello ${test}', { test : 'world' });

