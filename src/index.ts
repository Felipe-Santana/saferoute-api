import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectToDb from "./db/dbConnection";
import router from "./routes";

dotenv.config();

const app = express();

const serverPort = Number(process.env.SERVER_PORT) || 3000;
const serverHost = process.env.SERVER_HOST || "127.0.0.1";

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(serverPort, serverHost, async () => {
  console.log(`Server started on ${serverHost}:${serverPort}`);
  console.log("Connecting db");
  try {
    await connectToDb().then(() => {
      console.log("Connected");
    });
  } catch (err) {
    console.error(err);
  }
});
