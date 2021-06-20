import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import {
  SectionHeader,
  SectionBorder,
  SectionTitle,
  SectionDescription,
} from "../../style";

import Switcher from "../../../../components/Switcher/Switcher";
import Card from "../Card/Card";

import { CARD_DATA } from "../../cardData";

const Section = styled.section`
  padding: 10rem 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CardsWrapper = styled.div`
  margin-top: 3rem;
  width: 100%;
  display: inline-flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
`;

const HowItWorks = () => {
  const switchHomeRole = useSelector((state) => state.switchHomeRole);

  return (
    <Section id="how-it-works">
      <SectionHeader>
        <SectionBorder />
        <SectionTitle>How It works</SectionTitle>
        <SectionDescription>
          Manage your laundry service or order laundry clean within minutes.
          Sign up with desired role and start your journey!
        </SectionDescription>
      </SectionHeader>

      <Switcher />

      <CardsWrapper>
        {CARD_DATA(!switchHomeRole ? "SERVICE" : "USER").map((c) => (
          <Card
            key={c.title}
            image={c.image}
            title={c.title}
            description={c.description}
          />
        ))}
      </CardsWrapper>
    </Section>
  );
};

export default HowItWorks;
