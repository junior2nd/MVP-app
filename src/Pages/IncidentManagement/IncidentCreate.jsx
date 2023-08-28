import React from "react";
import HeadingEngThai from "../../Components/Common/HeadingEngThai";
import IncidentList from "../../components/Common/IncidentList";
import IncidentCreateForm from "../../components/Common/IncidentCreateForm";

function CreateIncident() {
  return (
    <div>
      <div className="grid grid-cols-6 gap-4">
        <div className="col-span-4">
          <HeadingEngThai eng={"Incident Report"} th={"แบบฟอร์มการแจ้งปัญหา"} />
          <IncidentCreateForm />
        </div>
        <div className="col-span-2 bg-white px-4 rounded-xl shadow-md">
          <HeadingEngThai eng={"Incident List"} th={"รายงานการแจ้งปัญหาทั้งหมด"} center={true} border={true}/>
          <IncidentList />
        </div>
      </div>
    </div>
  );
}

export default CreateIncident;
