import React, {FC} from "react";
import desc from './description.module.css';
import {createField, Input, Textarea} from "../../../common/FormsControls/FormsControls";
import {InjectedFormProps, reduxForm} from "redux-form";
import style from "../../../common/FormsControls/FormsControls.module.css";
import {FormDataType, ProfileType} from "../../../../Types/types";

type Props = {
    handleSubmit: () => void
    profile: ProfileType
    error: string
}

const ProfileDataForm: FC<Props> = ({handleSubmit, profile, error}) => {
    return <form onSubmit={handleSubmit}>
        <div><button>save</button></div>
        {error && <div className={style.formSummaryError}>
            {error}
        </div>
        }
        <div>
            <b>Full name</b>: {createField("Full name", "fullName", [], Input)}
        </div>
        <div>
            <b>Looking for a job</b>: { createField("", "lookingForAJob", [], Input, {type: "checkbox"} )}
        </div>

        <div>
            <b>My professional skills</b>:
            { createField("My professional skills", "lookingForAJobDescription", [], Textarea  )}
        </div>


        <div>
            <b>About me</b>:
            { createField("About me", "aboutMe", [], Textarea  )}
        </div>
        <div>
            <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
            return <div key={key} className={desc.contact}>
                <b>{key}: {createField(key, "contacts." + key, [], Input)}</b>
            </div>
        })}
        </div>
    </form>
};

// @ts-ignore
const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm);

export default ProfileDataFormReduxForm;