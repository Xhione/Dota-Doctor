export default async function getMatch(matchId) {
  const response = await fetch("http://localhost:3000/api/match", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      matchId,
    }),
  });
  const data = await response.json();

  return data;
}

export async function getHeroes() {
  const response = await fetch("http://localhost:3000/api/heroes");
  const data = await response.json();
  return data;
}
