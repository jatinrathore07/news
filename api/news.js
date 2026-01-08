import axios from "axios";

export default async function handler(req, res) {
  const { q } = req.query;

  if (!q) {
    return res.status(400).json({ error: "Search query is required" });
  }

  try {
    const response = await axios.get(
      "https://newsapi.org/v2/everything",
      {
        params: {
          q,
          apiKey: process.env.API_KEY,
        },
      }
    );

    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch news" });
  }
}
