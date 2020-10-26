import React, { useContext} from 'react'
import {GlobalContext} from '../Context/GlobalState'

export const Message =({message}) => {

    return(
        <div className="message">
            <p className="meta">Brad <span>9:12pm</span></p>
            <p className="text">
                {message.text}
            </p>
		</div>
    )
}