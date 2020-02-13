import Big from 'big';

const calc = (() => {
  const operate = (numberOne, numberTwo, operator) => {
    let total;
    const first = Big(numberOne);
    const second = Big(numberTwo);

    if (operator === '+') {
      total = first + second;
    } else if (operator === '-') {
      total = first - second;
    } else if (operator === 'X') {
      total = first * second;
    } else if (operator === '/') {
      total = first / second;
    } else if (operator === '+') {
      total = first + second;
    } else if (operator === '%' && numberTwo === null) {
      total = first / 100;
    } else if (operator === '%' && numberTwo !== null) {
      total = (first / 100) * second;
    }

    return total;
  };
  return { operate };
})();

export default calc;
