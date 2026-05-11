const express = require("express");
const cors = require("cors");

const router = require("./routes");

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://p6-js-frontend.vercel.app"
    ],
    credentials: true,
  })
);

app.use(express.json());

const port = process.env.PORT || 8000;

app.use("/images", express.static("images"));
app.use(router);

app.listen(port, () => (`Backend running on port ${port}`));
