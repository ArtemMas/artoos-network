import React from 'react';
import se from './SearchPage.module.css';
import userPhoto from './../../assets/images/user.png';
import {NavLink} from 'react-router-dom'



const SearchPage = (props) => {

   let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

      let pages = [];
      for (let i = 1; i <= pagesCount; i++) {
         pages.push(i);
      }

   return (
      <div className={se.users}>
      <div>
         { pages.map( p => {
            return <span className={props.currentPage === p && se.selectedPage}
                     onClick={ (e) =>
                        {props.onPageChanged(p);
                     }}>{p}</span>
         })}

      </div>
         {
            props.users.map( u => <div key={u.id}>
               <span>
                  <div>
                     <NavLink to={'/profile/' + u.id}>
                        <img src={ u.photos.small != null ? u.photos.small : userPhoto } className={se.userPhoto}/>
                     </NavLink>
                  </div>
                  <div>
                        { u.followed
                           ? <button disabled={props.followingInProgress
                                .some(id => id === u.id)} onClick={()=> {props.unfollow(u.id) }
                                }>Remove Friend</button>
                           : <button disabled={props.followingInProgress
                                .some(id => id === u.id)} onClick={()=> {props.follow(u.id) }
                                }>Add Friend</button>
                        }
                  </div>
               </span>
               <span>
                  <span>
                     <div>{u.name}</div>
                     <div>{u.staus}</div>
                  </span>
                  <span>
                     <div>{'u.location.city'}</div>
                     <div>{'u.location.country'}</div>
                  </span>
               </span>
            </div>)
         }
      </div>
   );
}

export default SearchPage;
