import React from 'react';
import post from './Post.module.css';

const Post = (props) => {
   return (
      <div>
         <img className={post.img} src='https://avatars.mds.yandex.net/get-pdb/1245924/fd5f090c-f70d-48d0-b2c0-b6bd441301c4/s1200' alt='avaaaa' />
         <div>
            <span> {props.message} </span>
         </div>
         <div>
            <span> {props.likes} like</span>
         </div>
      </div>
   );
}

export default Post;
