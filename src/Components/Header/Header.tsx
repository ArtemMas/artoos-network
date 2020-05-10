import React, {FC} from 'react'
import he from './Header.module.css'
import Name from './name-of-net/name'
import Image from './name-of-net/image'
import Search from './search/Search'
import Login from "./Login/Login"

type Props = {
    login: null | string
    isAuth: boolean
    logOut: () => void
}

const Header: FC<Props> = (props) => {

    return (
        <header className={he.header}>
            <div className={he.nameNetwork}>
                <Image/>
                <Name/>
                <Search/>
                <Login prof={props}/>
            </div>
        </header>
    );
}

export default Header;
