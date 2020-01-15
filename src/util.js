export function add(a = 0, b = 0) {
  return a + b;
}

export function swap(arr) {
  if (arr.length === 2) {
    return [arr[1], arr[0]];
  }
  return arr;
}
