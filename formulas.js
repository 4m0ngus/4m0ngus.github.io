// Physical Damage Reduction
export function physicalDamageReduction(Armor) {
  return Math.max(1 - (0.065 * Armor) / (1 + 0.065 * 0.6 * Math.abs(Armor)), 0); // Ensure it doesn't go below 0 (100% reduction)
}

// Magical Damage Reduction
export function magicalDamageReduction(MR) {
  return Math.max(1 - (0.065 * MR) / (1 + 0.065 * 0.6 * Math.abs(MR)), 0); // Ensure it doesn't go below 0
}

// Cooldown Reduction
export function cooldownReduction(AH) {
  // The formula you provided had some issues (ABS, MAX1, AH not defined).
  // I've made some reasonable assumptions and improvements:
  // AH is assumed to be Ability Haste (a common term for CDR-like stats)
  // The formula is now a standard Ability Haste to CDR conversion
  return Math.min(AH / (100 + AH), 1); // Limit to 100% CDR
}
