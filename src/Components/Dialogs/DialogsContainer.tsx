import React, {Component} from 'react';
import Dialogs from './Dialogs';
import {sendMessageCreator} from '../../Redux/dialogs-reducer';
import {connect} from 'react-redux';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {AppState} from "../../Redux/redux-store"
import {MessagesPageType} from "../../Types/types";

type MapStateToProps = {
   messagesPage: MessagesPageType
}
type MapDispatchToProps = {
   sendMessage: (newMessageBody: string) => void
}

type OwnProps = {
   isAuth: boolean
}

type Props = MapStateToProps & MapDispatchToProps & OwnProps & AppState

let mapStateToProps = (state: AppState): MapStateToProps => {
   return {
      // @ts-ignore
      messagesPage: state.messagesPage
   }
};

let mapDispatchToProps = (dispatch: MapDispatchToProps) => {
   return {
      sendMessage: (newMessageBody: string) => {
         // @ts-ignore
         dispatch(sendMessageCreator(newMessageBody));
      }
   }
};

class DialogsContainer extends Component<Props>{
   render() {
      return <Dialogs {...this.props}/>
   }
}

export default compose(
    // @ts-ignore
    connect<MapStateToProps, MapDispatchToProps, OwnProps, AppState>(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
    // @ts-ignore
)(DialogsContainer);
