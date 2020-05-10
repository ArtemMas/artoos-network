import React, {FC} from 'react';
import l from './Login.module.css';
import {NavLink, Redirect} from "react-router-dom";

type Props = {
    prof: {
        login: null | string
        isAuth: boolean
        logOut: () => void
    }
}

const Login: FC<Props> = (props) => {
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
