/* React stuff */
import React from 'react';
import { Text } from 'react-native';

/* Modules */
import styled, { css } from 'styled-components/native';

/* Styled components */
const BadgeContainer = styled.View<{ float: Boolean, category: Boolean }>`
  background-color: white;
  padding: 4px 8px;
  border-radius: 100px;
  border: 1px solid black;

  ${props => props.float && css`
    position: absolute;
    top: 12px;
    right: 12px;
  `}

  ${props => props.category && css`
    background-color: #de0164;
    border: 1px solid #de0164;
    border-radius: 3px;
  `}
`;

export default function Badge({ text, float = false, category = false }: { text: String, float?: Boolean, category?: Boolean }) {
    return (
        <BadgeContainer float={float && float} category={category && category} >
            <Text style={{ fontSize: 12, marginBottom: 1, color: category && 'white' }} >{text}</Text>
        </BadgeContainer>
    );
};
