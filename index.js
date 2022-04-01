class Formatter {
  static capitalize(str){
    let newStr = str.charAt(0).toUpperCase()+ str.slice(1);
    return newStr
  }
  static sanitize(str){
    let sanitized = str.replace(/[^a-z0-9 '-]/gi, '');
    return sanitized
  }
  static sanitize(str){
    let sanitized = str.replace(/[^a-z0-9 '-]/gi, '');
    return sanitized
  }
    static titleize(str){
      let excludeWords = ['a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from', 'the'];
      let strArr = str.split(' ');
      let newArr = [];
      for (let i = 0; i < strArr.length; i++){
        if (strArr[i] == strArr[0]){
          newArr.push(strArr[i].charAt(0).toUpperCase() + strArr[i].substring(1).toLowerCase())
        } else if
          (excludeWords.includes(strArr[i])){
          newArr.push(strArr[i]);
        } else {
          newArr.push(strArr[i].charAt(0).toUpperCase() + strArr[i].substring(1).toLowerCase())
        }
      }
          return newArr.join(' ');
}
}

