/* React stuff */
import React from 'react';
import { Text } from 'react-native';

/* Types */
import { RootStackParamList } from '../../../App';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import styled from 'styled-components/native';

type SearchProductType = NativeStackScreenProps<RootStackParamList>;

/* Styled components */
const FloatingMenu = styled.TouchableOpacity`
  background-color: #de0165c9;
  border: 1px solid #de0164;
  height: 48px;
  width: 48px;
  border-radius: 100px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const FloatingMenuContainer = styled.View`
  width: 100%;
`;

export default function CustomFloatingMenu({ navigation }: { navigation: SearchProductType['navigation'] }) {
  return (
    <FloatingMenuContainer style={{ paddingBottom: 16, position: 'absolute', bottom: 0, right: 8, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }} >
      <FloatingMenu onPress={() => navigation.navigate('CreateEditProduct', { fromScreen: 'SearchProduct' })} >
        <Text style={{ fontSize: 20, color: 'white' }} >+</Text>
      </FloatingMenu>
    </FloatingMenuContainer>
  );
};
