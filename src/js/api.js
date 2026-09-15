export default async function getMatch(matchId) {
  const response = await fetch("", {
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
