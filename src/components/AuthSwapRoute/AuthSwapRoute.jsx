import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";

import { theme } from "../../styled/theme";

const AuthSwap = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
  font-size: 1.2rem;

  button {
    color: ${theme.gray.dark};
  }
`;

const AuthSwapRoute = ({ swapToLoginRoute }) => (
      <AuthSwap>
        <span style={{ marginRight: "5px" }}>Don&apos;t have account?</span>
        <Link to="/auth/sign-up">Sign Up</Link>
      </AuthSwap>
  );
};

export default AuthSwapRoute;
