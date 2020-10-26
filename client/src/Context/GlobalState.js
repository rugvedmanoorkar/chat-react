import React, {createContext,useReducer} from 'react';
import io from 'socket.io-client';
import AppReducer from './AppReducer';

let socket = io('http://localhost:5000');
  

const initialState = {
    messages:[]
}


export const GlobalContext = createContext(initialState);
export const SocketContext = createContext(socket);


 
console.log(typeof(socket));
export const GlobalProvider = ({children}) => {
    const[state,dispach] = useReducer(AppReducer,initialState)


    //Actions
    function addMessage(message) {
        dispach({
            type: 'ADD_MESSAGE',
            payload: message
        })
    }

    function addMessageBot(message) {
        console.log("addMsgBot")
        dispach({
            type: 'ADD_MESSAGE_BOT',
            payload:message
        })
    }

    return (
        <SocketContext.Provider value={socket}>
        <GlobalContext.Provider value = {{
            messages: state.messages,
            addMessage,
            addMessageBot
            }
        }>
            {children}
        </GlobalContext.Provider>
        </SocketContext.Provider>
    )
}

