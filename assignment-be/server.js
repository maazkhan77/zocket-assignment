import express from "express";
import path from "path";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
import { errorHandler, notFound } from "./middlewares/errorMiddleware.js";
import campaignRoutes from './routes/campaignRoutes.js'

dotenv.config();
connectDb();
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("api is running");
});

app.use('/api/campaigns', campaignRoutes);

app.use(errorHandler);
app.use(notFound);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () =>
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
);
