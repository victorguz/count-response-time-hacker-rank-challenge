function average(previousElements) {
  return (
    previousElements.reduce((acc, val) => acc + val, 0) /
    previousElements.length
  );
}

/*
 * Complete the 'countResponseTimeRegressions' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY responseTimes as parameter.
 */

function countResponseTimeRegressions(responseTimes) {
  // Write your code here
  if (responseTimes.length <= 1) return 0;
  let count = 0;
  for (let i = 1; i < responseTimes.length; i++) {
    const element = responseTimes[i];
    const previousElements = responseTimes.slice(0, i);
    const previousAvg = average(previousElements);
    console.log(element, previousAvg,element > previousAvg);
    if (element > previousAvg) {
      count++;
    }
  }

  return count;
}

function main() {
  const values = [4, 100, 200, 150, 300];
  const result = countResponseTimeRegressions(values);
  console.log(result);
}

main();
