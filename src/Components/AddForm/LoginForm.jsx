import {Field, reduxForm} from "redux-form";
import React from "react";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {Input} from "../common/FormsControls/FormsControls";
import fcs from '../common/FormsControls/FormsControls.module.css';


const maxLength40 = maxLengthCreator(40);
const maxLength20 = maxLengthCreator(20);

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"login"} name={'login'}
                       component={Input} validate={[required, maxLength40]}/>
            </div>
            <div>
                <Field placeholder={"password"} name={'password'} type={"password"}
                       component={Input} validate={[required, maxLength20]}/>
            </div>
            <div>
                <Field component={"input"} name={'rememberMe'}
                       type={"checkbox"}/> remember me
            </div>
            { props.error && <div className={fcs.formSummaryError}>
                {props.error}
            </div> }
            <div>
                <button >Login</button>
            </div>
        </form>
    )
};
export default reduxForm({form: 'login'})(LoginForm);