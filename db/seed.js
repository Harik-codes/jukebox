import db from "#db/client";
import { addTrack } from "./queries/tracks.js";
import { addPlaylist, addTrackToPlaylists } from "./queries/playlists.js";

await db.connect();
await seed();
await db.end();
console.log("🌱 Database seeded.");

async function seed() {
  const a = await addTrack({ name: "no idea", duration: 5 });
  const b = await addTrack({ name: "no idea", duration: 5 });
  const c = await addTrack({ name: "idea no", duration: 5 });
  const d = await addTrack({ name: "clip", duration: 5 });
  const e = await addTrack({ name: "nosf", duration: 5 });
  const f = await addTrack({ name: "adf", duration: 5 });
  const g = await addTrack({ name: " ds", duration: 5 });
  const i = await addTrack({ name: "gasg", duration: 5 });
  const j = await addTrack({ name: "wrwf", duration: 5 });
  const k = await addTrack({ name: "dasgga", duration: 5 });
  const l = await addTrack({ name: "noadsf", duration: 5 });
  const m = await addTrack({ name: "adfafa", duration: 5 });
  const n = await addTrack({ name: "noadfa", duration: 5 });
  const o = await addTrack({ name: "dasfdf", duration: 5 });
  const p = await addTrack({ name: "nodsaffas", duration: 5 });
  const q = await addTrack({ name: "vccvav", duration: 5 });
  await addTrack({ name: "vsvsvvs", duration: 5 });
  await addTrack({ name: "nodfaffsfs", duration: 5 });
  await addTrack({ name: "ghfgdgd", duration: 5 });
  await addTrack({ name: "vbdsfsfw", duration: 5 });

  const x = await addPlaylist({ name: "asdfasfd", description: "adfknl" });
  const y = await addPlaylist({ name: "sdfa", description: "adfknl" });
  const z = await addPlaylist({ name: "vdcvs", description: "adfknl" });
  await addPlaylist({ name: "gfgsd", description: "adfknl" });
  await addPlaylist({ name: "ewdws", description: "adfknl" });
  await addPlaylist({ name: "adfewffw", description: "adfknl" });
  await addPlaylist({ name: "afsdafa", description: "adfknl" });
  await addPlaylist({ name: "dvsfadf", description: "adfknl" });
  await addPlaylist({ name: "fafasd", description: "adfknl" });
  await addPlaylist({ name: "asfcdvsg", description: "adfknl" });

  await addTrackToPlaylists(x.id, { trackId: a.id });
  await addTrackToPlaylists(x.id, { trackId: b.id });
  await addTrackToPlaylists(x.id, { trackId: c.id });
  await addTrackToPlaylists(x.id, { trackId: d.id });
  await addTrackToPlaylists(x.id, { trackId: e.id });
  await addTrackToPlaylists(x.id, { trackId: f.id });
  await addTrackToPlaylists(x.id, { trackId: g.id });
  await addTrackToPlaylists(x.id, { trackId: i.id });
  await addTrackToPlaylists(x.id, { trackId: j.id });
  await addTrackToPlaylists(x.id, { trackId: k.id });
  await addTrackToPlaylists(y.id, { trackId: a.id });
  await addTrackToPlaylists(y.id, { trackId: b.id });
  await addTrackToPlaylists(y.id, { trackId: c.id });
  await addTrackToPlaylists(y.id, { trackId: d.id });
  await addTrackToPlaylists(y.id, { trackId: e.id });
}
