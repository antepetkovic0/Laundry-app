import React from "react";

const EmptyMessage = () => (
  <div className="message message--empty">
    <img className="message__image" src="/img/empty_small.jpg" alt="Empty" />
    <div className="message__text">Nothing to find here.</div>
  </div>
);

export default EmptyMessage;
