import React from "react";
import Moment from "react-moment";
import "../../styles/components/assets/ChipItem.css";

function ChipItem({ text, date, me }) {
  return (
    <div className={`ChipItem__content ${me ? "me" : ""}`}>
      <div className="ChipItem_chip">
        <span>{text}</span>
      </div>
      <div className="ChipItem_chip_date">
        <span>
          <Moment date={date} format="hh:mm A" />
        </span>
      </div>
    </div>
  );
}

export default ChipItem;
