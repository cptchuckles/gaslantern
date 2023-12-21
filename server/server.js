require("dotenv").config();
const port = process.env.PORT;
const express = require("express")
const app = express();

require("./config/mongoose.config");

app.use(
    express.json(),
    express.urlencoded({ extended: true }),
    require("cors")()
);

require("./routes/news.routes")(app);

app.listen(port, () => console.log("Listening on port", port));
