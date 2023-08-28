import React from "react";
import Movie from "../../json/Movie.json";
import Button from "./Button";

function TableIncident() {
  return (
    <div>
      {/* Search */}
      <div className="flex justify-between items-center p-2">
        <div className="  ">
          <label for="table-search" className="sr-only">
            Search
          </label>
          <div className="relative mt-1">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="text"
              id="table-search"
              className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 shadow-lg "
              placeholder="Search for items"
            />
          </div>
        </div>
        <div>
          <Button
            text={"เพิ่มข้อมูล"}
            style={"create"}
            link={"/incident/create"}
          />
        </div>
      </div>
      {/* Search */}
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 ">
          <thead class="text-md text-gray-700 bg-gray-50 ">
            <tr>
              <th scope="col" class="px-6 py-3">
                ชื่อหนัง
              </th>
              <th scope="col" class="px-6 py-3">
                ค่ายหนัง
              </th>
              <th scope="col" class="px-6 py-3">
                วันที่เข้าฉาย
              </th>
              <th scope="col" class="px-6 py-3">
                สถานะ
              </th>
              <th scope="col" class="px-6 py-3">
                <span class="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {Movie.map((m, index) => (
              <tr class="bg-white border-b  hover:bg-gray-50 ">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                >
                  {m.title}
                </th>
                <td class="px-6 py-4">{m.studio}</td>
                <td class="px-6 py-4">{m.releaseDate}</td>
                <td class="px-6 py-4">{m.status}</td>
                <td class="flex gap-2 justify-end px-6 py-4 text-right">
                  <Button text={"ดูข้อมูล"} style={"read"} link={"/"} />
                  <Button text={"ลบ"} style={"delete"} link={"/"} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TableIncident;
