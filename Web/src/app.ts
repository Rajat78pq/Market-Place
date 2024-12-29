import express from "express";
import dotenv from "dotenv";
import { Server } from "socket.io";
import http from "http";
import cors from "cors";
import authenticate from "./middlewares/authenticate";
import RegisterRoute from "./routes/auth/register.route";
import LoginRoute from "./routes/auth/login.route";
import ShopRoute from "./routes/shop/shopDetails.route";

dotenv.config();

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  },
});

const PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

//SOCKET-IO
io.on("connection", (socket) => {
  console.log(`User connected: ${socket.id}`);

  socket.emit("message", "Welcome from the server!");

  socket.on("fromClient", (data) => {
    console.log(data);
  });

  return () => {
    socket.off("message", (data) => {});
  };
});

//MIDDLEWARE
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  })
);
app.use(express.json());
app.use("/api", RegisterRoute);
app.use("/api", LoginRoute);
app.use("/api", authenticate, ShopRoute);
