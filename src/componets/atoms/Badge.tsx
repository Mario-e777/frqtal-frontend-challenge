/* React stuff */
import React from 'react';
import { Text } from 'react-native';

/* Modules */
import styled from 'styled-components/native';

/* Styled components */
const BadgeContainer = styled.View`
  position: absolute;
  top: 12px;
  right: 12px;
  background-color: white;
  padding: 4px 8px;
  border-radius: 100px;
  border: 1px solid black;
`;

export default function CustomText({ text}: { text: String }) {
    return (
        <BadgeContainer>
            <Text style={{ fontSize: 12 }} >{text}</Text>
        </BadgeContainer>
    );
};
