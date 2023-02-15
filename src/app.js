export default function sortHeroes(heroes) {
  return heroes.sort((p1, p2) => p2.health - p1.health);
}
