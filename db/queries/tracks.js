import db from "#db/client";

export const getTracks = async () => {
  const sql = `SELECT *
                FROM tracks;`;
  const response = await db.query(sql);
  return response.rows;
};

export const getTrack = async (id) => {
  const sql = `SELECT *
                FROM tracks
                WHERE id = $1;`;
  const response = await db.query(sql, [id]);
  return response.rows[0];
};

export const addTrack = async (body) => {
  const sql = `INSERT INTO tracks(name, duration_ms) 
                VALUES ($1,$2)
                RETURNING *;`;
  const response = await db.query(sql, [body.name, body.duration]);
  return response.rows[0];
};
