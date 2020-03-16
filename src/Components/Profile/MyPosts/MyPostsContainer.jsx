import React from 'react';
import MyPosts from './MyPosts';
import {addPostCreator} from '../../../Redux/profile-reducer';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
   return {
      posts: state.profilePage.posts,
      newPostText: state.profilePage.newPostText
   }
}

let mapDispatchToProps = (dispatch) => {
   return {
      addPost: (newPost) => {
         dispatch(addPostCreator(newPost));
      }
   }
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
