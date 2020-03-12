const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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
   ]
};

const dialogsReducer = (state = initialState, action) => {
   switch (action.type) {
      case SEND_MESSAGE: {
         let body = action.newMessageBody;
         return {
            ...state,
            messages: [...state.messages, {id: 4, message: body}]
         };
      }
      default:
         return state;
      }
};

export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody})

export default dialogsReducer;
