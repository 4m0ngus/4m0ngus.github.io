const heroStats = {
  Kumihu: {
    HP: { base: 520.0, scaling: 24.0 },
    AD: { base: 50.0, scaling: 2.5 },
    AP: { base: 0.0, scaling: 0.0 },
    AS: { base: 1.1, scaling: 0.0 },
    HPR: { base: 1.0, scaling: 0.4 },
    Armor: { base: 1.5, scaling: 0.3 },
    MS: { base: 70.0, scaling: 0.0 },
    MR: { base: 2.0, scaling: 0.0 }
  },
  Sparrow: {
    HP: { base: 550.0, scaling: 24.0 },
    AD: { base: 50.0, scaling: 2.0 },
    AP: { base: 0.0, scaling: 0.0 },
    AS: { base: 1.12, scaling: 0.0 },
    HPR: { base: 1.0, scaling: 0.4 },
    Armor: { base: 1.5, scaling: 0.4 },
    MS: { base: 70.0, scaling: 0.0 },
    MR: { base: 2.0, scaling: 0.0 }
  },
  ICeat: {
    HP: { base: 520.0, scaling: 22.0 },
    AD: { base: 50.0, scaling: 2.0 },
    AP: { base: 0.0, scaling: 0.0 },
    AS: { base: 1.1, scaling: 0.0 },
    HPR: { base: 1.0, scaling: 0.4 },
    Armor: { base: 1.5, scaling: 0.35 },
    MS: { base: 68.0, scaling: 0.0 },
    MR: { base: 2.0, scaling: 0.0 }
  },
  Belle: {
    HP: { base: 520.0, scaling: 22.0 },
    AD: { base: 50.0, scaling: 2.0 },
    AP: { base: 0.0, scaling: 0.0 },
    AS: { base: 1.1, scaling: 0.0 },
    HPR: { base: 1.0, scaling: 0.4 },
    Armor: { base: 1.0, scaling: 0.3 },
    MS: { base: 70.0, scaling: 0.0 },
    MR: { base: 2.0, scaling: 0.0 }
  },
  Thomas: {
    HP: { base: 550.0, scaling: 25.0 },
    AD: { base: 55.0, scaling: 3.0 },
    AP: { base: 0.0, scaling: 0.0 },
    AS: { base: 1.0, scaling: 0.0 },
    HPR: { base: 1.0, scaling: 0.4 },
    Armor: { base: 1.5, scaling: 0.4 },
    MS: { base: 70.0, scaling: 0.0 },
    MR: { base: 2.0, scaling: 0.0 }
  },
  Veil: {
    HP: { base: 530.0, scaling: 22.0 },
    AD: { base: 50.0, scaling: 2.0 },
    AP: { base: 0.0, scaling: 0.0 },
    AS: { base: 1.1, scaling: 0.0 },
    HPR: { base: 1.0, scaling: 0.4 },
    Armor: { base: 1.0, scaling: 0.4 },
    MS: { base: 72.0, scaling: 0.0 },
    MR: { base: 2.0, scaling: 0.0 }
  },
  Flin: {
    HP: { base: 520.0, scaling: 22.0 },
    AD: { base: 50.0, scaling: 2.0 },
    AP: { base: 0.0, scaling: 0.0 },
    AS: { base: 1.15, scaling: 0.0 },
    HPR: { base: 1.0, scaling: 0.3 },
    Armor: { base: 1.0, scaling: 0.3 },
    MS: { base: 70.0, scaling: 0.0 },
    MR: { base: 2.0, scaling: 0.0 }
  },
  Kira: {
    HP: { base: 525.0, scaling: 22.0 },
    AD: { base: 50.0, scaling: 2.0 },
    AP: { base: 0.0, scaling: 0.0 },
    AS: { base: 1.05, scaling: 0.0 },
    HPR: { base: 1.0, scaling: 0.3 },
    Armor: { base: 1.0, scaling: 0.3 },
    MS: { base: 70.0, scaling: 0.0 },
    MR: { base: 2.0, scaling: 0.0 }
  },
  Hazel: {
    HP: { base: 600.0, scaling: 30.0 },
    AD: { base: 52.0, scaling: 1.0 },
    AP: { base: 0.0, scaling: 0.0 },
    AS: { base: 0.95, scaling: 0.0 },
    HPR: { base: 2.0, scaling: 0.6 },
    Armor: { base: 2.0, scaling: 0.5 },
    MS: { base: 68.0, scaling: 0.0 },
    MR: { base: 2.0, scaling: 0.0 }
  },
  Arel: {
    HP: { base: 540.0, scaling: 24.0 },
    AD: { base: 50.0, scaling: 2.5 },
    AP: { base: 0.0, scaling: 0.0 },
    AS: { base: 1.05, scaling: 0.0 },
    HPR: { base: 1.0, scaling: 0.4 },
    Armor: { base: 1.5, scaling: 0.4 },
    MS: { base: 70.0, scaling: 0.0 },
    MR: { base: 2.0, scaling: 0.0 }
  },
  Alvar: {
    HP: { base: 550.0, scaling: 25.0 },
    AD: { base: 50.0, scaling: 2.0 },
    AP: { base: 0.0, scaling: 0.0 },
    AS: { base: 1.08, scaling: 0.0 },
    HPR: { base: 1.5, scaling: 0.4 },
    Armor: { base: 1.5, scaling: 0.4 },
    MS: { base: 72.0, scaling: 0.0 },
    MR: { base: 2.0, scaling: 0.0 }
  },
  Foxy: {
    HP: { base: 540.0, scaling: 24.0 },
    AD: { base: 50.0, scaling: 2.0 },
    AP: { base: 0.0, scaling: 0.0 },
    AS: { base: 1.1, scaling: 0.0 },
    HPR: { base: 1.5, scaling: 0.4 },
    Armor: { base: 1.0, scaling: 0.4 },
    MS: { base: 70.0, scaling: 0.0 },
    MR: { base: 2.0, scaling: 0.0 }
  },
  Magdalene: {
    HP: { base: 520.0, scaling: 22.0 },
    AD: { base: 50.0, scaling: 2.0 },
    AP: { base: 0.0, scaling: 0.0 },
    AS: { base: 1.1, scaling: 0.0 },
    HPR: { base: 1.0, scaling: 0.4 },
    Armor: { base: 1.0, scaling: 0.4 },
    MS: { base: 72.0, scaling: 0.0 },
    MR: { base: 2.0, scaling: 0.0 }
  },
  Prim: {
    HP: { base: 520.0, scaling: 24.0 },
    AD: { base: 50.0, scaling: 2.0 },
    AP: { base: 0.0, scaling: 0.0 },
    AS: { base: 1.1, scaling: 0.0 },
    HPR: { base: 1.0, scaling: 0.4 },
    Armor: { base: -2.0, scaling: 0.4 },
    MS: { base: 64.0, scaling: 0.0 },
    MR: { base: 2.0, scaling: 0.0 }
  },
  Seer: {
    HP: { base: 550.0, scaling: 24.0 },
    AD: { base: 50.0, scaling: 1.0 },
    AP: { base: 0.0, scaling: 0.0 },
    AS: { base: 0.75, scaling: 0.0 },
    HPR: { base: 1.5, scaling: 0.5 },
    Armor: { base: 2.0, scaling: 0.5 },
    MS: { base: 72.0, scaling: 0.0 },
    MR: { base: 2.0, scaling: 0.0 }
  }
};

export default heroStats;
