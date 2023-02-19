import React, { useState } from "react";

export default function Seat(props) {
  const [isSelected, setSelected] = useState(false);
  const populateClassNamae = () => {
    if (props.ele.daDat) return "secondary";

    if (isSelected) return "primary";

    if (props.ele.loaiGhe === "Vip") return "warning";

    return "dark";
  };

  const handleSelectSeat = () => {
    setSelected(!isSelected);
    props.handleSelect(props.ele);
  };
  return (
    <button
      onClick={handleSelectSeat}
      disabled={props.ele.daDat}
      style={{ width: 50, height: 50, padding: 0 }}
      className={`mr-1 mb-1 btn btn-${populateClassNamae()}`}
    >
      {props.ele.tenGhe}
    </button>
  );
}
