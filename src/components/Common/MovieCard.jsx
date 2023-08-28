import React from "react";
import Mi from "../../../public/MI.jpg";

function MovieCard({ title, date, status }) {
  return (
    <div className="bg-white shadow-xl w-full rounded-lg p-2 flex-col">
      <div>
        <div className="flex justify-end">
          <p className="absolute bg-green-500 m-2 px-2 text-sm text-white shadow-2xl rounded-full">{status}</p>
        </div>
        <img className="z-0" src={Mi} alt="test" />
      </div>
      <div className="flex justify-between pt-1">
        <div>{title}</div>
        <div>{date}</div>
      </div>
    </div>
  );
}

export default MovieCard;
