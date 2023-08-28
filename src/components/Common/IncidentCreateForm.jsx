import React from "react";

function IncidentCreateForm() {
  return (
    <section className="">
      <div className="">
        <form action="#">
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            {/* Incident Type */}
            <div className="sm:col-span-2">
              <label
                for="IncidetnType"
                className="block mb-2 text-sm font-medium  "
              >
                ประเภทปัญหา
              </label>
              <select
                id="IncidetnType"
                className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5  "
                required
              >
                <option value="">- เลือกประภทปัญหา -</option>
                <option value="0">ปัญหาไฟฟ้าภายใน</option>
                <option value="1">ปัญหาไฟฟ้าภายนอก</option>
                <option value="2">ปัญหาแอร์</option>
                <option value="3">ปัญหาเครื่องฉาย</option>
                <option value="4">ปัญหาเครื่องเสียง</option>
                <option value="5">
                  ปัญหาอื่นๆ Internet / Server / อุปกรณ์ภายในออฟฟิศ
                </option>
              </select>
            </div>

            {/* Theter */}
            <div>
              <label for="theater" className="block mb-2 text-sm font-medium  ">
                โรงภาพยนตร์ (อ้างอิงจากจำนวนโรงจริง)
              </label>
              <select
                id="theater"
                className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5  "
                required
              >
                <option value="">- เลือกโรง -</option>
                <option value="0">1</option>
                <option value="1">2</option>
                <option value="2">3</option>
                <option value="3">4</option>
                <option value="4">5</option>
                <option value="5">ทุกโรง</option>
              </select>
            </div>

            {/* Branch */}
            <div>
              <label for="Branch" className="block mb-2 text-sm font-medium  ">
                สาขา
              </label>
              <select
                id="Branch"
                className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5  "
                required
              >
                <option value="">- เลือกสาขา -</option>
                <option value="0">บุรีรัมย์</option>
                <option value="1">ศรีสะเกษ</option>
                <option value="2">เลย</option>
                <option value="3">กาฬสินธุ์</option>
              </select>
            </div>

            {/* Damage */}
            <div className="sm:col-span-2">
              <label for="Damage" className="block mb-2 text-sm font-medium  ">
                ความรุนแรง
              </label>
              <select
                id="Damage"
                className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5  "
                required
              >
                <option value="">- เลือกระดับความรุนแรง -</option>
                <option value="0">ไม่กระทบรอบฉาย</option>
                <option value="1">เลื่อนเวลาฉาย</option>
                <option value="2">หยุดฉายชั่วคราว</option>
                <option value="3">งดรอบฉาย</option>
              </select>
            </div>

            {/* Problem Detail */}
            <div className="sm:col-span-2">
              <label for="Detail" className="block mb-2 text-sm font-medium  ">
                รายละเอียดของปัญหา
              </label>
              <textarea
                id="Detail"
                rows="2"
                className="block p-2.5 w-full text-sm  bg-gray-50 rounded-lg border border-gray-300 focus:ring-sky-500 focus:border-sky-500  "
                placeholder="ใส่รายละเอียดของปัญหา"
                required
              ></textarea>
            </div>

            {/* How to Fix */}
            <div className="sm:col-span-2">
              <label for="Fix" className="block mb-2 text-sm font-medium  ">
                แนวทางการแก้ไขปัญหาเบื้องต้น
              </label>
              <textarea
                id="Fix"
                rows="2"
                className="block p-2.5 w-full text-sm  bg-gray-50 rounded-lg border border-gray-300 focus:ring-sky-500 focus:border-sky-500  "
                placeholder="ใส่แนวทางการแก้ไขปัญหาเบื้องต้น"
                required
              ></textarea>
            </div>

            {/* Upload IMG */}
            <div className="sm:col-span-2">
              <label class="block mb-2 text-sm font-medium  " for="Upload">
                Upload ไฟล์ภาพ
              </label>
              <input
                class="block w-full text-sm p-1  border border-gray-300 rounded-lg cursor-pointer bg-gray-50  focus:outline-none "
                aria-describedby="MoviePoster_help"
                id="Upload"
                type="file"
                required
              />
              <div class="mt-1 text-sm text-gray-500  " id="MoviePoster_help">
                ลดขนาดไฟล์ภาพก่อนอัพโหลด
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-sky-900 rounded-lg focus:ring-4 focus:ring-sky-200   hover:bg-sky-800"
          >
            Save
          </button>
        </form>
      </div>
    </section>
  );
}

export default IncidentCreateForm;
