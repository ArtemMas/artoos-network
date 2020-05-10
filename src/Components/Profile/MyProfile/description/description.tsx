import React, {FC, useState} from 'react';
import desc from './description.module.css';
import ProfileDataForm from "./ProfileDataForm";
import {FormDataType, ProfileType} from "../../../../Types/types";

type Props = {
    profile: ProfileType
    isOwner: boolean
    saveProfile: (profile: ProfileType) => void
}

type ProfileData = {
    profile: ProfileType
    isOwner: boolean
    goToEditMode: () => void
}

const Description: FC<Props> = ({saveProfile, profile, isOwner}) => {



    let [editMode, setEditMode] = useState(false);
    const onSubmit = (formData: ProfileType) => {
        // @ts-ignore
        saveProfile(formData).then( () => { setEditMode(false)} )
    }

    const ProfileData: FC<ProfileData> = ({profile, isOwner, goToEditMode}) => {
        return <div>
            {isOwner && <div><button onClick={goToEditMode}>edit</button></div>}
            <div>
                <b>Full name</b>: {profile.fullName}
            </div>
            <div>
                <b>Looking for a job</b>: {profile.lookingForAJob ? "yes" : "no"}
            </div>
            {profile.lookingForAJob &&
            <div>
                <b>My professional skills</b>: {profile.lookingForAJobDescription}
            </div>
            }

            <div>
                <b>About me</b>: {profile.aboutMe}
            </div>
            <div>
                <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                // @ts-ignore
                return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
            })}
            </div>
        </div>
    };

    type Contact = {
        contactTitle: string
        contactValue: string
    }

    const Contact: FC<Contact> = ({contactTitle, contactValue}) => {
        return <div className={desc.contact}><b>{contactTitle}</b>: {contactValue}</div>
    };

    return ( <div>
        { editMode
            // @ts-ignore
            ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
            : <ProfileData goToEditMode={() => {setEditMode(true)}} profile={profile} isOwner={isOwner}/>
        } </div>
    )




};

export default Description;
