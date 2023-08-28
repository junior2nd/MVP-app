import React from "react";
import MovieCard from "../../components/Common/MovieCard";

function MovieLastUpdate() {
  return (
    <div className="grid grid-cols-5 gap-2">
      <div>
        <MovieCard title="Mission" date="12/02/56" status="ยังฉายอยู่" />
      </div>
      <div>
        <MovieCard title="Mission" date="12/02/56" status="ยังฉายอยู่" />
      </div>
      <div>
        <MovieCard title="Mission" date="12/02/56" status="ยังฉายอยู่" />
      </div>
      <div>
        <MovieCard title="Mission" date="12/02/56" status="ยังฉายอยู่" />
      </div>
      <div>
        <MovieCard title="Mission" date="12/02/56" status="ยังฉายอยู่" />
      </div>
    </div>
  );
}

export default MovieLastUpdate;
