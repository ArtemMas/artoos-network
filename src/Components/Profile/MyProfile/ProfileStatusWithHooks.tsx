import React, {useState, useEffect, ChangeEvent, FC} from 'react';
import {ProfileType} from "../../../Types/types";

type Props = {
    status: string
    updateStatus: (status: string) => void
}

const ProfileStatusWithHooks: FC<Props> = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect( () => {
        setStatus(props.status)
    }, [props.status] );

    const activateEditMode = () => {
        setEditMode(true)
    };

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status)
    };

    const onStatusChange = (e: React.FormEvent<HTMLInputElement>) => {
      setStatus(e.currentTarget.value);
    };

    return (
        <div>
            { !editMode &&
            <div>
                <b>Status: </b> <span onDoubleClick={activateEditMode}>{props.status || 'Change status'}</span>
            </div>
            }
            {editMode &&
            <div>
                <input onChange={onStatusChange} value={status}
                       autoFocus={true} onBlur={deactivateEditMode}/>
            </div>
            }
        </div>
    )
};

export default ProfileStatusWithHooks;
