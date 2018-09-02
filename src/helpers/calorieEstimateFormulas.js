//source: http://www.globalrph.com/estimated_energy_requirement.htm

//formulas require a different activity level to the ones we have defined earlier
// The Physical Activity Level categories were defined as sedentary (PAL 1.0-1.39), low active (PAL 1.4-1.59), active (PAL 1.6-1.89), and very active (PAL 1.9-2.5).

//output units of formulas are always kCals per day

export const maleFormulas = [
  { maxAge: 0.25, formula: kg => 89 * kg - 100 + 175 },
  { maxAge: 0.5, formula: kg => 89 * kg - 100 + 56 },
  { maxAge: 1, formula: kg => 89 * kg - 100 + 22 },
  { maxAge: 3, formula: kg => 89 * kg - 100 + 20 },
  {
    maxAge: 8,
    formula: (years, kg, m, activity) =>
      88.5 -
      61.9 * years +
      maleActivityVals.boys[activity] * (26.7 * kg + 903 * m) +
      20
  },
  {
    maxAge: 18,
    formula: (years, kg, m, activity) =>
      88.5 -
      61.9 * years +
      maleActivityVals.boys[activity] * (26.7 * kg + 903 * m) +
      25
  },
  {
    maxAge: Infinity,
    formula: (years, kg, m, activity) =>
      662 -
      9.53 * years +
      maleActivityVals.men[activity] * (15.91 * kg + 539.6 * m)
  },
  {
    obese: true,
    formula: (years, kg, m, activity) =>
      -114 -
      50.9 * years +
      maleActivityVals.obeseBoys[activity] * (19.5 * kg + 1161.4 * m),
    info: "For use with obese boys aged 3-18"
  }
];

export const femaleFormulas = [
  { maxAge: 0.25, formula: kg => 89 * kg - 100 + 175 },
  { maxAge: 0.5, formula: kg => 89 * kg - 100 + 56 },
  { maxAge: 1, formula: kg => 89 * kg - 100 + 22 },
  { maxAge: 3, formula: kg => 89 * kg - 100 + 20 },
  {
    maxAge: 8,
    formula: (years, kg, m, activity) =>
      135.3 -
      30.8 * years +
      femaleActivityVals.girls[activity] * (10.0 * kg + 934 * m) +
      20
  },
  {
    maxAge: 18,
    formula: (years, kg, m, activity) =>
      135.3 -
      30.8 * years +
      femaleActivityVals.girls[activity] * (10.0 * kg + 934 * m) +
      25
  },
  {
    maxAge: Infinity,
    formula: (years, kg, m, activity) =>
      354 -
      6.91 * years +
      femaleActivityVals.women[activity] * (9.36 * kg + 726 * m)
  },
  {
    obese: true,
    formula: (years, kg, m, activity) =>
      389 -
      41.2 * years +
      femaleActivityVals.obeseGirls[activity] * (15 * kg + 701.6 * m),
    info: "For use with obese girls aged 3-18"
  }
];

//information
//1 is Sedentary, 2 is Low Active, 3 is Active, 4 is Very Active

const maleActivityVals = {
  boys: {
    1: 1,
    2: 1.13,
    3: 1.26,
    4: 1.42
  },
  obeseBoys: {
    1: 1,
    2: 1.12,
    3: 1.24,
    4: 1.45
  },
  men: {
    1: 1,
    2: 1.11,
    3: 1.25,
    4: 1.48
  }
};

const femaleActivityVals = {
  girls: {
    1: 1,
    2: 1.16,
    3: 1.31,
    4: 1.56
  },
  obeseGirls: {
    1: 1,
    2: 1.18,
    3: 1.35,
    4: 1.6
  },
  women: {
    1: 1,
    2: 1.12,
    3: 1.27,
    4: 1.45
  }
};
