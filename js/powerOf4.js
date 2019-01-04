function powerOf4(n) {

  if (n < 0 || typeof(n) !== "number") {
    return false;
  }

  if (n > 1 && n < 4) {
    return false;
  }

  if (n / 4 === 4 || 1) {
    return true;
  } else {
    return powerOf4(n / 4);
  }
}



console.log(powerOf4(16));
