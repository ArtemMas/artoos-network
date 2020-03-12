import React from 'react';
import desc from './description.module.css';

const Description = (props) => {
   return (
      <div className={desc.about}>
         <div className={desc.name}>
            Name: {props.prof.fullName}
         </div>
         <br/>
         <div>
            Date of Birth
         </div>
         <div>
            City
         </div>
         <div>
            Education
         </div>
         <div>
            Website
         </div>
         <div>
            Contacts: <a href={props.prof.contacts.twitter}>Twitter</a>
         </div>
      </div>
   )
}

export default Description;
