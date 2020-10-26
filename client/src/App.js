import React from 'react';
import {Header} from './components/Header'
import {Sidebar} from './components/Sidebar'
import {ChatMessages} from './components/ChatMessages'
import {AddMessage} from './components/AddMessage'
import {AddMessageBot} from './components/AddMessageBot'
import {SocketProvider} from './Context/SocketContext';
import {GlobalProvider} from './Context/GlobalState';
import './App.css';
import { MessageList } from './components/MessageList';


function App() {
  
  return (
    <div className="chat-container">
      <SocketProvider>
      <GlobalProvider >
      <Header />
      <main className="chat-main">
      <Sidebar />
      <MessageList />
      </main>
      
      <AddMessage />
      <AddMessageBot />
      </GlobalProvider>
      </SocketProvider>
    </div>
  );
}

export default App;
