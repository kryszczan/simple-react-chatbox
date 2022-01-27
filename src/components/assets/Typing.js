import React from "react";
import "../../styles/components/assets/Typing.css";

function Typing() {
  return (
    <div className="Typing__content">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="6"
        viewBox="0 0 24 6"
      >
        <g>
          <circle className="Typing__dot" cx="3" cy="3" r="3" />
          <circle className="Typing__dot" cx="12" cy="3" r="3" />
          <circle className="Typing__dot" cx="21" cy="3" r="3" />
        </g>
      </svg>
    </div>
  );
}

export default Typing;
