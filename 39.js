/**
 *두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환하는 함수, solution을 완성해 보세요.
 * 배열의 맨 앞에 최대공약수, 그다음 최소공배수를 넣어 반환하면 됩니다. 예를 들어 두 수 3, 12의 최대공약수는 3, 최소공배수는 12이므로 solution(3, 12)는 [3, 12]를 반환해야 합니다.
 */

function solution(n, m) {
  let result = [];
  const greatest = (a, b) => {
    if (b === 0) return a;
    return greatest(b, a % b);
  };
  const lest = (a, b) => (a * b) / greatest(a, b);
  return [greatest(n, m), lest(n, m)];
}

console.log(solution(3, 12));
console.log(solution(2, 5));
