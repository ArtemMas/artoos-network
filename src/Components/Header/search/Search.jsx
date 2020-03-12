import React from 'react';
import s from './Search.module.css';
import {NavLink} from "react-router-dom";

const Search = () => {
    return (
        <div className={s.search}>
            <div className={s.divInput}>
                <input type='text' className='{s.input}'>

                </input>
                <NavLink className={s.nav} to={'/search'}>Search</NavLink>
            </div>
        </div>
    );
}

export default Search;
