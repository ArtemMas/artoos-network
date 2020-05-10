import React from 'react';
import fcs from './FormsControls.module.css';
import {Field, WrappedFieldMetaProps, WrappedFieldProps} from "redux-form";
import {FieldValidator} from "../../../utils/validators/validators";


type FormControlPropsType = {
    meta: WrappedFieldMetaProps
}

const FormControl: React.FC<FormControlPropsType> = ({meta: {touched, error}, children}) => {
    const hasError = touched && error;
    return (
        <div className={fcs.formControl + " " + (hasError ? fcs.error : "")}>
            <div>
                {children}
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
}

export const Textarea: React.FC<WrappedFieldProps> = (props) => {
    //const {input, meta, child, ...restProps} = props;
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
}

export const Input: React.FC<WrappedFieldProps> = (props) => {
    //const {input, meta, child, ...restProps} = props;
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
}


export function createField<FormKeysType extends string>(placeholder: string | undefined,
                                                         name: FormKeysType,
                                                         validators: Array<FieldValidator>,
                                                         component: React.FC<WrappedFieldProps>,
                                                         props = {}, text = "") {
    return <div>
        <Field placeholder={placeholder} name={name}
               validate={validators}
               component={component}
               {...props}
        /> {text}
    </div>
}




//type ComponentType = (params: Props) => React.ReactNode

//export const Element: React.FC<ComponentType> = (Element) => ({input, meta: {error, touched}, ...props}) => {
//const hasError = error && touched;

//return (
//<div className={fcs.formControl + ' ' + (hasError ? fcs.error : ' ')}>
// <Element {...input} {...props} />
//{hasError && <span>{error}</span>}
//</div>
//)
//};

//export const Textarea = Element('textarea');

//export const Input = Element('input');


