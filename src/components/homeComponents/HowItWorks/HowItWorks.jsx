import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import {
  SectionHeader,
  SectionBorder,
  SectionTitle,
  SectionDescription,
} from "../styled";
import { SWITCH_TYPE } from "../../../utils/constants";
import { HOW_IT_WORKS_DATA } from "./cards";

import Switcher from "../../Switcher/Switcher";
import { roleOptions } from "../../Switcher/switcherOptions";
import Card from "./Card";

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
  const switchRoleFeatures = useSelector((state) => state.switchRoleFeatures);

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

      <Switcher type={SWITCH_TYPE.ROLE_FEATURES} options={roleOptions} />

      <CardsWrapper>
        {HOW_IT_WORKS_DATA(!switchRoleFeatures ? "SERVICE" : "USER").map(
          (card) => (
            <Card key={card.key} data={card} />
          )
        )}
      </CardsWrapper>
    </Section>
  );
};

export default HowItWorks;
