import getMatch from "./api";
const searchButton = document.querySelector("#search-match-button");
const searchInput = document.querySelector("#search-match-input");

async function handleClick() {
  const matchId = searchInput.value;

  const match = await getMatch(matchId);

  console.log(match);
}

searchButton.addEventListener("click", handleClick);
