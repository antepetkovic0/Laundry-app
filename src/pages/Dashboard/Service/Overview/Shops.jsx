import React from "react";
import {
  BlockWrapper,
  Title,
  Content,
  SubTitle,
} from "../../style/dashboardBlocks";

const Shops = () => (
  <BlockWrapper gridArea="shops">
    <Title>Shops</Title>
    <Content>
      <div>
        <SubTitle>Total</SubTitle>
        12000$
      </div>
      <div>
        <SubTitle>Today</SubTitle>
        300$
      </div>
    </Content>
  </BlockWrapper>
);

export default Shops;
