function getArrayParams(...arr) {
  /*let min = arr[0];
  let max = arr[0];
  let sum = 0;
  for(let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    } else if (arr[i] < min) {
      min = arr[i];
    }
    sum += arr[i];
  }*/
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  let sum = arr.reduce((acc, curr) => acc + curr, 0);
  return { min: min, max: max, avg: Number((sum / arr.length).toFixed(2))};
}


function summElementsWorker(...arr) {
  let sum = arr.reduce((acc, curr) => acc + curr, 0);
  return sum;
}

function differenceMaxMinWorker(...arr) {
  if(arr.length > 0) {
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    return max - min;
  } else {
    return 0;
  }
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  if(arr.length > 0) {
    for(let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        sumEvenElement += arr[i];
      } else {
      sumOddElement += arr[i];
      }
    } return sumEvenElement - sumOddElement;
  } else {
     return 0;
  }
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  if(arr.length > 0) {
    for(let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        sumEvenElement += arr[i];
        countEvenElement++;
      }
    } return sumEvenElement / countEvenElement;
  } else {
    return 0;
  }
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = func(...arrOfArr[0]);
  for(let i = 0; i < arrOfArr.length; i++) {
    const result = func(...arrOfArr[i]);
    if(result > maxWorkerResult) {
      maxWorkerResult = result;
    }
  }
  return maxWorkerResult;
}
