import sortHealth from '../index';

const sortPack = [
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
  { ame: 'мечник', health: 10 },
];

const unsortPack = [
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
  { ame: 'мечник', health: 10 },
];

const reverseSortPack = [
  { ame: 'мечник', health: 10 },
  { name: 'лучник', health: 80 },
  { name: 'маг', health: 100 },
];

test('sort', () => {
  expect(sortPack.sort(sortHealth)).toEqual(sortPack);
});

test('reverse', () => {
  expect(reverseSortPack.sort(sortHealth)).toEqual(sortPack);
});

test('unsort', () => {
  expect(unsortPack.sort(sortHealth)).toEqual(sortPack);
});
