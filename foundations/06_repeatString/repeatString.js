const repeatString = function (text, num) {
  if (num < 0) {
    return "ERROR";
  } else {
    let result = "";
    for (i = 0; i < num; i++) {
      result += text;
    }
    return result;
  }
};
// Do not edit below this line
module.exports = repeatString;
