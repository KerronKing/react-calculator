import calc from './operate';

const method = (() => {
  const calculate = (calcObj, buttonName) => {
    const obj = calcObj;
    if (buttonName === 'AC') {
      obj.total = 0;
      obj.next = 0;
    } else if (buttonName === '+/-') {
      obj.total *= -1;
      obj.next *= -1;
    } else if (buttonName === '%'
    && obj.next === null) {
      obj.total = calc.operate(obj.total, obj.next, buttonName);
      obj.next = 0;
    } else if (buttonName === '%'
    && obj.next !== null) {
      obj.total = calc.operate(obj.total, obj.next, buttonName);
      obj.next = 0;
    } else if (buttonName === '+'
    || buttonName === '-'
    || buttonName === 'X'
    || buttonName === '/') {
      obj.total = calc.operate(obj.total, obj.next, buttonName);
      obj.next = 0;
    }
    return obj;
  };
  return { calculate };
})();

export default method;
