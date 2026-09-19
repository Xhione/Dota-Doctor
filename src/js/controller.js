import getMatch from "./api.js";
import { getHeroes } from "./api.js";
import { showHeroSection } from "./view.js";
import { state } from "./model.js";
import { matchHeroes, sortHeroesByTeam, renderCards } from "./helpers.js";

const searchButton = document.querySelector("#search-match-button");
const searchInput = document.querySelector("#search-match-input");
const radiantTeamDiv = document.querySelector("#radiant-heroes");
const direTeamDiv = document.querySelector("#dire-heroes");
const heroSelectionSection = document.querySelector("#hero-selection-section");

async function handleSearchMatch() {
  const matchId = searchInput.value;

  const match = await getMatch(matchId);

  const heroes = await getHeroes();

  console.log(match);
  console.log(heroes);

  const matchedHeroes = matchHeroes(match.players, heroes);
  const { radiantTeam, direTeam } = sortHeroesByTeam(matchedHeroes);

  console.log(matchedHeroes);
  showHeroSection();
  renderCards(radiantTeam, radiantTeamDiv);
  renderCards(direTeam, direTeamDiv);
  state.matchedHeroes = matchedHeroes;
  state.currentMatch = match;
}

function handleChooseHero(event) {
  const card = event.target.closest(".hero-box");

  if (!card) return;

  const playerSlot = Number(card.dataset.playerSlot);
  console.log(playerSlot);

  const selectedPlayer = state.matchedHeroes.find((matchHero) => {
    return matchHero.player.player_slot === playerSlot;
  });

  console.log(selectedPlayer);

  selectedPlayer.player;
  //hide all sections
  //show match details section
  //get hero
  //get hero stats
  //rendering hero stats
}

searchButton.addEventListener("click", handleSearchMatch);
heroSelectionSection.addEventListener("click", handleChooseHero);
