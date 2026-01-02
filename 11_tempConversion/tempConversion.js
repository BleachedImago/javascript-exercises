const convertToCelsius = function(fah) {
  fah = Number(((fah - 32) * (5 / 9)).toFixed(1));

  if (fah % 1 == 0) {
    return Math.round(fah);
  }

  return fah;
};

const convertToFahrenheit = function(cel) {
  cel = Number((cel * (9 /5 ) + 32).toFixed(1));

  if (cel % 1 == 0) {
    return Math.round(cel);
  }

  return cel;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
