/* React stuff */
import React, { useEffect, useState } from 'react';

/* Components */
import CustomTextInput from '../atoms/CustomInputText';
import Expander from '../molecules/Expander';
import SwitchBadge from '../atoms/SwitchBadge';

/* Vars */
/* Category switcher to controll category selected */
let categorySwitcher = {};

export default function FilterProducts({ parentState, categories }
    : {
        parentState: any,
        categories: Array<string>
    }) {
    /* States */
    const [state, setState] = useState({
        isCategoryFiltersOpen: false,
        categorySelected: {}
    });

    /* Effects */
    useEffect(() => { /* Populating category switcher with categories */
        categories.forEach((category: string) => categorySwitcher = { ...categorySwitcher, [category]: false });
        setState({ ...state, categorySelected: categorySwitcher });
    }, [categories]);

    useEffect(() => { /* Filter categories to set selected *///@ts-ignore
        const FilterBy = state.categorySelected && Object.keys(state.categorySelected).filter(key => state.categorySelected[key]);
        parentState.setState({ ...parentState.state, filterCategory: FilterBy ? FilterBy[0] : '' });
    }, [state.categorySelected]);

    return (
        <>
            <CustomTextInput rounded fieldToFill={'filterText'} parentState={parentState} placeHolder='Buscar producto por titulo' />
            <Expander
                parentState={{ state, setState }}
                text={state.isCategoryFiltersOpen ? 'Limpar filtros' : 'Filtrar por categoria'}
                items={categories.map(category => <SwitchBadge
                    key={`${category}-key`}
                    text={category}
                    categorySwitcher={categorySwitcher}
                    parentState={{ state, setState }}
                    switchable
                    margin={7}
                />)}
            />
        </>
    );
};
