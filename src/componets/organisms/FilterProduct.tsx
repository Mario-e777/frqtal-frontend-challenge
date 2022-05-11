/* React stuff */
import React, { useEffect, useState } from 'react';

/* Components */
import CustomTextInput from '../atoms/CustomInputText';
import Expander from '../molecules/Expander';
import SwitchBadge from '../atoms/SwitchBadge';

let categorySwitcher = { };
export default function FilterProducts({ parentState, categories }: { parentState: any, categories: Array<string> }) {
    /* States */
    const [state, setState] = useState({
        isCategoryFiltersOpen: false,
        categorySelected: { }
    });

    /* Effects */
    useEffect(() => {
        categories.forEach(category => categorySwitcher = { ...categorySwitcher, [category]: false });
        setState({ ...state, categorySelected: categorySwitcher });
    }, [categories]);

    useEffect(() => {
        const FilterBy = state.categorySelected && Object.keys(state.categorySelected).filter(key => state.categorySelected[key]);
        parentState.setState({ ...parentState.state, filterCategory: FilterBy ? FilterBy[0] : '' });
    }, [state.categorySelected]);

    return (
        <>
            <CustomTextInput parentState={parentState} placeHolder='Buscar producto por titulo' />
            <Expander 
                parentState={{state, setState}}
                items={categories.map(category => <SwitchBadge categorySwitcher={categorySwitcher} parentState={{ state, setState }} switchable key={`${category}-key`} margin={7} text={category} />)}
                text={state.isCategoryFiltersOpen ? 'Limpar filtros' : 'Filtrar por categoria'} 
            />
        </>
    );
};
