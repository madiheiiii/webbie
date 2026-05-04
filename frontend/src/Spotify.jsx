import {useEffect, useState } from "react";

export default function Spotify() {
  return (
    <div className="spotify-widget">
      <iframe
        className="spotify-frame"
        src="https://open.spotify.com/embed/playlist/4e3CekKnZTr1GOzajsH19z?si=bd387d38e62d4d8d"
        width="100%"
        height="80"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        title="Spotify playlist"
      />
    </div>
  );
}
