import Big from 'big';

const calc = (() => {
  const operate = (numberOne, numberTwo, operation) => {
    let total;
    const first = Big(numberOne);
    const second = Big(numberTwo);

    if (operation === '+') {
      total = first.plus(second);
    } else if (operation === '-') {
      total = first.minus(second);
    } else if (operation === 'X') {
      total = first.times(second);
    } else if (operation === '/') {
      total = first.div(second);
    } else if (operation === '%' && numberTwo === null) {
      total = first.div(100);
    } else if (operation === '%' && numberTwo !== null) {
      total = (first.div(100)).times(second);
    }

    return total;
  };
  return { operate };
})();

export default calc;
