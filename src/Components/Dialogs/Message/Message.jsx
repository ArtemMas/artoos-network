import React from 'react';
import dia from './../Dialogs.module.css';


const Message = (props) => {
      return (
         <div>
            <div className={dia.dialog}>{props.message}</div>
         </div>
   )

}


export default Message;
