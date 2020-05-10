import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import React, {FC} from "react";
import {Textarea} from "../common/FormsControls/FormsControls";

type Props = {
    handleSubmit: () => void
}

const maxLength50 = maxLengthCreator(50);

const AddMessageForm: FC<InjectedFormProps<Props, {}, string>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name='newMessageBody'
                       validate={[required, maxLength50]}
                       placeholder='Enter your message'/>
            </div>
            <div><button>Send</button></div>
        </form>
    )
};

export default reduxForm<Props>({form: 'dialogsAddMessageForm'})(AddMessageForm);