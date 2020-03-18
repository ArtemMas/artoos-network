import React, {FC} from 'react';
import se from './SearchPage.module.css';
import Paginator from "../common/Paginator/Paginator";
import User from "./User";
import {UserType} from "../../Types/types";

type Props = {
    currentPage: number,
    totalUsersCount: number,
    pageSize: number,
    users: Array<UserType>,
    followingInProgress: Array<number>,
    onPageChanged: (pageNumber: number) => void,
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
}

const SearchPage: FC<Props> = ({currentPage, onPageChanged, totalUsersCount, pageSize, users, ...props}) => {


   return (
       <div className={se.users}>
          <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                     totalItemsCount={totalUsersCount} pageSize={pageSize}/>
          <div>
             {users.map(u => <User user={u}
                                   followingInProgress={props.followingInProgress}
                                   key={u.id}
                                   unfollow={props.unfollow}
                                   follow={props.follow}/>
             )
             }
          </div>
       </div>
   )
};

export default SearchPage;
