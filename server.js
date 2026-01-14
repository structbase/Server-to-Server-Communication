const express = require("express");
const axios = require("axios");

const app = express();
const PORT = 3000;

// Simple landing route to verify the server is running
app.get("/", (req, res) => {
    res.send("<h1>Hello its not me </h1>");
});

// Fetches a random fact from an external API and returns it as JSON
app.get("/api/fun-fact", async (req, res) => {
    try {
        const response = await axios.get(
            "https://uselessfacts.jsph.pl/api/v2/facts/random"
        );

        res.json({
            fact: response.data.text,
        });
    } catch (error) {
        // Distinguish between API-level errors and internal/network errors
        if (error.response) {
            // External API returned an error status (e.g., 404 or 500)
            console.error(
                "API Error:",
                error.response.status,
                error.response.data
            );
            res.status(error.response.status).json({
                message: "Could not fetch fun fact.",
            });
        } else {
            // Request failed before reaching the API (e.g., timeout or DNS issues)
            console.error("Network Error:", error.message);
            res.status(500).json({
                message: "A network error occurred.",
            });
        }
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
