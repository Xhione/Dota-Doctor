import getMatch from "./api.js";
import { getHeroes } from "./api.js";
import { showHeroSection } from "./view.js";
import { state } from "./model.js";
import { matchHeroes, sortHeroesByTeam, renderCards } from "./helpers.js";

const searchButton = document.querySelector("#search-match-button");
const searchInput = document.querySelector("#search-match-input");
const radiantTeamDiv = document.querySelector("#radiant-heroes");
const direTeamDiv = document.querySelector("#dire-heroes");

async function handleClick() {
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

  state.currentMatch = match;
}

searchButton.addEventListener("click", handleClick);
