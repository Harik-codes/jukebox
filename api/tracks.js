import express from "express";
import { getTrack, getTracks } from "#db/queries/tracks";

const trackRouter = express.Router();

trackRouter.get("/", async (req, res, next) => {
  res.send(await getTracks());
});

trackRouter.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  res.send(await getTrack(id));
});

export default trackRouter;
