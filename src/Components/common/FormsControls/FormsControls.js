import React from 'react';
import fcs from './FormsControls.module.css';

export const Element = Element => ({input, meta, ...props}) => {
    const hasError = meta.error && meta.touched;

    return (
        <div className={fcs.formControl + ' ' + (hasError ? fcs.error : ' ')}>
            <Element {...input} {...props} />
            { hasError && <span>{meta.error}</span>}
        </div>
        )
};

export const Textarea = Element('textarea');

export const Input = Element('input');


