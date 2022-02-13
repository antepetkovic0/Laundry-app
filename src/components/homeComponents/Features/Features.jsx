import React from "react";
import styled from "styled-components";

import {
  SectionHeader,
  SectionBorder,
  SectionTitle,
  SectionDescription,
} from "../styled";

const Section = styled.section`
  padding: 0 3rem 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Features = () => (
  <Section id="features">
    <SectionHeader>
      <SectionBorder />
      <SectionTitle>Features</SectionTitle>
      <SectionDescription>
        Manage your laundry service or order laundry clean within minutes. Sign
        up with desired role and start your journey!
      </SectionDescription>
    </SectionHeader>

    <div>there goes features</div>
  </Section>
);

export default Features;
