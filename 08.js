function solution(angle) {
  if (angle < 90) return 1;
  if (angle == 90) return 2;
  if (angle < 180) return 3;
  return 4;
}

console.log(solution(70));
console.log(solution(91));
console.log(solution(180));
