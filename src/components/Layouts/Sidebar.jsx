import React from "react";
import Logo from "../../assets/Logo-icon.png";
import ButtonSideMenu from "../Common/ButtonSideMenu";

function Sidebar() {
  return (
    <div className="p-3 h-screen w-1/5 fixed left-0">
      <div className=" bg-white p-3 flex flex-col mx-auto justify-between h-full rounded-xl drop-shadow-xl">
        <div className="flex flex-col gap-2 mb-4">
          <div className="flex justify-center gap-1 items-center my-6 border-b-2 border-orange-400 pb-6">
            <img
              className="w-10 h-10 rounded-full"
              src={Logo}
              alt="Rounded avatar"
            />
            <p className="text-2xl text-center font-medium text-sky-900">
              MoviePartner
            </p>
          </div>
          {/* Fix Active => index.css files */}
          <ButtonSideMenu title="Dashboard" link={"/"} />
          <ButtonSideMenu title="Movies" link={"/movie"} />
          <ButtonSideMenu title="IncidentReport" link={"/incident"} />
          <ButtonSideMenu title="PreventiveMainternance" link={"/preventive"} />
          <ButtonSideMenu title="Setting" link={"/setting"} />
          <ButtonSideMenu title="LogOut" link={"/logout"} />
        </div>
        <div className="flex justify-center gap-1 bg-gray-100 items-center py-6 h-16 border-t-2 border-gray-200 pt-6 rounded-b-lg">
          <img
            className="w-10 h-10 rounded-full"
            src={Logo}
            alt="Rounded avatar"
          />
          <div className="flex-col">
              <p className="text-xl font-medium text-orange-500">
                Supanut Meesuk
              </p>
              <p className="text-xs text-gray-400">MIS MVP</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

{
  /* <div className="flex justify-center gap-2 items-center py-3 bg-gray-100 rounded-t-xl">
            <img
              className="w-10 h-10 rounded-full"
              src={Logo}
              alt="Rounded avatar"
            />
            <div className="flex-col">
              <p className="text-xl font-medium text-orange-500">
                Supanut Meesuk
              </p>
              <p className="text-xs text-gray-400">MIS MVP</p>
            </div>
          </div> */
}
