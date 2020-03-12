import React from 'react';
import l from './Login.module.css';
import {NavLink, Redirect} from "react-router-dom";

const Login = (props) => {
    return (
        <div className={l.login}>
            <div className={l.divInput}>
                {props.prof.isAuth
                    ? <div> {props.prof.login}  <button onClick={props.prof.logOut}>Logout</button> <Redirect to={`/profile`}/> </div>
                    : <NavLink className={l.nav} to={"/login"}>Login</NavLink>}
            </div>
        </div>
    );
};

export default Login;
