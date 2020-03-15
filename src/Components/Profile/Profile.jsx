import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import HImage from './HeaderImage/hImage';
import MyProfile from "./MyProfile/MyProfile";


const Profile = (props) => {

   return (
      <div>
         <HImage />
         <MyProfile profile={props.profile}
                    isOwner={props.isOwner}
                    savePhoto={props.savePhoto}
                    saveProfile={props.saveProfile}
                    status={props.status}
                    updateStatus={props.updateStatus} />
         <MyPostsContainer />
      </div>
   );

};

export default Profile;
