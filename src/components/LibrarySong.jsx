import React from "react";
import { playSong } from "./util";
const LibrarySong = ({
  song,
  setCurrentSong,
  audioRef,
  isPlaying,
  id,
  songs,
  setSongs,
}) => {
  const songPlayHandler = () => {
    setCurrentSong(song);
    // Bug Fix
    playSong(isPlaying, audioRef);
    const newSongs = songs.map((song) => {
      if (song.id === id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });
    setSongs(newSongs);
  };
  return (
    <div
      onClick={songPlayHandler}
      className={`library-song ${song.active ? "selected" : ""}`}
    >
      <img src={song.cover} alt={song.name} />
      <div className="song-description">
        <h2>{song.name}</h2>
        <h3>{song.artist}</h3>
      </div>
    </div>
  );
};

export default LibrarySong;
