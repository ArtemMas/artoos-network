import React, {ChangeEvent, FC} from 'react'
import ava from './avatar.module.css'
import {Link} from 'react-router-dom'
import userPhoto from '../../../../assets/images/user.png'
import {PhotosType} from "../../../../Types/types";

type Props = {
    isOwner: boolean
    savePhoto: (e: ChangeEvent<HTMLInputElement>) => void
    photo: PhotosType
}

const Avatar: FC<Props> = (props) => {

    const onMainPhotoSelected = (e: React.FormEvent<HTMLInputElement>) => {
        //@ts-ignore
        if (e.target.files.length) {
            //@ts-ignore
            props.savePhoto(e.target.files[0]);
        }
    }
   	return (
      <div className={ava.div}>
         <img className={ava.img} src={props.photo.large || userPhoto}  />
          { props.isOwner && <input type={'file'}
                                    onChange={onMainPhotoSelected}/> }
         <Link to={'/profile/edit'} className={ava.editAva}><div className={ava.edit}>Edit</div></Link>
      </div>
   )
}

export default Avatar
