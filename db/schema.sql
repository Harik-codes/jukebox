DROP TABLE IF EXISTS playlists CASCADE;
DROP TABLE IF EXISTS tracks CASCADE;
DROP TABLE IF EXISTS playlists_tracks CASCADE;

CREATE TABLE playlists(
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT NOT NULL
);

CREATE TABLE tracks(
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    duration_ms INT NOT NULL
);

CREATE TABLE playlists_tracks(
    id SERIAL PRIMARY KEY,
    playlist_id INT REFERENCES playlists(id) ON DELETE CASCADE NOT NULL,
    track_id INT REFERENCES tracks(id) ON DELETE CASCADE NOT NULL,
    UNIQUE (playlist_id,track_id)
);