import axios from 'axios';
import socket from './socket';

// INITIAL STATE

const initialState = {
  messages: [],
  name: 'Reggie',
  newMessageEntry: '',
  channels : [],
  newChannelName : ''
};

// ACTION TYPES

const UPDATE_NAME = 'UPDATE_NAME';
const WRITE_MESSAGE = 'WRITE_MESSAGE';
const WRITE_CHANNEL = 'WRITE_CHANNEL';
// ACTION CREATORS

export function updateName (name) {
  const action = { type: UPDATE_NAME, name };
  return action;
}


export function writeMessage (content) {
  const action = { type: WRITE_MESSAGE, content };
  return action;
}


export function writeChannel(channelName){
  const action = { type: WRITE_CHANNEL, channelName};
  return action;
}


// THUNK CREATORS









// REDUCER

/**
 * Whoa! What is this { ...state } business?!?
 * This is the spread operator like we've seen before - but this time, we're using it with an Object!
 * When we use the spread operator on an object, it extracts all of the key-value pairs on that object into a new object!
 * Sound familiar? It acts like Object.assign!
 *
 * For example:
 *
 *    const obj1 = { a: 1 };
 *    const obj2 = { ...obj1, b: 2  }
 *    console.log(obj2) // { a: 1, b: 2 }
 *
 * This is the same result we would have gotten if we had said:
 *
 *    const obj2 = Object.assign({}, obj1, { b: 2 })
 *
 * However, it's much less verbose!
 * Is there anything the spread operator DOESN'T do?!?
 *
 * Note: this is still an experimental language feature (though it is on its way to becoming official).
 * We can use it now because we are using a special babel plugin with webpack (babel-preset-stage-2)!
 */
function reducer (state = initialState, action) {

  switch (action.type) {

    case UPDATE_NAME:
      return {
        ...state,
        name: action.name
      };

    case WRITE_MESSAGE:
      return {
        ...state,
        newMessageEntry: action.content
      };

    case WRITE_CHANNEL:
      return {
        ...state,
        newChannelName : action.channelName
      }

    default:
      return state;
  }

}
