import React, {ChangeEvent, FC} from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import HImage from './HeaderImage/hImage';
import MyProfile from "./MyProfile/MyProfile";
import {ProfileType} from "../../Types/types";

type Props = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (e: ChangeEvent<HTMLInputElement>) => void
    saveProfile: (formData: any) => void
}

const Profile: FC<Props> = ({profile, isOwner, savePhoto, saveProfile, status, updateStatus}) => {

   return (
      <div>
         <HImage />
         <MyProfile profile={profile}
                    isOwner={isOwner}
                    savePhoto={savePhoto}
                    saveProfile={saveProfile}
                    status={status}
                    updateStatus={updateStatus} />
         <MyPostsContainer />
      </div>
   );

};

export default Profile;
