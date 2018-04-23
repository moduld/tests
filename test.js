function verify(text) {
  let splitted = text.split('');
  let foundArray = [];
  for (let i = 0; i < splitted.length; i++) {
    if(splitted[i] === "(" || splitted[i] === ")" || splitted[i] === "[" || splitted[i] === "]" || splitted[i] === "<" || splitted[i] === ">") {
      foundArray.push(splitted[i])
    }
  }
  if (!foundArray.length) {
    return true;
  }
  if (!foundArray.length % 2) {
    return false;
  }
  let recursWork = false;
  recurs();
  function recurs() {
    recursWork = false;
    for (let i = 0; i < foundArray.length; i++) {
      if (foundArray[i] + foundArray[i + 1] === '()' || foundArray[i] + foundArray[i + 1] === '[]' || foundArray[i] + foundArray[i + 1] === '<>') {
        foundArray[i] = null;
        foundArray[i + 1] = null;
        recursWork = true
      }
    }
    foundArray = foundArray.filter((item) => {
      return item !== null;
    });
    if (recursWork) {
      recurs();
    }
  }
  return foundArray.length === 0;
}

// verify("---(++++)----") -> 1
// verify("") -> 1
// verify("before ( middle []) after ") -> 1
// verify(") (") -> 0
// verify("<(   >)") -> 0
// verify("(  [  <>  ()  ]  <>  )") -> 1
// verify("   (      [)") -> 0
