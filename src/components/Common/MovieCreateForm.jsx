import React from "react";

function MovieCreateForm() {
  return (
    <section className="">
      <div className="">
        <form action="#">
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="sm:col-span-2">
              <label
                for="name"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                ชื่อภาพยนตร์
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-600 focus:border-sky-600 block w-full p-2.5  "
                placeholder="ชื่อภาพยนตร์"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                class="block mb-2 text-sm font-medium text-gray-900 "
                for="MoviePoster"
              >
                Upload ไฟล์รูปภาพยนตร์
              </label>
              <input
                class="block w-full p-1 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50  focus:outline-none  "
                aria-describedby="MoviePoster_help"
                id="MoviePoster"
                type="file"
              />
              <div
                class="mt-1 text-sm text-gray-500 dark:text-gray-300"
                id="MoviePoster_help"
              >
                ลดขนาดไฟล์ภาพก่อนอัพโหลด
              </div>
            </div>

            <div>
              <label
                for="Films"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                ค่ายภาพยนตร์
              </label>
              <select
                id="Films"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5  "
              >
                <option selected="">- เลือกค่ายภาพยนตร์ -</option>
                <option value="0">FIVESTAR</option>
                <option value="1">SONY</option>
                <option value="2">Sahamongkol</option>
              </select>
            </div>
            <div>
              <label
                for="Sound"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                ค่ายภาพยนตร์
              </label>
              <select
                id="Sound"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5  "
              >
                <option selected="">- เลือกระบบเสียง -</option>
                <option value="0">Thai</option>
                <option value="1">SoundTrack</option>
                <option value="2">Dollby Atmos</option>
              </select>
            </div>
            <div className="w-full">
              <label
                for="times"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                ความยาวหนัง{" "}
                <span className="text-xs text-gray-500">( นาที )</span>
              </label>

              <input
                type="number"
                name="times"
                id="times"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-600 focus:border-sky-600 block w-full p-2.5  "
                placeholder="ความยาวหนัง"
                required
              />
            </div>
            <div className="w-full">
              <label
                for="marketshare"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                ส่วนแบ่ง <span className="text-xs text-gray-500">( % )</span>
              </label>

              <input
                type="number"
                name="marketshare"
                id="marketshare"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-600 focus:border-sky-600 block w-full p-2.5  "
                placeholder="ส่วนแบ่ง"
                required
              />
            </div>
            {/* <div className="w-full">
              <label
                for="brand"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Brand
              </label>
              <input
                type="text"
                name="brand"
                id="brand"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-600 focus:border-sky-600 block w-full p-2.5  "
                placeholder="Product brand"
                required
              />
            </div> */}
            <div className="sm:col-span-2">
              <label
                for="description"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                รายละเอียดเพิ่มเติม
              </label>
              <textarea
                id="description"
                rows="4"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-sky-500 focus:border-sky-500  "
                placeholder="สามารถใส่รายละเอียดเพิ่มเติม หรือจดบันทึกได้"
              ></textarea>
            </div>
          </div>
          <button
            type="submit"
            className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-sky-900 rounded-lg focus:ring-4 focus:ring-sky-200 dark:focus:ring-sky-900 hover:bg-sky-800"
          >
            Add product
          </button>
        </form>
      </div>
    </section>
  );
}

export default MovieCreateForm;
