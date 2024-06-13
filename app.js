const express = require("express");
const path = require("path");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const morganMiddleware = require("./middleware/morgan.middleware");
const logger = require("./utils/logger");

const indexRouter = require("./routes/index");
const swagger = require("./swagger");

const app = express();

// app.use(cors({ origin: "http://localhost:3000" }));
const corsOptions = {
  origin: "http://localhost:5173",
  optionsSuccessStatus: 200,
};

// Middleware
app.use(cors(corsOptions));
app.use(morganMiddleware);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

swagger(app)

// Logs
logger.http("Debut session");

app.use("/api", indexRouter);

module.exports = app;
