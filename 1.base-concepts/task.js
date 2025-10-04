"use strict";

function solveEquation(a, b, c) {
  let arr = [];
    let d = Math.pow(b, 2) - 4 * a * c;

    if (d < 0) {
      return arr;
    } else if (d === 0) {
      let root = -b/(2*a);
      arr.push(root);
      return arr;
    } else {
      let root1 = (-b + Math.sqrt(d))/(2*a);
      let root2 = (-b - Math.sqrt(d))/(2*a);
      arr.push(root1, root2);
      return arr;
    }
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let monthlyPercent = (percent / 100) / 12;

    // Рассчитываем тело кредита 
    let bodyLoan = amount - contribution;

    // Проверяем, чтобы тело кредита было положительным
    if (bodyLoan <= 0) {
        return 0;
    }

    // Применяем формулу для расчета ежемесячного платежа
    let monthlyPayment = bodyLoan * (monthlyPercent + (monthlyPercent / (Math.pow((1 + monthlyPercent), countMonths) - 1)));

    // Рассчитываем общую сумму, которую надо заплатить
    let totalAmount = monthlyPayment * countMonths;

    // Округляем результат до двух decimal и возвращаем число
    return Math.round(totalAmount * 100) / 100;
}