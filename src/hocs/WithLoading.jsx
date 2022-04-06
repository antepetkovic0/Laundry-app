/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import "../modal.css";
import { useSelector } from "react-redux";

const LoadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & div:first-child {
    margin-bottom: 10px;
  }
`;

const WithLoading = (Component, ...actionsToCheck) => {
  function WithLoadingComponent({ ...props }) {
    const { loader, errors } = useSelector((state) => state.ui);

    const isLoading = loader.actions.some((action) =>
      actionsToCheck.includes(action.name)
    );

    const error = errors.actions.some((action) =>
      actionsToCheck.includes(action.name)
    );

    if (isLoading) {
      return <div className="loader" />;
    }

    if (error) {
      return <div>Oops. Error exists</div>;
    }

    return <Component {...props} />;
  }

  return WithLoadingComponent;
};

// WithLoadingComponent.defaultProps = {
//   message: "",
// };

// WithLoadingComponent.propTypes = {
//   isLoading: PropTypes.bool.isRequired,
//   message: PropTypes.string,
// };

export default WithLoading;
