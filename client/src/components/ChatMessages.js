import React, {useEffect,useContext} from 'react';
import {SocketContext} from '../Context/GlobalState';

const createMarkup = (message) => {
    console.log("createmarkup")
    const str = '<div class="message"><p class="meta">'+ message +'<span>9:12pm</span></p><p class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,</p></div>'
    console.log(str)
    return {__html: str };
}
let msg ={};
export const ChatMessages = () =>{
    const socket = useContext(SocketContext);
    socket.on('message', message => {
        
        msg =  message;
    })

    
    
    return(
        <div className="chat-messages">
        <div dangerouslySetInnerHTML={createMarkup("dd ")} />
      </div>
    )
}