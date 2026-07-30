import db from "#db/client";

export async function getPlaylists() {
  const sql = `SELECT *
                FROM playlists;`;
  const response = await db.query(sql);
  return response.rows;
}

export async function getPlaylist(id) {
  const sql = `SELECT *
                FROM playlists
                WHERE id = $1;`;
  const response = await db.query(sql, [id]);
  return response.rows[0];
}

export async function getTracksInPlaylist(id) {
  const sql = `SELECT tracks.*
                FROM tracks 
                JOIN playlists_tracks ON tracks.id = playlists_tracks.track_id
                WHERE playlists_tracks.playlist_id= $1;`;
  const response = await db.query(sql, [id]);
  return response.rows;
}

export async function addPlaylist(body) {
  const sql = `INSERT INTO playlists(name, description) 
                    VALUES ($1, $2)
                    RETURNING *;`;
  const response = await db.query(sql, [body.name, body.description]);
  return response.rows[0];
}

export async function addTrackToPlaylists(id, body) {
  const sql = `INSERT INTO playlists_tracks (track_id, playlist_id) 
                VALUES ($1, $2)
                RETURNING *;`;
  const response = await db.query(sql, [body.trackId, id]);
  return response.rows[0];
}
