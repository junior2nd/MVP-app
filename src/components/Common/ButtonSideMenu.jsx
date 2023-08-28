import React from "react";
import {
  BiBarChartAlt,
  BiCameraMovie,
  BiCommentDetail,
  BiCalendarCheck,
  BiCycling,
} from "react-icons/bi";
import { NavLink } from "react-router-dom";

function ButtonSideMenu({ title,link }) {
  return (
    <NavLink to={`${link}`}>
      <div className="flex items-center py-2 px-4 rounded hover:bg-sky-900 hover:text-white">
        {title === "Dashboard" && <BiBarChartAlt className="mr-2 w-6 h-6" />}
        {title === "Movies" && <BiCameraMovie className="mr-2 w-6 h-6" />}
        {title === "IncidentReport" && (
          <BiCommentDetail className="mr-2 w-6 h-6" />
        )}
        {title === "PreventiveMainternance" && (
          <BiCalendarCheck className="mr-2 w-6 h-6" />
        )}
        {title === "Setting" && <BiBarChartAlt className="mr-2 w-6 h-6" />}
        {title === "LogOut" && <BiCycling className="mr-2 w-6 h-6" />}
        {title}
      </div>
    </NavLink>
  );
}

export default ButtonSideMenu;
