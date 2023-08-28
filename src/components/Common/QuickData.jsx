import React from "react";
import {
  BiCameraMovie,
  BiCommentDetail,
  BiCalendarCheck,
  BiErrorCircle,
} from "react-icons/bi";

function QuickData({ value, title, icon, color }) {
  return (
    <div
      className={`bg-${color}-700 p-4 rounded-xl flex gap-3 items-center text-white shadow-xl}`}
    >
      <div className={`bg-${color}-600 p-2  rounded-lg `}>
        {icon === "Movie" && <BiCameraMovie className="w-8 h-8 fill-white" />}
        {icon === "Incident" && <BiCommentDetail className="w-8 h-8 fill-white" />}
        {icon === "PM" && <BiCalendarCheck className="w-8 h-8 fill-white" />}
        {icon === "Alert" && <BiErrorCircle className="w-8 h-8 fill-white" />}
      </div>
      <div className={`grid grid-rows-1 w-full`}>
        <div className="text-center">{title}</div>
        <div className="text-2xl text-center">{value}</div>
      </div>
    </div>
  );
}

export default QuickData;
