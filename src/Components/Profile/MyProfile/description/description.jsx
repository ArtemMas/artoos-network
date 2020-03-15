import React from 'react';
import desc from './description.module.css';

const Description = (props) => {
   return (
      <div className={desc.about}>
         <div className={desc.name}>
            Name: {props.prof.fullName}
         </div>
          <div>
              <b>Name:</b>  {profile.fullName}
          </div>
         <br/>
         <div>
            Date of Birth
         </div>
          <div>
              <b>Looking for a job:</b>  {profile.lookingForAJob ? 'yes' : 'no'}
         </div>
          {profile.lookingForAJob &&
          <div>
              <b>My professional skills:</b> {profile.lookingForAJobDescription ? 'yes' : 'no'}
          </div>
          }
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
