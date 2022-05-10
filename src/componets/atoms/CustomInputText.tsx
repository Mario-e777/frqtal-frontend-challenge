/* React stuff */
import React from 'react';

/* Modules */
import styled from 'styled-components/native';

/* Styled components */
const CustomTextInputContainer = styled.TextInput`
  margin: 16px 8px 0 8px;
  background-color: #f5f6f7;
  border-radius: 100px;
  padding: 10px 20px;
`;


export default function CustomTextInput({ placeHolder }: { placeHolder?: string }) {
    return (
        <CustomTextInputContainer
            placeholder={placeHolder ? placeHolder : ''}
        />
    );
};
