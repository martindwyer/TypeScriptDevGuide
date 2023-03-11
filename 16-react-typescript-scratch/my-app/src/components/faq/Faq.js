import React from "react";

const makeFaq = (obj) => {
  return (
    <React.Fragment>
      <h2 className="accordion-header" id={"heading" + obj.key}>
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={"#collapse" + obj.key}
          aria-expanded="true"
          aria-controls={"collapse" + obj.key}
        >
          {obj.question}
        </button>
      </h2>
      <div
        id={"collapse" + obj.key}
        className="accordion-collapse collapse"
        aria-labelledby={"heading" + obj.key}
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">{obj.answer}</div>
      </div>
    </React.Fragment>
  );
};

export default makeFaq;
