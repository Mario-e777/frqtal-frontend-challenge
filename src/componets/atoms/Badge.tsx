/* React stuff */
import React from 'react';

/* Modules */
import styled from 'styled-components/native';

/* Styled components */
const BadgeContainer = styled.View`
  position: absolute;
  top: 12px;
  right: 12px;
  background-color: white;
  padding: 4px 8px;
  font-size: 12px;
  border-radius: 100px;
  border: 1px solid black;
  border-bottom-left-radius: 100px;
`;

export default function CustomText({ text}: { text: any }) {
    return (
        <BadgeContainer>
            {text}
        </BadgeContainer>
    );
};