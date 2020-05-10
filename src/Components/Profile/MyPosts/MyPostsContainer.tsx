import React from 'react';
import MyPosts from './MyPosts';
import {addPostCreator, AddPostCreatorActionType} from '../../../Redux/profile-reducer';
import {connect, MapDispatchToProps, MapStateToProps} from 'react-redux';
import {AppState} from "../../../Redux/redux-store";
import {PostDataType, PostType} from "../../../Types/types";

type MapStateToPropsType = {
   posts: Array<PostType>
   newPostText: string | PostDataType
}

type MapDispatchToPropsType = {
   addPost: (newPost: string) => AddPostCreator
}

type AddPostCreator = {
   addPostCreator: (newPost: string) => void
}

let mapStateToProps = (state: AppState): MapStateToPropsType => {
   return {
      posts: state.profilePage.posts,
      newPostText: state.profilePage.newPostText
   }
}

let mapDispatchToProps = (dispatch: MapDispatchToPropsType) => {
   return {
      addPost: (newPost: string) => {
         // @ts-ignore
         dispatch(addPostCreator(newPost));
      }
   }
};

// @ts-ignore
const MyPostsContainer = connect<MapStateToPropsType, MapDispatchToPropsType, null, AppState>(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
