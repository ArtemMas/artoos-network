import React, {FC} from "react";
import preloader from '../../../assets/images/loading.svg';

type Props = {
}

let Preloader: FC<Props> = (props) => {
	return <div >
	<img src={preloader} />
	</div>
};

export default Preloader;