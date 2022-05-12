/* React stuff */
import React from 'react';

/* Modules */
import styled from 'styled-components/native';

/* Types */
type CustomTextI = {
    white?: boolean,
    bold?: boolean,
    fontSize?: number,
    marginLeft?: number,
    marginTop?: number,
    marginBottom?: number,
    marginRight?: number
}

/* Styled components */
const CustomTextContainer = styled.Text<CustomTextI>`
    color: ${props => props.white ? 'white' : 'black'};
    margin-bottom: ${props => props.marginBottom ? props.marginBottom : 0}px;
    margin-right: ${props => props.marginRight ? props.marginRight : 0}px;
    margin-top: ${props => props.marginTop ? props.marginTop : 0}px;
    margin-left: ${props => props.marginLeft ? props.marginLeft : 0}px;
    font-size: ${props => props.fontSize ? props.fontSize : 14}px;
    font-weight: ${props => props.bold ? 'bold' : '400'};
`;

export default function CustomText({ 
    fontSize,
    text,
    numOfLines,
    white,
    marginBottom,
    marginRight,
    marginTop,
    marginLeft, 
    bold 
}: { text: String, numOfLines?: number } & CustomTextI) {
    return (
        <CustomTextContainer
            numberOfLines={numOfLines}
            white={white && white}
            fontSize={fontSize && fontSize}
            marginBottom={marginBottom}
            marginRight={marginRight}
            marginLeft={marginLeft}
            marginTop={marginTop}
            bold={bold && bold}
        >
            {text}
        </CustomTextContainer>
    );
};
