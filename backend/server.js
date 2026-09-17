import express from "express";
import cors from "cors";

const app = express();
const PORT = 3000;
app.use(cors());
app.use(express.json());

app.get("/api/heroes", async (req, res) => {
  try {
    const response = await fetch("https://api.opendota.com/api/heroStats");

    if (!response.ok) {
      return res.status(response.status).json({
        error: "OpenDota heroes request failed",
        status: response.status,
      });
    }

    const data = await response.json();

    return res.json(data);
  } catch (error) {
    console.error("Heroes error:", error);

    return res.status(500).json({
      error: "Failed to load heroes",
    });
  }
});
app.post("/api/match", async (req, res) => {
  try {
    const { matchId } = req.body;

    if (!matchId) {
      return res.status(400).json({
        error: "Match ID is required",
      });
    }

    const response = await fetch(
      `https://api.opendota.com/api/matches/${matchId}`,
    );

    if (!response.ok) {
      return res.status(response.status).json({
        error: "OpenDota request failed",
        status: response.status,
      });
    }

    const data = await response.json();

    return res.json(data);
  } catch (error) {
    console.error("Server error:", error);

    return res.status(500).json({
      error: "Internal server error",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}!`);
});
