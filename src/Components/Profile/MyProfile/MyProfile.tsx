import React, {ChangeEvent, FC} from 'react';
import myPr from './MyProfile.module.css';
import Avatar from './avatar/avatar.jsx';
import Description from './description/description.js';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import {ProfileType} from "../../../Types/types";

type Props = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (e: ChangeEvent<HTMLInputElement>) => void
    saveProfile: (formData: any) => void
}

const MyProfile: FC<Props> = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {

   if (!profile) {
   		return <Preloader />
   }

   return (
      <div className={myPr.prof}>
         <Avatar photo={profile.photos} isOwner={isOwner} savePhoto={savePhoto} />
         <Description profile={profile} saveProfile={saveProfile} isOwner={isOwner} />
         <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
      </div>
   )
}

export default MyProfile