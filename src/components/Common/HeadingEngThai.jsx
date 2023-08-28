import React from "react";

function HeadingEngThai({ eng, th ,center ,border}) {
  return (
    <div className={`flex-col py-4 ${center === true && 'text-center'} ${border === true && 'border-gray-200 border-b-2 mb-4'}`}>
      <div className="text-3xl">{eng}</div>
      <div className="text-sm text-gray-400">{th}</div>
    </div>
  );
}

export default HeadingEngThai;
