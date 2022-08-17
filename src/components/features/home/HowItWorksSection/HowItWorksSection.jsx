import React, { useMemo, useState } from "react";
import styled from "styled-components";

import Switcher from "../../../core/Switcher/Switcher";
import Card from "./Card/Card";
import { CARDS } from "./cards";

const CardsWrapper = styled.div`
  margin-top: 3rem;
  width: 100%;
  display: inline-flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
`;

const HowItWorks = () => {
  const [role, setRole] = useState("Service");

  const cards = useMemo(() => CARDS(role), [role]);

  const handleRoleChange = (newRole) => setRole(newRole);

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
      <Switcher
        value={role}
        options={["Service", "User"]}
        onChange={handleRoleChange}
      />
      <CardsWrapper>
        {cards.map((card) => (
          <Card key={card.key} data={card} />
        ))}
      </CardsWrapper>
    </section>
  );
};

export default HowItWorks;
