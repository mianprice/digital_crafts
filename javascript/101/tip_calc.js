function tipAmount(amount,service) {
  if (service === "good") {
    var tip = amount * 0.2;
  } else if (service === "fair") {
    var tip = amount * 0.15;
  } else {
    var tip = amount * 0.1;
  }
  return tip;
}

function totalAmount(amount,service) {
  if (service === "good") {
    amount += amount * 0.2;
  } else if (service === "fair") {
    amount += amount * 0.15;
  } else {
    amount += amount * 0.1;
  }
  return amount;
}

function splitTotal(amount,service,num) {
  total = totalAmount(amount,service);
  return total/num;
}

console.log(splitTotal(100,'good',5));
