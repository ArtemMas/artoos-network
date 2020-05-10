import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import React, {FC} from "react";
import {SubmitHandler} from "redux-form/lib/reduxForm";

type Props = {
    handleSubmit: SubmitHandler<FormData>
}

const maxLength100 = maxLengthCreator(100);

const AddNewPost: FC<InjectedFormProps<Props, {}, string>> = (props) => {
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

export default reduxForm<Props>({form: 'addNewPost'})(AddNewPost);