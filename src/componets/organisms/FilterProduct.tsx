/* React stuff */
import React from 'react';

/* Modules */

/* Components */
import CustomTextInput from '../atoms/CustomInputText';
import Badge from '../atoms/Badge';
import Expander from '../molecules/Expander';

/* Endpoints & utils */


/* Types */


export default function FilterProducts() {
    /* Hooks */


    /* States */


    /* Effects */


    return (
        <>
            <CustomTextInput placeHolder='Buscar producto' />
            <Expander items={[
                <Badge key={'1a'} margin={7} category text={`electronics`} />,
                <Badge key={'2a'} margin={7} category text={`jewelery`} />,
                <Badge key={'3a'} margin={7} category text={`women's clothing`} />,
                <Badge key={'4a'} margin={7} category text={`men's clothing`} />
            ]} text={'Filtrar por   V'} />
        </>
    );
};
