require("dotenv").config();
const express = require("express");
const PORT = 3000;
const app = express();
const prisma = require("./prisma");

app.use(express.json());

app.get("/api/players", async (req, res, next) => {
  try {
    const players = await prisma.player.findMany({});
    res.status(201).send({ message: "all users found", players });
  } catch (err) {
    console.error("couldnt get all players", err);
  }
});

app.post("/api/players", async (req, res, next) => {
  const { name, breed, status } = req.body;
  try {
    const players = await prisma.player.create({
      data: { name, breed, status },
    });
    res.status(201).send({ message: "successful!", players });
  } catch (err) {
    console.error("couldnt add new player", err);
  }
});

app.get("/api/players/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const player = await prisma.player.findUnique({
      where: { id: +id },
    });
    res.status(201).send({ message: "player sent!", player });
  } catch (err) {
    console.error("couldnt get player", err);
  }
});

app.put("/api/players/:id", async (req, res, next) => {
  const { id } = req.params;
  const { status } = req.body;
  try {
    const player = await prisma.player.update({
      where: { id: +id },
      data: { status: status },
    });
    res.status(201).send({ message: "status updated!", player });
  } catch (err) {
    console.error("couldnt change status", err);
  }
});

app.delete("/api/players/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    await prisma.player.delete({
      where: { id: +id },
    });
    res.status(204).send({ message: "deleted player!" });
  } catch (err) {
    console.error("couldnt delete player", err);
  }
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
