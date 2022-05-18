import pkg from "@prisma/client";
import express, { Request, Response } from "express";

const app = express();

app.get("/hello", async (req: Request, res: Response) => {
  try {
    const { PrismaClient } = pkg;
    const prisma = new PrismaClient();
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
