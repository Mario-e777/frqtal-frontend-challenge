/* React stuff */
import React from 'react';
import { Image, Text, View, ScrollView } from 'react-native';

/* Modules */
import styled from 'styled-components/native';

/* Components */
import Badge from '../componets/atoms/Badge';

/* Styles */
import styles from '../styles/global';

/* Types */
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
type SearchProductType = NativeStackScreenProps<RootStackParamList, 'ProductDetails'>;

const ImageContainer = styled.Image`
  border-radius: 4px;
  flex: 1;
  height: 540px;
`;
const ImageViewContainer = styled.View`
  border-radius: 4px;
  flex: 1;
  height: 560px;
  border: 1px solid #8d63ff;
  margin: 8px 8px 16px 8px;
  background-color: #ffffff;
  /* padding: 14px; */
`;

export default function SearchProducts({ route }: SearchProductType) {
  return (
    <ScrollView style={styles.globalWrapper} >
      <ImageViewContainer>
        <ImageContainer
          source={{ uri: route.params.image, cache: 'only-if-cached' }}
          resizeMode='center'
        />
      </ImageViewContainer>
      <View style={{ marginLeft: 8, marginRight: 8 }} >
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }} >{`${route.params.title}`}</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', marginTop: 14 }} >
          <Text style={{ color: 'white', fontSize: 17, textAlign: 'right', alignItems: 'center' }} >{`${route.params.price}`}</Text>
          <Text style={{ fontSize: 12, color: 'white' }} >  FRQTAL</Text>
        </View>
        {/* <Text style={{ color: 'white' }} >{`${Object.keys(route.params)}`}</Text> */}
      </View>
      <View style={{marginLeft: 8, marginRight: 8, flexDirection: 'row', alignItems: 'center', marginBottom: 14 }} >
        <Text style={{color: 'white', fontSize: 16}} >Author:  </Text>
        <Badge text={`@${route.params.userName}`} />
      </View>
      <Text style={{ marginLeft: 8, marginRight: 8, color: 'white', fontSize: 16, marginBottom: 14 }}>{`${route.params.description}`}</Text>
      <View style={{ marginLeft: 8, marginRight: 8, flexDirection: 'row', alignItems: 'center', marginBottom: 14 }} >
        <Badge category text={`${route.params.category}`} />
      </View>
    </ScrollView>
  );
};
