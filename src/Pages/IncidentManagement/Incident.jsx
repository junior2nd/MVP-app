import React from "react";
import HeadingEngThai from "../../Components/Common/HeadingEngThai";
import TableIncident from "../../components/Common/TableIncident";

function Incident() {
  return (
    <div className="flex-col">
      <HeadingEngThai eng={"Incident Report"} th={"รายงานเหตุการณ์"} />
      <div>
        <TableIncident />
      </div>
    </div>
  );
}

export default Incident;
