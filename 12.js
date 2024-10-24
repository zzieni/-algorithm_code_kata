/**
 * 정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.
 */

function solution(arr) {
  let total = 0;
  let result = 0;

  for (let i of arr) {
    total += i;
    result = total / arr.length;
  }
  return result;
}

console.log(solution([1, 2, 3, 4]));
console.log(solution([5, 5]));
