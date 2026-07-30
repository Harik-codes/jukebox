import express from "express";
import {
  getPlaylist,
  getPlaylists,
  getTracksInPlaylist,
  addPlaylist,
  addTrackToPlaylists,
} from "#db/queries/playlists";

const playlistRouter = express.Router();

playlistRouter.get("/", async (req, res, next) => {
  res.send(await getPlaylists());
});

playlistRouter.post("/", async (req, res, next) => {
  res.send(await addPlaylist(req.body));
});

playlistRouter.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  res.send(await getPlaylist(id));
});

playlistRouter.get("/:id/tracks", async (req, res, next) => {
  const { id } = req.params;
  res.send(await getTracksInPlaylist(id));
});

playlistRouter.post("/:id/tracks", async (req, res, next) => {
  const { id } = req.params;
  const { trackId } = req.body;
  if (!trackId) {
    throw Error("id not given");
  }
  res.status(201).send(await addTrackToPlaylists(id, req.body));
});

export default playlistRouter;
