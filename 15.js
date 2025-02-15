/**
 * 정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.
 */

function solution(n) {
  let result = [];
  let answer = 0;

  for (let i = 0; i <= n; i++) {
    if (n % i === 0) {
      result.push(i);
    }
  }
  for (let j of result) {
    answer += j;
  }
  return answer;
}

console.log(solution(12));
console.log(solution(5));

console.log(true && false); // false
console.log(true && true); // true
console.log(0 && console.log('찍혔다!')); // 0
