function solution(a, b) {
  let result = 0;

  if (!(a <= b)) {
    let temp = 0;
    temp = b;
    b = a;
    a = temp;
  }

  for (let i = a; i <= b; i++) {
    result += i;
  }
  return result;
}

console.log(solution(3, 5));
console.log(solution(3, 3));
console.log(solution(5, 3));
