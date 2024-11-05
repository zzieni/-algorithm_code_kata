function solution(arr) {
  const array = [];
  const result = arr.filter((num) => {
    return num !== Math.min(...arr);
  });
  if (result.length === 0) {
    return [-1];
  }
  return result;
}

console.log(solution([4, 3, 2, 1]));
console.log(solution([10]));
