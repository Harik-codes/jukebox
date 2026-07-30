import express from "express";
import playlistRouter from "#api/playlists";
import trackRouter from "#api/tracks";

const app = express();

app.use(express.json());

app.use("/tracks", trackRouter);

app.use("/playlists", playlistRouter);

export default app;
