// Please do not change the name of this function
function counterSpy (names) {
  let arr = [];
  for (let i = 0; i < names.length; i++) {
    if (/\w+(s|p|y)\w+/.test(names[i]) === false) {
      arr.push(names[i]);
    }
  } return arr;
}
console.log(counterSpy([]));
module.exports = counterSpy;
