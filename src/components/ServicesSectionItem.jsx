import React from 'react';
import styled from 'styled-components';
import PText from './PText';

const ItemStyle = styled.div`
  text-align: center;
  .servicesItem_icon {
    svg {
      width: 3rem;
    }
  }
  .servicesItem_title {
    font-size: 2.5rem;
    font-family: 'Montserrat SemiBold';
  }
  .para {
    margin-top: 2rem;
  }
`;

export default function ServicesSectionItem({ icon, title, desc }) {
  return (
    <ItemStyle>
      <div className="servicesItem_icon">{icon}</div>
      <div className="servicesItem_title">{title}</div>
      <PText>{desc}</PText>
    </ItemStyle>
  );
}
