import React, {ChangeEvent} from 'react';
import Preloader from '../../common/Preloader/Preloader';

type Props = {
    status: string
    updateStatus: (newStatus: string) => void
}

type StateType = {
    editMode: boolean
    status: string
}

class ProfileStatus extends React.Component<Props, StateType> {
    // if (!props.profile) {
    //     return <Preloader />
    // }

    state = {
        editMode: false,
        status: this.props.status
    };

    activateEditMode = () => {
        this.setState( {
           editMode: true
        })
    };

    deactivateEditMode () {
        this.setState( {
            editMode: false
        });
        this.props.updateStatus(this.state.status);
    };

    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    };

    componentDidUpdate(prevProps: Props, prevState: StateType) {
        debugger
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            });
        }
        console.log('componentDidUpdate')
    }

    render () {
        return (
            <div>
                { !this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status || '-----'}</span>
                    </div>
                }
                { this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} value={this.state.status}/>
                    </div>
                }
            </div>
        );
    }
}

export default ProfileStatus;
