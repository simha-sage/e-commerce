import express from "express";
import fetch from "node-fetch";
const app = express();
const PORT = 3000;

// Example coordinates for Vizag (change if needed)
const SWIGGY_API_URL =
  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.544893&lng=81.521241&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

app.get("/data", async (req, res) => {
  try {
    const response = await fetch(SWIGGY_API_URL, {
      headers: {
        "User-Agent": "Mozilla/5.0",
        Accept: "application/json",
      },
    });
    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error("Error fetching Swiggy API:", err);
    res.status(500).json({ error: "Failed to fetch Swiggy data" });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server running at http://localhost:${PORT}`);
});
