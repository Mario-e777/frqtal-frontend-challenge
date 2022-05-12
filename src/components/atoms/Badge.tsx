/* React stuff */
import React from 'react';
import { Text } from 'react-native';

/* Modules */
import styled, { css } from 'styled-components/native';

/* Types */
type BadgeI = {
  float?: boolean, 
  margin?: number
};

/* Styled components */
const BadgeContainer = styled.View<BadgeI>`
  background-color: white;
  padding: 4px 8px;
  border-radius: 100px;
  border: 1px solid black;

  ${props => props.margin && css`margin: ${props.margin}px;`}
  ${props => props.float && css`
    position: absolute;
    top: 12px;
    right: 12px;
  `}
`;

export default function Badge({ text, float, margin }: { text: string } & BadgeI) {
  return (
    <BadgeContainer
      float={float && float}
      margin={margin && margin}
    >
      <Text style={{ fontSize: 12, marginBottom: 1 }} >{text}</Text>
    </BadgeContainer>
  );
};
