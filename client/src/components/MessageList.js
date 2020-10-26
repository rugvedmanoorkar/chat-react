import React, { useContext} from 'react'
import {GlobalContext} from '../Context/GlobalState'
import {Message} from './Message'
import {AddMessageBot} from './AddMessageBot'
export const MessageList =( )=> {
    const {messages} = useContext(GlobalContext)
   

    return (
        
        <div className="chat-messages">
        
            {messages.map(message => (<Message key ={message.id} message = {message}/>))}
       
        </div>
    )
}