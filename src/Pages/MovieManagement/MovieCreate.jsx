import React from "react";
import HeadingEngThai from "../../Components/Common/HeadingEngThai";
import MovieCreateForm from "../../components/Common/MovieCreateForm";
import MovieList from "../../components/Common/MovieList";

function MovieCreate() {
  return (
    <div>
      <div className="grid grid-cols-6 gap-4">
        <div className="col-span-4">
          <HeadingEngThai eng={"Create Movie"} th={"เพิ่มภาพยนตร์"} />
          <MovieCreateForm />
        </div>
        <div className="col-span-2 bg-white px-4 rounded-xl shadow-md">
          <HeadingEngThai eng={"Movie Lists"} th={"รายชื่อภาพยนตร์ทั้งหมด"} center={true} border={true}/>
          <MovieList/>
        </div>
      </div>
    </div>
  );
}

export default MovieCreate;
