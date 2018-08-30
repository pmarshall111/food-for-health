const CM_PER_FOOT = 30.48;
const INCHES_PER_FOOT = 12;

export function fromFeetToMeters(feet = 0, inches = 0) {
  let fractionOfFoot = inches / INCHES_PER_FOOT;
  return [+((+feet + fractionOfFoot) * CM_PER_FOOT).toFixed(0)];
}

export function fromMetersToFeet(cm = 0) {
  let feet = cm / CM_PER_FOOT;

  let remainder = feet - Math.floor(feet);
  let inches = remainder * INCHES_PER_FOOT;

  return [Math.floor(feet), +inches.toFixed(0)];
}
