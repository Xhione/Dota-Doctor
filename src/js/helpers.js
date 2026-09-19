export function matchHeroes(players, heroes) {
  const data = players.map((player) => {
    const hero = heroes.find((hero) => {
      return hero.id === player.hero_id;
    });
    return { hero, player };
  });
  return data;
}

export function sortHeroesByTeam(matchedHeroes) {
  const radiantTeam = matchedHeroes.filter((matchHero) => {
    return matchHero.player.isRadiant === true;
  });
  const direTeam = matchedHeroes.filter((matchHero) => {
    return matchHero.player.isRadiant === false;
  });

  return {
    radiantTeam,
    direTeam,
  };
}

export function renderCards(team, container) {
  const cards = team
    .map((player) => {
      return `<div class ="hero-box"
      data-player-slot ="${player.player.player_slot}">
      <img src = "https://cdn.cloudflare.steamstatic.com${player.hero.img}" class="hero-img" />
      <p class ="hero-name-${container}"> ${player.hero.localized_name}</p>
      <p class = "player-name-${container}">Нік : ${player.player.personaname}</p>
    </div>`;
    })
    .join("");

  container.innerHTML = cards;
}
