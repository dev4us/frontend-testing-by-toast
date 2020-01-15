export function createCounter(options = {}) {
  let val = options.initVal || 0;
  const min = 0;
  const max = 5;

  return {
    val() {
      return val;
    },
    inc() {
      return val < max ? val++ : false;
    },
    dec() {
      return min < val ? val-- : false;
    },
    isMax() {
      return options.max === val ? true : false;
    },
    isMin() {
      return options.min === val ? true : false;
    },
    initVal() {
      val = 0;
    }
  };
}
