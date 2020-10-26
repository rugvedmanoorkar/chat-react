import React, {createContext,useReducer} from 'react';
import io from 'socket.io-client';
import AppReducer from './AppReducer';

let socket = io('http://localhost:5000');
  





export const SocketContext = createContext(socket);


 
console.log(typeof(socket));
export const SocketProvider = ({children}) => {
    
    return (
        <SocketContext.Provider value={socket}>
       
            {children}
        
        </SocketContext.Provider>
    )
}

