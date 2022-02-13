import React from "react";
import PropTypes from "prop-types";

import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../styled/theme";
import Icon from "../components/Icon/Icon";
import { breakpoint } from "../styled/breakpoint";
import RegisterImg from "../assets/images/register_feature_small.jpg";

const Header = styled.div`
  width: -webkit-fill-available;
  height: 38px;
  display: flex;
  padding: 0.5rem 1rem;
  font-size: 1.6rem;
  font-weight: 500;
  z-index: 10;
`;

const BackContainer = styled.div`
  display: flex;
  align-items: center;

  span {
    margin-left: 0.5rem;
  }
`;

const StyledLink = styled(Link)`
  fill: ${theme.text.def};
  color: ${theme.text.def};

  &:hover {
    fill: ${theme.primary.def};
    color: ${theme.primary.def};
  }
`;

const ContentContainer = styled.div`
  padding: 2rem 4rem;
`;

const Banner = styled.div`
  width: 100%;
  min-height: 20rem;
  padding: 0 2rem;
  background-image: url(${RegisterImg});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  display: flex;
  align-items: flex-end;

  @media ${breakpoint.tablet} {
    width: 50%;
    min-height: 100%;
  }
`;

const AuthLayout = ({ children }) => {
  const location = useLocation();
  const { pathname } = location;

  const linkTo = pathname === "/password-forgot" ? "/sign-in" : "/";

  return (
    <div>
      <Header>
        <StyledLink to={linkTo}>
          <BackContainer>
            <Icon name="back" />
          </BackContainer>
        </StyledLink>
      </Header>
      <ContentContainer>
        <Banner />
        <div>{children}</div>
      </ContentContainer>
    </div>
  );
};

AuthLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthLayout;

// const Header = ({ css, title }) => {
//   const location = useLocation();

//   const getPath = (isAuthLocation) => {
//     const urlTo =
//       isAuthLocation !== "/auth"
//         ? {
//             pathname: "/auth",
//             state: { isSignup: false },
//           }
//         : "/";
//     return urlTo;
//   };

//   return (
//     <Wrapper style={{ ...css }}>
//       <LinkStyled to={getPath(location.pathname)}>
//         <Back>
//           <Icon name="back" />
//           {/* <span>{title}</span> */}
//         </Back>
//       </LinkStyled>
//     </Wrapper>
//   );
// };
