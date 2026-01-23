import React, { useState, useEffect } from "react";
import { supabase } from "../client.js";
import CreatorCard from "../components/CreatorCard.jsx";

function ShowCreators() {
  const [creators, setCreators] = useState([]);

  useEffect(() => {
    fetchCreators();
  }, []);

  const fetchCreators = async () => {
    const { data, error } = await supabase.from("creators").select("*");
    if (error) {
      console.error("Supabase error:", error);
      setCreators([]);
    } else {
      setCreators(data);
    }
  };

  if (creators.length === 0) return <p>No creators yet!</p>;

  return (
    <div className="creators-list">
      {creators.map((creator) => (
        <CreatorCard key={creator.id} creator={creator} />
      ))}
    </div>
  );
}

export default ShowCreators;
