const characters = [
  { ame: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
];
const sortHealth = (a, b) => b.health - a.health;

export default sortHealth;
