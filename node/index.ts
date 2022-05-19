import pkg from "@prisma/client";
import cors from "cors";
import express, { Request, Response } from "express";
const { PrismaClient } = pkg;
const prisma = new PrismaClient();

const app = express();
app.use(cors());

app.get("/hello", async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany();
    await prisma.user.create({
      data: { name: `Usuario ${Date.now()}` },
    });

    res.send({
      users,
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(5000, () => {
  console.log("Running on 5000");
});
