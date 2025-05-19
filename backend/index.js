const express = require("express");
const cors = require("cors");
const summarizeRoute = require("./routes/summarizeRoute");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api/summarize", summarizeRoute);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
