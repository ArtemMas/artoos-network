import React, {FC} from 'react';
import se from "./SearchPage.module.css";
import {NavLink} from "react-router-dom";
import userPhoto from "../../assets/images/user.png";
import {UserType} from "../../Types/types";

type Props = {
    user: UserType
    followingInProgress: Array<number>
    follow: (userId: number) => void
    unfollow: (userId: number) => void

}

const User: FC<Props> = ({user, followingInProgress, unfollow, follow}) => {
    return (
        <div>
           <span>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                    <img src={user.photos.small != null ? user.photos.small : userPhoto}
                         className={se.userPhoto}/>
                    </NavLink>
                </div>
                <div>
                    {user.followed
                        ? <button disabled={followingInProgress
                            .some(id => id === user.id)} onClick={() => {
                            unfollow(user.id)
                        }
                        }>Remove Friend</button>
                        : <button disabled={followingInProgress
                            .some(id => id === user.id)} onClick={() => {
                            follow(user.id)
                        }
                        }>Add Friend</button>
                    }
                </div>
           </span>
            <span>
                <span>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </span>
                <span>
                    <div>{'user.location.city'}</div>
                    <div>{'user.location.country'}</div>
                </span>
            </span>
        </div>
    )
};

export default User;