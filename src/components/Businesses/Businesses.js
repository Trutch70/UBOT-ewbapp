import React, { useState } from 'react';
import classes from './Businesses.module.css';
import ContentContainer from '../Common/ContentContainer';
import InfiniteTiles from '../Common/Tiles/InfiniteTiles';
import SearchFilters from './SearchFilters';

const Businesses = () => {
    const [filters, setFilters] = useState(null);

    const changeFiltersHandler = (filters) => {
        setFilters(filters);
    }

    return (
        <div className={`page-content ${classes['businesses']}`}>
            <section>
                <ContentContainer>
                    <div className={classes.header}>
                        <span className={"text-blue"}>Decide yourself who</span>
                        <br/>
                        <span className={"text-yellow"}>you want to support</span>
                    </div>
                    <div className={classes.filters}>
                        <SearchFilters onChange={changeFiltersHandler} />
                    </div>
                    <InfiniteTiles instantInit={true} filters={filters}/>
                </ContentContainer>
            </section>
        </div>
    );
};

export default Businesses;
