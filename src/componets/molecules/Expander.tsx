/* React stuff */
import React from 'react';
import { View, Text, Image } from 'react-native';

/* Modules */ // @ts-ignore
import { Collapse, CollapseHeader, CollapseBody } from "accordion-collapse-react-native";

/* Components */
import CustomText from '../atoms/CustomText';

/* Images */
const BackButtonImage = require('../../assets/images/expand-arrow.png');

export default function Expander({ text, items, parentState }
    : {
        text: string,
        items: Array<any>,
        parentState: any
    }) {
    return (
        <Collapse
            onToggle={() => parentState.setState(() => {
                return {
                    isCategoryFiltersOpen: !parentState.state.isCategoryFiltersOpen
                }
            })}>
            <CollapseHeader>
                <View style={{ justifyContent: 'flex-end', alignItems: 'center', marginRight: 8, marginLeft: 8, marginTop: 16, flexDirection: 'row' }} >
                    <CustomText marginRight={10} fontSize={16} white text={text} />
                    {!parentState.state.isCategoryFiltersOpen ? <Image style={{ width: 14, height: 14 }} source={BackButtonImage} /> : <Text style={{ color: '#fff', fontSize: 18 }}>x</Text>}
                </View>
            </CollapseHeader>

            <CollapseBody>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }} >
                    {items}
                </View>
            </CollapseBody>
        </Collapse>
    );
};
