function solution(n) {
  let newArray = n.toString().split('').map(Number);
  newArray.sort((a, b) => b - a).join('');
  return Number(newArray.join(''));
}
console.log(solution(118372));
