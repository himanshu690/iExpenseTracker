require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")
const userRouter = require("./routes/userRouter");
const errorHandler = require("./middlewares/errorHandlerMiddleware");
const categoryRouter = require("./routes/categoryRouter");
const transactionRouter = require("./routes/transactionRouter");
const app = express();

const dbURL = process.env.MONGO_URL;

mongoose
  .connect(dbURL)
  .then(() => console.log("MongoDB Atlas Connected"))
  .catch((e) => console.log("Connection Error: ", e));

const corsOptions = {
  origin: [
    "http://localhost:5173",
    "https://i-expense-tracker.vercel.app/"
  ]
};
app.use(cors(corsOptions));

app.use(express.json()); 

app.use("/", userRouter);
app.use("/", categoryRouter);
app.use("/", transactionRouter);

app.use(errorHandler);


const PORT = process.env.PORT || 8000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);