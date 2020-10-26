import React, {useEffect,useContext, useState} from 'react';
import {GlobalContext, SocketContext} from '../Context/GlobalState';
import {AddMessageBot} from './AddMessageBot'
import io from 'socket.io-client';


export const AddMessage = () => {
  
  const socket = useContext(SocketContext);

  
      const [text,setText] = useState('');
      
      const {addMessage} = useContext(GlobalContext)
      const {addMessageBot} = useContext(GlobalContext)
      const onSubmit = e =>{
        e.preventDefault();
         
        const newMessage = {
          id: Math.floor(Math.random() *10000),
          text,
         
        }
        console.log(newMessage)
        addMessage(newMessage);
        socket.emit("message", "HELLO WORLD");
        
      }
      
     
    
  
    return(
      
        <div className="chat-form-container">
      <form id="chat-form" onSubmit ={onSubmit}>
        <input
          id="msg"
          type="text"
          placeholder="Enter Message"
          required
          autoComplete="off"
          onChange={(e) => setText(e.target.value)}
        />
        <button className="btn" ><i className="fas fa-paper-plane"></i> Send</button>
      </form>
    </div>
    )
}
