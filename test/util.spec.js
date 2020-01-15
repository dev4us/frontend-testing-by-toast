import { add, swap } from "../src/util";

describe("add()", () => {
  test("인자가 없으면 0을 반환한다.", () => {
    expect(add()).toEqual(0);
  });

  test("인자가 하나이면, 인자 그대로 반환한다.", () => {
    expect(add(5)).toEqual(5);
  });

  test("인자가 두 개이면 두 인자를 더한 결과를 반환한다", () => {
    expect(add(3, 5)).toEqual(8);
  });
});

describe("swap()", () => {
  test("배열의 인자가 두 개가 아닌 경우, 기존 배열을 그대로 반환한다.", () => {
    const case1 = [0, 50, 100];
    expect(swap(case1)).toEqual(case1);
  });

  test("배열 내의 두 요소의 순서를 바꾸어 새로운 배열을 반환한다.", () => {
    const case2 = [0, 100];
    expect(swap(case2)).toEqual([100, 0]);
  });

  test("변경된 배열은 기존 배열과 다른 새로운 배열이다.", () => {
    const case3 = [0, 100];
    expect(swap(case3)).not.toBe([100, 0]);
  });
});
