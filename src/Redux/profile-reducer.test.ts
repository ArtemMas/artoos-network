import React from 'react';
import profileReducer, {addPostCreator, deleteCreator} from "./profile-reducer";

let state = {
   posts: [
      {id: 1, message: 'Hi, how are u?', likes: 10},
      {id: 2, message: 'My first project', likes: 20},
      {id: 3, message: 'I love this summer', likes: 15}
   ]
};

it('length of posts should be incremented', () => {
   // 1. test data
   let action = addPostCreator('artoo');

   // 2. action
   let newState = profileReducer(state, action);

   // 3. expectation
   expect(newState.posts.length).toBe(4);
});

it('message of new posts should be correct', () => {
   // 1. test data
   let action = addPostCreator('artoo');

   // 2. action
   let newState = profileReducer(state, action);

   // 3. expectation
   expect(newState.posts[3].message).toBe('artoo');
});

it('after deleting length of message should be decremented', () => {
   // 1. test data
   let action = deleteCreator(3);

   // 2. action
   let newState = profileReducer(state, action);

   // 3. expectation
   expect(newState.status.length).toBe(2);
});

it(`after deleting length of message shouldn't be decremented if id is incorrect`, () => {
   // 1. test data
   let action = deleteCreator(1000);

   // 2. action
   let newState = profileReducer(state, action);

   // 3. expectation
   expect(newState.posts.length).toBe(3);
});

