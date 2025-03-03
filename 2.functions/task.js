function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;

  for (let num of arr) {
      if (num > max) {
          max = num;
      }
      if (num < min) {
          min = num;
      }
      sum += num;
  }

  let avg = (sum / arr.length).toFixed(2);
  
  avg = Number(avg);

  return { min: min, max: max, avg: avg };
}


function summElementsWorker(...arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  const max = Math.max(...arr);
  const min = Math.min(...arr);
  return max - min;
}

function differenceEvenOddWorker(...arr) {

  let sumEvenElement = 0;
  let sumOddElement = 0;

  for (let num of arr) {
      if (num % 2 === 0) {
          sumEvenElement += num;
      } else {
          sumOddElement += num;
      }
  }

  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {

  let sumEvenElement = 0;
  let countEvenElement = 0;

  for (let num of arr) {
      if (num % 2 === 0) {
          sumEvenElement += num;
          countEvenElement++;
      }
  }

  return countEvenElement === 0 ? 0 : sumEvenElement / countEvenElement;
}


function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;

  for (let arr of arrOfArr) {
      const workerResult = func(...arr);
      
      if (workerResult > maxWorkerResult) {
          maxWorkerResult = workerResult;
      }
  }

  return maxWorkerResult;
}