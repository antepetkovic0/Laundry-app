import React from "react";

const UnderConstructionMessage = () => (
  <div className="message message--under-construction">
    <img
      className="message__image"
      src="/img/under_construction_small.jpg"
      alt="Under construction"
    />
    <h2 className="message__title">Under Construction</h2>
    <div className="message__text">
      Sorry for the dust! We know it&#96;s taking a while but sit tight and
      we&#96;ll be with you soon.
    </div>
  </div>
);

export default UnderConstructionMessage;
