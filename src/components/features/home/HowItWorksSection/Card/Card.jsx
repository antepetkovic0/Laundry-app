import React from "react";
import PropTypes from "prop-types";

const Card = ({ data }) => {
  const { title, description, imageS, imageL } = data;

  return (
    <div className="card">
      <div className="card__image-box">
        <img
          className="card__image"
          src={imageS}
          srcSet={`${imageS} 500w, ${imageL} 1000w`}
          alt={title}
        />
      </div>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  data: PropTypes.exact({
    key: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    imageS: PropTypes.node,
    imageL: PropTypes.node,
  }).isRequired,
};

export default Card;
