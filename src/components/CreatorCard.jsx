import React from "react";
import { Link } from "react-router-dom";

function CreatorCard({ creator }) {
  return (
    <div className="creator-card">
      <h3>{creator.name}</h3>
      {creator.imageURL && (
        <img
          src={creator.imageURL}
          alt={creator.name}
          loading="lazy"
          decoding="async"
          style={{ width: "150px", height: "150px", objectFit: "cover" }}
        />
      )}
      <p>{creator.description}</p>
      <a href={creator.url} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${creator.name} (opens in a new tab)`}>
        Visit
      </a>
      <br />
      <Link to={`/edit/${creator.id}`} aria-label={`Edit ${creator.name}`}>Edit</Link>
    </div>
  );
}

export default CreatorCard;
