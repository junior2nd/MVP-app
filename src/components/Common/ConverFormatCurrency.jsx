import React from "react";
function ConverFormatCurrency({ value }) {
  let newValue = new Intl.NumberFormat("th-TH", {
    style: "currency",
    currency: "THB",
  }).format(value);
  return (
    <span>{newValue}</span>
  );
}

export default ConverFormatCurrency;

// How to use:
//<ConverFormatCurrency value={value} /> 