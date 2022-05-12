/* React stuff */
import React from 'react';

/* Modules */
import styled, { css } from 'styled-components/native';

/* Styled components */
const CustomTextInputContainer = styled.TextInput<{ rounded?: boolean }>`
  margin: 8px 8px 0 8px;
  background-color: #f5f6f7;
  border-radius: ${props => props.rounded ? '100px' : '5px'};
  padding: ${props => props.rounded ? '10px 20px' : '10px 16px'};
  ${props => props.multiline && css` height: 154px; `}
`;

export default function CustomTextInput({ placeHolder, parentState, numeric, fieldToFill, multiline, numberOfLines, rounded }: { placeHolder?: string, parentState?: any, numeric?: boolean, fieldToFill: string, multiline?: boolean, numberOfLines?: number, rounded?: boolean }) {
    return (
        <CustomTextInputContainer
            onChangeText={filterText => parentState.setState({ ...parentState.state, [fieldToFill]: filterText })}
            placeholder={placeHolder ? placeHolder : ''}
            keyboardType={numeric ? 'numeric' : 'default'}
            multiline={multiline}
            textAlignVertical={multiline ? 'top' : 'center'}
            rounded={rounded}
            numberOfLines={numberOfLines}
            value={parentState.state[fieldToFill]}
        />
    );
};
