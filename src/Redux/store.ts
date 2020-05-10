import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';


let store = {
   _state: {
      profilePage: {
         posts: [
            {id: 1, message: 'Hi, how are u?', likes: 10},
            {id: 2, message: 'My first project', likes: 20},
            {id: 3, message: 'I love this summer', likes: 15}
         ],
         newPostText: ''
      },
      messagesPage: {
         dialogs: [
            {id: 1, name: 'Anna', img: 'https://avatars.mds.yandex.net/get-pdb/1245924/fd5f090c-f70d-48d0-b2c0-b6bd441301c4/s1200'},
            {id: 2, name: 'Olina', img: 'https://avatars.mds.yandex.net/get-pdb/1245924/fd5f090c-f70d-48d0-b2c0-b6bd441301c4/s1200'},
            {id: 3, name: 'Evjeniy', img: 'https://avatars.mds.yandex.net/get-pdb/1245924/fd5f090c-f70d-48d0-b2c0-b6bd441301c4/s1200'},
            {id: 4, name: 'Vladislav', img: 'https://avatars.mds.yandex.net/get-pdb/1245924/fd5f090c-f70d-48d0-b2c0-b6bd441301c4/s1200'},
            {id: 5, name: 'Alex', img: 'https://avatars.mds.yandex.net/get-pdb/1245924/fd5f090c-f70d-48d0-b2c0-b6bd441301c4/s1200'},
            {id: 6, name: 'Evjeniy', img: 'https://avatars.mds.yandex.net/get-pdb/1245924/fd5f090c-f70d-48d0-b2c0-b6bd441301c4/s1200'},
            {id: 7, name: 'Pavel', img: 'https://avatars.mds.yandex.net/get-pdb/1245924/fd5f090c-f70d-48d0-b2c0-b6bd441301c4/s1200'}
         ],
         messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'Hello'},
            {id: 3, message: 'How are u?'}
         ],
         newMessageBody: ''
      },
      sidebar: {}
   },
   _callSubscriber(){   },

   getState(){
      return this._state;
   },
   subscribe(observer){
      this._callSubscriber = observer;
   },

   dispatch(action){
      this._state.profilePage = profileReducer(this._state.profilePage, action);
      this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
      this._state.sidebar = sidebarReducer(this._state.sidebar, action);

      this._callSubscriber(this._state);
   }
}

export default store;
window.store = store;
