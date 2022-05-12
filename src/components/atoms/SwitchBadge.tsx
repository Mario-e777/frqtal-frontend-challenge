/* React stuff */
import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';

/* Modules */
import styled, { css } from 'styled-components/native';

/* Types */
type SwitchBadgeI = {
  float?: boolean,
  margin?: number,
  switchable?: boolean
}

/* Styled components */
const BadgeContainer = styled.TouchableOpacity<SwitchBadgeI>`
  padding: 4px 8px;
  background-color: #de0164;
  border: 1px solid #de0164;
  border-radius: 3px;

  ${props => props.margin && css`margin: ${props.margin}px;`}
  ${props => props.switchable && css`background-color: #de016576;`}

  ${props => props.float && css`
    position: absolute;
    top: 12px;
    right: 12px;
  `}
`;

export default function SwitchBadge({
  text,
  float,
  margin,
  switchable,
  parentState,
  categorySwitcher
}: {
  categorySwitcher?: any,
  parentState?: any,
  text: string
} & SwitchBadgeI) {
  /* States */
  const [isActive, setIsActive] = useState(switchable && !switchable);

  /* Effects */
  useEffect(() => {
    setIsActive((parentState && parentState.state.categorySelected) && parentState.state.categorySelected[text])
  })

  return (
    <BadgeContainer
      float={float && float}
      margin={margin && margin}
      switchable={(switchable && !isActive) && switchable}
      onPress={() => {
        parentState && parentState.setState({ ...parentState.state, categorySelected: { ...categorySwitcher, [text]: !isActive } });
      }}
    >
      <Text style={{ fontSize: 12, marginBottom: 1, color: '#fff' }} >{text}</Text>
    </BadgeContainer>
  );
};
