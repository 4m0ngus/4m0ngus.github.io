export function physicalDamageReduction(Armor) {
  return Math.max(1 - (0.065 * Armor) / (1 + 0.065 * 0.6 * Math.abs(Armor)), 0);
}

export function magicalDamageReduction(MR) {
  return Math.max(1 - (0.065 * MR) / (1 + 0.065 * 0.6 * Math.abs(MR)));
}

export function cooldownReduction(AH) {
  return Math.max(1 - 0.045 * AH / (1 + 0.045 * Math.abs(AH)), 0.08); // Limit to 100% CDR
}

export function calculateHealthRegeneration(HPR, level) {
  const regen = 0.7 + 0.62 * Math.exp(-(12 - level) / 5.5);
  return healthRegen * regen;
}
