import { useState, useEffect } from "react";

function accordion({ post }) {
  const [expandAccordion, setExpandAccordion] = useState(false);
  const [rotateButton, setRotateButton] = useState(false);
  const toggleAccordion = () => {
    setExpandAccordion((expand) => !expand);
    setRotateButton((rotate) => !rotate);
  };
  return (
    <div>
      <div onClick={toggleAccordion} className="question">
        <h3>{post.title}</h3>
        <button className={`btn-round ${rotateButton ? "rotate" : ""}`}>
          <i className={`fa-solid fa-chevron-up`}></i>
        </button>
      </div>
      <div className={`answer ${expandAccordion ? "visible" : ""}`}>
        <div className="expandable">
          <p>{post.content}</p>
        </div>
      </div>
    </div>
  );
}
export default accordion;
