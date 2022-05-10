/* React stuff */
import React from 'react';

/* Modules */
import styled from 'styled-components/native';

/* Styled components */
const CustomTextContainer = styled.Text<{ white: Boolean, marginBottom?: Number, bold: Boolean, fontSize: Number }>`
    color: ${props => props.white ? 'white' : 'black'};
    margin-bottom: ${props => props.marginBottom ? props.marginBottom : 0}px;
    font-size: ${props => props.fontSize ? props.fontSize : 14}px;
    font-weight: ${props => props.bold ? 'bold' : '400'};
`;


export default function CustomText({ fontSize, text, numOfLines, white, marginBottom, bold }: { fontSize?: Number, bold?: Boolean, text: String, numOfLines?: Number, white?: Boolean, marginBottom?: Number }) {
    return (
        <CustomTextContainer
            numberOfLines={numOfLines}
            white={white && white}
            fontSize={fontSize && fontSize}
            marginBottom={marginBottom}
            bold={bold && bold}
        >
            {text}
        </CustomTextContainer>
    );
};