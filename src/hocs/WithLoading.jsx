import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import "../modal.css";

const LoadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & div:first-child {
    margin-bottom: 10px;
  }
`;

const WithLoading = (Component) => {
  function WithLoadingComponent({ isLoading, message, ...props }) {
    if (!isLoading) return <Component {...props} />;

    return (
      <LoadingWrapper>
        <div className="spinner">
          <div className="double-bounce1" />
          <div className="double-bounce2" />
        </div>
        <div>{message}</div>
      </LoadingWrapper>
    );
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
