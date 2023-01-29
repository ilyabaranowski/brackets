module.exports = function check(str, bracketsConfig) {
  const arr = bracketsConfig.flat();
  const obj = {};
  const stack = [];

  for (x = 0; x < arr.length; x+=2) {
    obj[arr[x+1]] = arr [x]
  }

  for (y = 0; y < str.length; y++) {
    const top = stack[stack.length - 1];
    if (obj[str[y]] === top && stack.length >= 1) {
      stack.pop();
    }

    else if (Object.values(obj).includes(str[y])) {
      stack.push(str[y])
    }

    else {return false};
  }

  return  stack.length === 0;
}
