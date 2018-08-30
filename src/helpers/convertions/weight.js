const STONES_PER_KG = 0.157473;
const POUNDS_PER_STONE = 14;

export function fromKgToStones(kg = 0) {
  let stones = kg * STONES_PER_KG;

  let remainder = stones - Math.floor(stones);
  let pounds = remainder * POUNDS_PER_STONE;

  return [Math.floor(stones), +pounds.toFixed(0)];
}

export function fromStonesToKg(stones = 0, pounds = 0) {
  let fractionOfStone = pounds / POUNDS_PER_STONE;

  return [+((+stones + fractionOfStone) / STONES_PER_KG).toFixed(1)];
}
