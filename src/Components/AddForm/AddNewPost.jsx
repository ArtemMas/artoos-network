import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import React from "react";

const maxLength100 = maxLengthCreator(100);

const AddNewPost = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <br/>
            <Field component={Textarea} name='newPostText'
                   placeholder='Enter your post message' validate={[required, maxLength100]}/>
            <div>
                <button>Add Post</button>
            </div>
        </form>
    )
};

export default reduxForm({form: 'addNewPost'})(AddNewPost);