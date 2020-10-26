import React, {useEffect,useContext, useState} from 'react';
import {GlobalContext } from '../Context/GlobalState';
import { SocketContext} from '../Context/SocketContext'

export const AddMessageBot  = () => {
    console.log("Add Message Bot");
    const socket = useContext(SocketContext);
    const {addMessageBot} = useContext(GlobalContext)
    const text = "";
    
    useEffect(() => {
        // Update the document title using the browser API
        socket.on('test',  text => {
        
            console.log(text);
            const newMessage = {
                id: Math.floor(Math.random() *10000),
                text,
               
              }
              console.log(newMessage);
           
              addMessageBot(newMessage);
          });
      },[text]);

    
      return(
         <div >
           
         </div> 
      )
}