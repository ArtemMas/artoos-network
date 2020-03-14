import React from 'react';
import fcs from './FormsControls.module.css';
import {Field} from "redux-form";

export const Element = Element => ({input, meta: {error, touched}, ...props}) => {
    const hasError = error && touched;

    return (
        <div className={fcs.formControl + ' ' + (hasError ? fcs.error : ' ')}>
            <Element {...input} {...props} />
            {hasError && <span>{error}</span>}
        </div>
    )
};

export const Textarea = Element('textarea');

export const Input = Element('input');

export const createField = (placeholder, name, type, validators, component, props = {}, text = ' ') => (
    <div>
        <Field placeholder={placeholder} name={name} type={type}
               component={component} validate={validators}
               {...props}
        /> {text}
    </div>
);

