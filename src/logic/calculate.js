import calc from './operate';

const method = (() => {
  const calculate = (calcObj, buttonName) => {
    const obj = calcObj;
    if (buttonName === '+/-') {
      obj.total = `-${obj.total}`;
      obj.next = `-${obj.next}`;
    } else {
      obj.total = calc.operate(obj.total, obj.next, buttonName);
      obj.next = null;
      obj.operation = '=';

    }
    return obj;
  };
  return { calculate };
})();

export default method;
