export const parser = str => {
    const obj = {};
    str.replace(/([^=&]+)=([^=&]+)/g, function() {
      obj[arguments[1]] = arguments[2];
    });
    return obj;
  };
  // name=luffy&age=90&time=1993   -> {name:luffy,age:90,time:1993}
  //have a test