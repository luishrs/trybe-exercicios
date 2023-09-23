import logo from './logo.svg';
import './App.css';
import messagesList from './data';
import React, { useEffect, useState } from 'react';


function App() {
  const [mesages, setMesages]= useState(messagesList);

  const togleStatus = (id) => {
    const newMessages = mesages.map((message) => {
      if (message.id === id) {
        return {
          ...message,
          status: message.status === 0 ? 1 : 0,
        };
      }
      return message;
    });
    useEffect(() => {
    setMesages(newMessages);
  }, [nesages]);
  };
 
  return (
    <div className="App">
      <header className="App-header">
        TrybeMail
      </header>
      <div>
        <button>Marcar todas como lida</button>
         <button>Marcar todas como não lida</button>
      <main>
        {
          mesages.map((message) => (
            <div key={message.id}>             
              <span>{message.title}</span>
              <button  >
                onClick={() => togleStatus(message.id)}
                {
                  message.status === 0 ? 'Marcar como lida' : 'Marcar como não lida'
                }
              </button >
              
            </div>
          ))
        }
      </main>

      </div>
    </div>
  );
}

export default App;
