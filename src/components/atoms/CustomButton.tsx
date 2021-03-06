/* React stuff */
import React from 'react';

/* Components */
import CustomText from './CustomText';

/* Modules */
import styled, { css } from 'styled-components/native';

/* Types */
type CustomButtonI = {
    type?: string,
    borderRight?: number,
    borderLeft?: number,
    pink?: boolean,
    green?: boolean,
    purple?: boolean
};

/* Styled components */
const CustomButtonContainer = styled.TouchableOpacity<CustomButtonI>`
  flex: 1;
  background-color: pink;
  align-items: center;
  justify-content: center;
  padding: 11px 0;
  border-radius: 100px;

  ${props => props.borderRight && css`margin-right: ${props.borderRight}px;`}
  ${props => props.pink && css`background-color: #de016576; border: 1px solid #de0164;`}
  ${props => props.green && css`background-color: #26d972;`}
  ${props => props.purple && css`background-color: #8d63ff;`}
  ${props => props.borderLeft && css`margin-left: ${props.borderLeft}px;`}
`;

export default function CustomButton({
    onPressFunction,
    type,
    text,
    borderRight,
    borderLeft,
    pink,
    green,
    purple
}: {
    onPressFunction?: Function,
    text: string
} & CustomButtonI) {
    return (
        <CustomButtonContainer
            type={type && type}
            borderRight={borderRight && borderRight}
            pink={pink}
            purple={purple}
            green={green}
            borderLeft={borderLeft && borderLeft}
            onPress={onPressFunction && (() => onPressFunction())}
        >
            <CustomText white fontSize={16} bold text={text} />
        </CustomButtonContainer>
    );
};
