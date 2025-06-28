import { api } from "../api/api";
import { pollCacheRepository } from "../cache/CacheRepository";
import { createServer } from "http";
import { Server } from "socket.io";

const httpServer = createServer(api);
const io = new Server(httpServer, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("client connected :", socket.id);

  socket.on("vote", async ({ pollId, option }) => {
    socket.join(pollId);
    const cacheRepo = pollCacheRepository;
    await cacheRepo.create(pollId, option);
    const catcheData = await cacheRepo.find(pollId);
    socket.to(pollId).emit("voteupdate", catcheData);
  });
});

export { httpServer };
