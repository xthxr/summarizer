
const fetchWebContent = require("../utils/fetchWebContent");
const axios = require("axios");

const summarizeContent = async (req, res) => {
  const { url } = req.body;

  if (!url) return res.status(400).json({ error: "URL is required" });

  try {
    const pageContent = await fetchWebContent(url);

    const response = await axios.post(
      "https://api.deepseek.com/v1/chat/completions",
      {
        model: "deepseek-chat",
        messages: [
          { role: "system", content: "You are a helpful AI summarizer." },
          { role: "user", content: `Summarize this webpage content:\n\n${pageContent}` },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.DEEPSEEK_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    const summary = response.data.choices[0].message.content;
    res.json({ summary });

  } catch (err) {
    res.status(500).json({ error: err.message || "Failed to summarize" });
  }
};

module.exports = { summarizeContent };
