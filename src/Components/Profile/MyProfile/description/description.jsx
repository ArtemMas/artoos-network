import React, {useState} from 'react';
import desc from './description.module.css';
import ProfileDataForm from "./ProfileDataForm";

const Description = ({saveProfile, profile, isOwner}) => {

    let [editMode, setEditMode] = useState(false);
    const onSubmit = (formData) => {
        saveProfile(formData).then(
            () => {
                setEditMode(false);
            }
        );
    };
    const ProfileData = ({profile, isOwner, goToEditMode}) => {
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
                return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
            })}
            </div>
        </div>
    };
    const Contact = ({contactTitle, contactValue}) => {
        return <div className={desc.contact}><b>{contactTitle}</b>: {contactValue}</div>
    };

    return ( <div>
        { editMode
            ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
            : <ProfileData goToEditMode={() => {setEditMode(true)}} profile={profile} isOwner={isOwner}/>
        } </div>
    )




};

export default Description;
