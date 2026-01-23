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
          style={{ width: "150px", height: "150px", objectFit: "cover" }}
        />
      )}
      <p>{creator.description}</p>
      <a href={creator.url} target="_blank" rel="noopener noreferrer">
        Visit
      </a>
      <br />
      <Link to={`/edit/${creator.id}`}>Edit</Link>
    </div>
  );
}

export default CreatorCard;
