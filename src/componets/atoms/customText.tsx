/* React stuff */
import React from 'react';
import { Text } from 'react-native';

/* Modules */
import styled from 'styled-components/native';

/* Styled components */
const CustomTextContainer = styled.Text<{ white: Boolean, marginBottom?: Number, bold: Boolean, fontSize: Number }>`
    color: ${props => props.white ? 'white' : 'black'};
    margin-bottom: ${props => props.marginBottom ? props.marginBottom : 0}px;
    font-family: ${props => props.bold ? 'NotoSans_700Bold' : 'NotoSans_400Regular'};
    font-size: ${props => props.fontSize ? props.fontSize : 14}px;
`;

import {
    useFonts,
    NotoSans_400Regular,
    NotoSans_700Bold
} from "@expo-google-fonts/noto-sans";

export default function CustomText({ fontSize, text, numOfLines, white, marginBottom, bold }: { fontSize?: Number, bold?: Boolean, text: String, numOfLines?: Number, white?: Boolean, marginBottom?: Number }) {
    /* Loading fonts */
    useFonts({ NotoSans_400Regular, NotoSans_700Bold });

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