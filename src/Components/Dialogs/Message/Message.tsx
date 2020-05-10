import React, {FC} from 'react';
import dia from './../Dialogs.module.css';

type Props = {
    message: string
}

const Message: FC<Props> = (props) => {
      return (
         <div>
            <div className={dia.dialog}>{props.message}</div>
         </div>
   )

}


export default Message;
