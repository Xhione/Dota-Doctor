import express from "express";
import "dotenv/config";
const app = express();

app.use(express.json());

app.post("/api/match", async (req, res) => {
  const { matchId } = req.body;
  //   console.log(matchId);
  const response = await fetch("https://api.stratz.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.STRATZ_TOKEN}`,
    },
    body: JSON.stringify({
      query: `
      query GetMatch($id: Long!) {
        match(id: $id) {
          id
          durationSeconds
          didRadiantWin
        }
      }
    `,

      variables: {
        id: Number(matchId),
      },
    }),
  });

  return res.json(response);
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log("Server running on port 3000!");
});
