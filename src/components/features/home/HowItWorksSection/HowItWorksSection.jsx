import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { SWITCH_TYPE } from "../../../../utils/constants";
import { roleOptions } from "../../../Switcher/switcherOptions";
import Switcher from "../../../Switcher/Switcher";

import { CARDS } from "./cards";
import Card from "./components/Card/Card";
import { ROLES } from "../../../../constants/roles";

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

  const cards = useMemo(() => {
    const role = switchRoleFeatures ? ROLES.USER : ROLES.SERVICE;
    return CARDS(role);
  }, [switchRoleFeatures]);

  return (
    <section id="how-it-works" className="section section--how-it-works">
      <section className="section__header">
        <div className="section__border" />
        <div className="section__title">How It works</div>
        <div className="section__description">
          Manage your laundry service or order laundry clean within minutes.
          Sign up with desired role and start your journey!
        </div>
      </section>

      <Switcher type={SWITCH_TYPE.ROLE_FEATURES} options={roleOptions} />

      <CardsWrapper>
        {cards.map((card) => (
          <Card key={card.key} data={card} />
        ))}
      </CardsWrapper>
    </section>
  );
};

export default HowItWorks;
