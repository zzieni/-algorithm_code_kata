/**
 * 머쓱이는 선생님이 몇 년도에 태어났는지 궁금해졌습니다. 2022년 기준 선생님의 나이 age가 주어질 때, 선생님의 출생 연도를 return 하는 solution 함수를 완성해주세요
 */

function solution(age) {
  const thisYear = 2022;
  return thisYear - age + 1;
}

console.log(solution(40));
console.log(solution(23));
