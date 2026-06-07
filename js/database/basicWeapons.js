// This file contains all basic weapons in the game, along with all necessary information about them

const BASICWEAPONS = {
  longsword: {
    name: "Longsword",
    weight: 3.0,
    requirements: { str: 10, dex: 10 },
    attackType: "regular",
    upgradePath: "standard",
    base: {
      physical: 80,
      magic: 0,
      fire: 0,
      lightning: 0
    },
    scaling: {
      str: 0.48,   // these are the actual multipliers, NOT letter grades
      dex: 0.48,
      int: 0,
      fth: 0
    },
  },
  // new weapons go here
};