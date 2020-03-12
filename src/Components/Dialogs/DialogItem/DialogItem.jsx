import React from 'react';
import dia from './../Dialogs.module.css';
import {NavLink} from 'react-router-dom';

const DialogItem = (props) => {
   let path = '/dialogs/' + props.id;

   return (
      <div className={dia.dialog}>
         <NavLink className={dia.names} to={path}><img className={dia.diaAva} src={props.sour} />{props.name}</NavLink>
      </div>
   )
}


export default DialogItem;
