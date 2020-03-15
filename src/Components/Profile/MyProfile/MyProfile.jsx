import React from 'react';
import myPr from './MyProfile.module.css';
import Avatar from './avatar/avatar.jsx';
import Description from './description/description.jsx';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const MyProfile = ({profile, status, updateStatus, isOwner, savePhoto}) => {
   
   if (!profile) {
   		return <Preloader />
   }

   return (
      <div className={myPr.prof}>
         <Avatar photo={profile.photos} isOwner={isOwner} savePhoto={savePhoto} />
         <Description prof={profile} />
         <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
      </div>
   );
};

export default MyProfile;
