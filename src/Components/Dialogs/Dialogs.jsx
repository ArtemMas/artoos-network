import React from 'react';
import dia from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {Redirect} from "react-router-dom";
import AddMessageForm from "../AddForm/AddMessageForm";

const Dialogs = (props) => {

   let state = props.messagesPage;

   let dialogsElements = state.dialogs.map( d => <DialogItem id={d.id} key={d.id} name={d.name} sour={d.img} />);
   let messagesElements = state.messages.map( m => <Message message={m.message} key={m.id} />);

   let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
   };

   if (!props.isAuth) return <Redirect to={'/login'} /> ;

   return (
      <div className={dia.dialogs}>
         <div className={dia.dialogsItems}>
            {dialogsElements}
         </div>

         <div className={dia.messages}>
            <div>{messagesElements}</div>
         </div>
          <div className={dia.messages}>
              <AddMessageForm onSubmit={addNewMessage} />
          </div>
      </div>
   );
};

export default Dialogs;
