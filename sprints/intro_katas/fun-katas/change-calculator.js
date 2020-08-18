

// Please do not change the name of this function
function changeCalculator (num) {
  let result = {};
  if (num >= 50) {
    result['50'] = Math.floor(num / 50);
    num = num - 50 * Math.floor(num / 50);
  }
  if (num >= 20) {
    result['20'] = Math.floor(num / 20);
    num = num - 20 * Math.floor(num / 20);
  }
  if (num >= 10) {
    result['10'] = Math.floor(num / 10);
    num = num - 10 * Math.floor(num / 10);
  }
  if (num >= 5) {
    result['5'] = Math.floor(num / 5);
    num = num - 5 * Math.floor(num / 5);
  }
  if (num >= 2) {
    result['2'] = Math.floor(num / 2);
    num = num - 2 * Math.floor(num / 2);
  }
  if (num >= 1) {
    result['1'] = +num;
  }
  return result;
  // Your code here
};



module.exports = changeCalculator;
