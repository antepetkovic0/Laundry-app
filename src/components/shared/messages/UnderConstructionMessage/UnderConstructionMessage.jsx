import React from "react";

const UnderConstructionMessage = () => (
  <div className="under-construction">
    <img
      className="under-construction__image"
      src="/img/under_construction_small.jpg"
      alt="Under construction"
    />
    <h2 className="under-construction__title">Under Construction</h2>
    <div className="under-construction__message">
      Sorry for the dust! We know it&#96;s taking a while but sit tight and
      we&#96;ll be with you soon.
    </div>
  </div>
);

export default UnderConstructionMessage;
