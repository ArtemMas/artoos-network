import React, {FC} from 'react';
import dia from './../Dialogs.module.css';
import {Link} from 'react-router-dom';

type Props = {
    name: string
    id: number
    sour: string
}

const DialogItem: FC<Props> = (props) => {
   let path = '/dialogs/' + props.id;

   return (
      <div className={dia.dialog}>
         <Link className={dia.names} to={path}><img className={dia.diaAva} src={props.sour} />{props.name}</Link>
      </div>
   )
}


export default DialogItem;
