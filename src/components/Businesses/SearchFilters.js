import React, { useEffect, useState } from 'react';
import useLocationsProvider from '../../hooks/useLocationsProvider';
import useIndustriesProvider from '../../hooks/useIndustriesProvider';
import Loader from '../Common/Loader';
import classes from './SearchFilters.module.css';

const SearchFilters = ({
    onChange = () => {}
}) => {
    const [locations, setLocations] = useState(null)
    const [industries, setIndustries] = useState(null)
    const [appliedFilters, setAppliedFilters] = useState({});
    const locationsProvider = useLocationsProvider();
    const industriesProvider = useIndustriesProvider();

    const loading = null === industries && null === locations;

    useEffect(() => {
        locationsProvider.fetchLocations()
            .then((data) => {
                setLocations(data);
            });

        industriesProvider.fetchIndustries()
            .then((data) => {
                setIndustries(data);
            });
    }, []);

    const changeLocationFilterHandler = (event) => {
        setAppliedFilters(prevState => {
            if (null === prevState) {
                prevState = {};
            }
            const newState = {...prevState, location: event.target.value};

            onChange(newState);
            return newState;
        })
    }

    const changeIndustryFilterHandler = (event) => {
        setAppliedFilters(prevState => {
            if (null === prevState) {
                prevState = {};
            }
            const newState = {...prevState, industry: event.target.value};

            onChange(newState);
            return newState;
        })
    }

    return (
        <>
            {loading && <Loader />}
            {!loading &&
                <div>
                    <span className={classes['filters-title']}>Filter by</span>
                    <select className={classes.filter} value={appliedFilters ? appliedFilters.industry : "0"} onChange={changeIndustryFilterHandler}>
                        {
                            <>
                                <option value={"0"}>--- Industry ---</option>
                                {
                                    industries !== null ? industries.map(industry => (
                                        <option key={industry.id} value={String(industry.id)}>{industry.name}</option>
                                    )) : null
                                }
                            </>
                        }
                    </select>
                    <select className={classes.filter} value={appliedFilters ? appliedFilters.location : "0"} onChange={changeLocationFilterHandler}>
                        {
                            <>
                                <option value={"0"}>--- Location ---</option>
                                {
                                    locations !== null ? locations.map(location => (
                                        <option key={location.id} value={String(location.id)}>{location.name}</option>
                                    )) : null
                                }
                            </>
                        }
                    </select>
                </div>
            }
        </>
    );
};

export default SearchFilters;
