import React, {FC} from 'react';
import myP from './MyPosts.module.css';
import Post from './Post/Post';
import AddNewPost from "../../AddForm/AddNewPost";
import {PostType} from "../../../Types/types";

type Props = {
    posts: Array<PostType>
    addPost: (newPostText: string) => void
}

const MyPosts: FC<Props> = React.memo(props=> {

    let postsElements = [...props.posts].reverse()
        .map(p => <Post key={p.id} message={p.message} likes={p.likes}/>);

    type Values = {
        newPostText: string
    }

    let addNewPost = (values: Values) => {
        props.addPost(values.newPostText);
    };


    return (
        <div className={myP.myPosts}>
            <div className={myP.name}><b>My posts</b></div>
            // @ts-ignore
            <AddNewPost onSubmit={addNewPost}/>
            <div className={myP.posts}>
                {postsElements}
            </div>
        </div>
    );
}) ;


export default MyPosts;
