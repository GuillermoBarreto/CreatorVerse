import React, { useEffect, useState } from "react";
import { supabase } from "../client";
import CreatorCard from "../components/CreatorCard";
import { Link } from "react-router-dom";

export default function ShowCreators() {
  const [creators, setCreators] = useState([]);

  useEffect(() => {
    fetchCreators();
  }, []);

  async function fetchCreators() {
    const { data, error } = await supabase
      .from("creators")
      .select("*");

    if (error) {
      console.error("Supabase error:", error);
    } else {
      setCreators(data);
    }
  }

  return (
    <div>
      {/* 🔹 HEADER */}
      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <h1>Creatorverse 🌌</h1>

        {/* 🔹 ADD CREATOR BUTTON */}
        <Link to="/add">
          <button className="add-button">+ Add Creator</button>
        </Link>
      </div>

      {/* 🔹 CREATOR LIST */}
      <div className="creators-list">
        {creators.length === 0 ? (
          <p>No creators yet. Add one!</p>
        ) : (
          creators.map((creator) => (
            <CreatorCard key={creator.id} creator={creator} />
          ))
        )}
      </div>
    </div>
  );
}
