import React, {FC} from 'react';
import post from './Post.module.css';

type Props = {
    message: string
    likes: string
}

const Post: FC<Props> = ({message, likes}) => {
   return (
      <div>
         <img className={post.img} src='https://avatars.mds.yandex.net/get-pdb/1245924/fd5f090c-f70d-48d0-b2c0-b6bd441301c4/s1200' alt='avaaaa' />
         <div>
            <span> {message} </span>
         </div>
         <div>
            <span> {likes} like</span>
         </div>
      </div>
   );
}

export default Post;
