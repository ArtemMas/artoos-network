import {InjectedFormProps, reduxForm} from "redux-form";
import React, {FC} from "react";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {createField, Input} from "../common/FormsControls/FormsControls";
import fcs from '../common/FormsControls/FormsControls.module.css';
import {FormDataType} from "../../Types/types";
import {LoginFormValuesType} from "../Login/Login";


const maxLength40 = maxLengthCreator(40);
const maxLength20 = maxLengthCreator(20);

type Props = {
    captchaUrl: string | null
}

type LoginFormValuesTypeKeys = Extract<keyof LoginFormValuesType, string>

const LoginForm: FC<InjectedFormProps<FormDataType, Props> & Props> = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField<LoginFormValuesTypeKeys>("Email", 'login', [required, maxLength40], Input)}
            {createField<LoginFormValuesTypeKeys>("Password", "password", [required, maxLength20], Input,
                {type: "password"})}
            {createField<LoginFormValuesTypeKeys>(undefined, "rememberMe", [], Input,
                {type: "checkbox"}, "remember me")}

            { captchaUrl && <img src={captchaUrl} />}
            { captchaUrl &&  createField<LoginFormValuesTypeKeys>("Symbols from image", "captcha", [required], Input, {}) }

            {error && <div className={fcs.formSummaryError}>
                {error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
};
export default reduxForm<FormDataType, Props>({form: 'login'})(LoginForm);