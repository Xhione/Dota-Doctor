const matchSearchSection = document.querySelector("#match-search-section");
const heroSelectionSection = document.querySelector("#hero-selection-section");
const matchDetailsSection = document.querySelector("#match-details-section");
export function showHeroSection() {
  matchSearchSection.hidden = true;
  heroSelectionSection.hidden = false;
  matchDetailsSection.hidden = true;
}
