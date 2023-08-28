import React from "react";
import HeadingEngThai from '../../Components/Common/HeadingEngThai'
import MovieLastUpdate from "../../components/Common/MovieLastUpdate";
import TableMovie from "../../components/Common/TableMovie";
import Heading2 from "../../components/Common/Heading2";

function Movie() {
  return (
    <div className="flex-col">
      <HeadingEngThai eng={"Movie"} th={"ตัวจัดการหนัง"} />
      <MovieLastUpdate />
      <div className="mt-4">
        <Heading2 text={"จัดการหนัง"} />
      </div>
      <div>
        <TableMovie/>
      </div>

    </div>
  );
}

export default Movie;
