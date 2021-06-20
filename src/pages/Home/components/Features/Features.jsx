import React from "react";
import styled from "styled-components";

import {
  SectionHeader,
  SectionBorder,
  SectionTitle,
  SectionDescription,
} from "../../style";

const Section = styled.section`
  padding: 0 3rem 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// const CardsWrapper = styled.div`
//   margin-top: 3rem;
//   width: 100%;
//   display: inline-flex;
//   flex-wrap: wrap;
//   gap: 2rem;
//   justify-content: center;
// `;

const Features = () => {
  console.log("blala");
  return (
    <Section id="features">
      <SectionHeader>
        <SectionBorder />
        <SectionTitle>Features</SectionTitle>
        <SectionDescription>
          Manage your laundry service or order laundry clean within minutes.
          Sign up with desired role and start your journey!
        </SectionDescription>
      </SectionHeader>

      <div>dsdsda</div>
    </Section>
  );
};

export default Features;
