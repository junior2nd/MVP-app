import React from "react";
import Heading from "../../components/Common/Heading";
import QuickData from "../../components/Common/QuickData";
import Heading2 from "../../components/Common/Heading2";
import MovieCard from "../../components/Common/MovieCard";
import MovieLastUpdate from "../../components/Common/MovieLastUpdate";

function Dashboard() {
  return (
    <div>
      <Heading text="Dashboard" />
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-4 gap-2">
          <QuickData
            title={"หนังเข้าใหม่"}
            value={1}
            icon={"Movie"}
            color={"sky"}
          />
          <QuickData
            title={"Incident"}
            value={0}
            icon={"Incident"}
            color={"sky"}
          />
          <QuickData title={"PM"} value={0} icon={"PM"} color={"sky"} />
          <QuickData title={"Alert"} value={0} icon={"Alert"} color={"sky"} />
        </div>
        <Heading2 text="หนังเข้าฉายล่าสุด" />
        <div>
          <MovieLastUpdate/>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
