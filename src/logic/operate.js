const Big = require('big.js');

const calc = (() => {
  const operate = (numberOne, numberTwo, operation) => {
    let total;
    const first = Big(numberOne);
    const second = !numberTwo ? 0 : Big(numberTwo);

    if (operation === '+') {
      total = first.plus(second);
    } else if (operation === '-') {
      total = first.minus(second);
    } else if (operation === 'X') {
      total = first.times(second);
    } else if (operation === '/') {
      total = first.div(second);
    } else if (operation === '%' && !numberTwo) {
      total = first.div(100);
    } else if (operation === '%' && numberTwo !== null) {
      total = (first.div(100)).times(second);
    }
    const result = parseFloat(total.toExponential()).toString();
    return result;
  };
  return { operate };
})();

export default calc;
