import React from "react";

import {
  Container,
  Row,
  Panel,
  Column,
  Gallery,
  Section,
  Description,
  Button,
  PriceRow
} from "./styles";

const Product: React.FC = () => {
  return (
    <Container>
      <Panel>
        <Column>
          <WarrantySection />
          <WarrantySection />
          <WarrantySection />
          <WarrantySection />
          <WarrantySection />
          <WarrantySection />
        </Column>
      </Panel>
    </Container>
  );
};

const WarrantySection = () => (
  <Section>
    <div>
      <span>
        <h4>Nome do produto</h4>
        <p className="description">
          Receba o produto que está esperando ou devolvemos seu dinheiro
        </p>
      </span>
      <PriceRow>
          <span className="symbol">R$</span>
          <span className="fraction">34</span>
          <span className="cents">99</span>
      </PriceRow>
    </div>

    <Button solid>Comprar agora</Button>
  </Section>
);

export default Product;
