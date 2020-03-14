import React from 'react';
import se from './SearchPage.module.css';
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

const SearchPage = ({currentPage, onPageChanged, totalUsersCount, pageSize, users, ...props}) => {


   return (
       <div className={se.users}>
          <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                     totalUsersCount={totalUsersCount} pageSize={pageSize}/>
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
