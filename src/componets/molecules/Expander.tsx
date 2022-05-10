/* React stuff */
import React from 'react';
import { View } from 'react-native';

/* Modules */ // @ts-ignore
import { Collapse, CollapseHeader, CollapseBody } from "accordion-collapse-react-native";

/* Components */
import CustomText from '../atoms/CustomText';

/* Endpoints & utils */


/* Types */


export default function Expander({ text, items }: { text: string, items: Array<any> }) {
    /* Hooks */


    /* States */


    /* Effects */


    return (
        <Collapse>
            <CollapseHeader>
                <View style={{ alignItems: 'flex-end', marginRight: 8, marginLeft: 8, marginTop: 16 }} >
                    <CustomText fontSize={16} white text={text} />
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
