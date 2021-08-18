import React from "react";
import styled from "styled-components";
import Divider from "../../../../components/Divider/Divider";
import Radio from "../../../../components/Radio/Radio";

import useDeviceDetect from "../../../../hooks/useDeviceDetect";
import { theme } from "../../../../styled/theme";
import Header from "../../../Auth/components/Header";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 0.4rem;
  box-shadow: 0 1rem 3rem rgb(0 0 0 / 5%);
`;

const GroupLabel = styled.div`
  font-size: 1rem;
  font-weight: 700;
  text-transform: uppercase;
  color: ${theme.text.alt};
  margin-top: 1rem;
`;

const Appearance = () => {
  const { isMobile } = useDeviceDetect();

  return (
    <Wrapper style={!isMobile && { padding: "1rem" }}>
      {isMobile ? (
        <Header title="Appearance" css={{ padding: "0.5rem 0" }} />
      ) : (
        <h2>Appearence</h2>
      )}
      <div style={{ marginTop: "1rem" }}>
        <GroupLabel>Theme</GroupLabel>
        <Radio id="light" name="mode" label="Light mode" />
        <Radio id="dark" name="mode" label="Dark mode" />
        <Divider color={theme.neutral.two} weight={2} />
        <GroupLabel>Font size</GroupLabel>
        <Radio id="small" name="font_size" label="Small" />
        <Radio id="medium" name="font_size" label="Medium" />
        <Radio id="large" name="font_size" label="Large" />
      </div>
    </Wrapper>
  );
};

export default Appearance;
