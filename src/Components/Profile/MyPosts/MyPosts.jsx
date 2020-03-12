import React from 'react';
import myP from './MyPosts.module.css';
import Post from './Post/Post';
import AddNewPost from "../../AddForm/AddNewPost";


const MyPosts = React.memo(props=> {

    let postsElements = [...props.posts].reverse().map(p => <Post message={p.message} likes={p.likes}/>);

    let addNewPost = (values) => {
        props.addPost(values.newPostText);
    };


    return (
        <div className={myP.myPosts}>
            <div className={myP.name}><b>My posts</b></div>
            <AddNewPost onSubmit={addNewPost}/>
            <div className={myP.posts}>
                {postsElements}
            </div>
        </div>
    );
}) ;


export default MyPosts;
