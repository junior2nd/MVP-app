import React from "react";
import { Link } from "react-router-dom";
import { BiPlus, BiTrash, BiShow, BiEdit } from "react-icons/bi";

function Button({ text, style, link }) {
  return (
    <Link to={`${link}`}>
      <div
        className={`
          ${style === "create" && "bg-sky-500 hover:bg-sky-600"} 
          ${style === "read" && "bg-sky-700 hover:bg-sky-800"}
          ${style === "update" && "bg-amber-500 hover:bg-amber-600"}
          ${style === "delete" && "bg-red-700 hover:bg-red-800 "}
          flex items-center text-white py-2 pr-3 pl-2 rounded-lg shadow-lg`}
      >
        {style === "create" && <BiPlus className="mr-1 w-4 h-4" />}
        {style === "read" && <BiShow className="mr-1 w-4 h-4" />}
        {style === "update" && <BiEdit className="mr-1 w-4 h-4" />}
        {style === "delete" && <BiTrash className="mr-1 w-4 h-4" />}
        <div> {text}</div>
      </div>
    </Link>
  );
}

export default Button;
