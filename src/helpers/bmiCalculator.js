//kids bmi data taken from https://www.cdc.gov/healthyweight/assessing/bmi/childrens_bmi/about_childrens_bmi.html

const BOYS_OBESITY_BMI = {
  3: 18.2,
  4: 17.8,
  5: 18,
  6: 18.4,
  7: 19.1,
  8: 20,
  9: 20.5,
  10: 22.1,
  11: 23.2,
  12: 24.2,
  13: 25.2,
  14: 26,
  15: 26.8,
  16: 27.5,
  17: 28.2,
  18: 28.9,
  19: 29.7
};

const GIRLS_OBESITY_BMI = {
  3: 18.2,
  4: 18,
  5: 18.2,
  6: 18.8,
  7: 19.7,
  8: 20.7,
  9: 21.8,
  10: 22.9,
  11: 24.1,
  12: 25.2,
  13: 26.3,
  14: 27.2,
  15: 28.1,
  16: 28.9,
  17: 29.6,
  18: 30.3,
  19: 31
};

//altering each value to get the average between the ages and will use that for someones age, because most people are somewhere between the 2 years.
function changeAgeToPointFive(rawData) {
  let returnObj = {};

  let keys = Object.keys(rawData);
  keys.forEach((key, idx) => {
    if (idx == keys.length - 1) return;

    let value = rawData[key];
    let nextValue = rawData[keys[idx + 1]];

    returnObj[key] = (value + nextValue) / 2;
  });

  return returnObj;
}

//below 2 objects were made using above formula. no point recalculating every time.
const BOYS_ADJUSTED_OBESITY_BMI = {
  10: 22.6,
  11: 23.7,
  12: 24.7,
  13: 25.6,
  14: 26.4,
  15: 27.1,
  16: 27.9,
  17: 28.5,
  18: 29.3,
  3: 18,
  4: 17.9,
  5: 18.2,
  6: 18.8,
  7: 19.6,
  8: 20.3,
  9: 21.3
};

const GIRLS_ADJUSTED_OBESITY_BMI = {
  10: 23.5,
  11: 24.6,
  12: 25.8,
  13: 26.8,
  14: 27.6,
  15: 28.5,
  16: 29.3,
  17: 30,
  18: 30.6,
  3: 18.1,
  4: 18.1,
  5: 18.5,
  6: 19.3,
  7: 20.2,
  8: 21.3,
  9: 22.4
};

function calcBMI(kg, cm, years, gender) {
  let bmi = kg / cm ** 2 * 10000;
  let obese = false;

  if (years > 18 && bmi > 30) obese = true;
  else if (gender == "male" && bmi > BOYS_ADJUSTED_OBESITY_BMI[years])
    obese = true;
  else if (gender == "female" && bmi > GIRLS_ADJUSTED_OBESITY_BMI[years])
    obese = true;

  return { bmi, obese };
}

export default calcBMI;
