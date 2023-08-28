import React from "react";
import Logo from "../../assets/Logo-icon.png";

function IncidentList() {
  return (
    <div className="pb-3">
      <ul class="max-w-md divide-y divide-gray-200  ">
        <li class="pb-3 sm:pb-4">
          <div class="flex items-center space-x-4">
            <div class="flex-shrink-0">
              <img class="w-8 h-8 rounded-full" src={Logo} alt="Neil image" />
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-medium text-gray-900 truncate ">
                Avengers: Endgame
              </p>
              <p class="text-sm text-gray-500 truncate ">
                Marvel Studios
              </p>
            </div>
            <div class="inline-flex items-center text-base font-semibold text-green-900 ">
              กำลังฉาย
            </div>
          </div>
        </li>
        <li class="py-3 sm:py-4">
          <div class="flex items-center space-x-4">
            <div class="flex-shrink-0">
              <img class="w-8 h-8 rounded-full" src={Logo} alt="Neil image" />
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-medium text-gray-900 truncate ">
                The Lion King
              </p>
              <p class="text-sm text-gray-500 truncate ">
                Walt Disney Pictures
              </p>
            </div>
            <div class="inline-flex items-center text-base font-semibold text-green-900 ">
              กำลังฉาย
            </div>
          </div>
        </li>
        <li class="py-3 sm:py-4">
          <div class="flex items-center space-x-4">
            <div class="flex-shrink-0">
              <img class="w-8 h-8 rounded-full" src={Logo} alt="Neil image" />
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-medium text-gray-900 truncate ">
                Joker
              </p>
              <p class="text-sm text-gray-500 truncate ">
                Warner Bros. Pictures
              </p>
            </div>
            <div class="inline-flex items-center text-base font-semibold text-green-900 ">
              กำลังฉาย
            </div>
          </div>
        </li>
        <li class="py-3 sm:py-4">
          <div class="flex items-center space-x-4">
            <div class="flex-shrink-0">
              <img class="w-8 h-8 rounded-full" src={Logo} alt="Neil image" />
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-medium text-gray-900 truncate ">
                Spider-Man: No Way Home
              </p>
              <p class="text-sm text-gray-500 truncate ">
                Sony Pictures
              </p>
            </div>
            <div class="inline-flex items-center text-base font-semibold text-red-900 ">
              ออกแล้ว
            </div>
          </div>
        </li>
        <li class="py-3 sm:py-4">
          <div class="flex items-center space-x-4">
            <div class="flex-shrink-0">
              <img class="w-8 h-8 rounded-full" src={Logo} alt="Neil image" />
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-medium text-gray-900 truncate ">
                Spider-Man: No Way Home
              </p>
              <p class="text-sm text-gray-500 truncate ">
                Sony Pictures
              </p>
            </div>
            <div class="inline-flex items-center text-base font-semibold text-red-900 ">
              ออกแล้ว
            </div>
          </div>
        </li>
        <li class="py-3 sm:py-4">
          <div class="flex items-center space-x-4">
            <div class="flex-shrink-0">
              <img class="w-8 h-8 rounded-full" src={Logo} alt="Neil image" />
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-medium text-gray-900 truncate ">
                Spider-Man: No Way Home
              </p>
              <p class="text-sm text-gray-500 truncate ">
                Sony Pictures
              </p>
            </div>
            <div class="inline-flex items-center text-base font-semibold text-red-900 ">
              ออกแล้ว
            </div>
          </div>
        </li>
        <li class="py-3 sm:py-4">
          <div class="flex items-center space-x-4">
            <div class="flex-shrink-0">
              <img class="w-8 h-8 rounded-full" src={Logo} alt="Neil image" />
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-medium text-gray-900 truncate ">
                Spider-Man: No Way Home
              </p>
              <p class="text-sm text-gray-500 truncate ">
                Sony Pictures
              </p>
            </div>
            <div class="inline-flex items-center text-base font-semibold text-red-900 ">
              ออกแล้ว
            </div>
          </div>
        </li>
        <li class="bg-gray-100 py-4 rounded-b-lg hover:bg-gray-200">
          <div class="flex items-center space-x-4">
            <div class="flex-1 min-w-0">
              <p class="text-sm font-medium text-center text-gray-900 truncate ">
                ดูเพิ่มเติม
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default IncidentList;
