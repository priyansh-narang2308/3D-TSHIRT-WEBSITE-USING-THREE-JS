import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import dalleRoutes from "./routes/dalle.routes.js";

dotenv.config();

const app = express();
app.use(cors()); //middleware
app.use(express.json({ limit: "50mb" })); //weight of payload

app.use("/api/v1/dalle", dalleRoutes);

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello From DALLE" });
});

app.listen(8080, () => console.log("Server Has started on the port 8080!"));
