import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { database } from '../../firebase/index';

function Chat(props) {
  const [cookies] = useCookies(['userName', 'userNickname']);
  // const [nickname, setNickname] = useState('');
  const [msg, setMsg] = useState('');
  const [messages, setMessages] = useState({});
  const sender = props.sender;
  // const sender2 = props.sender;
  
  
  const [chat, setChat] = useState(null);
  const chatRoom = database.ref().child(`${chat}`);
  // const chatRoomName = `${sender} +${sender2} `; 


  useEffect(() => {
    const handleNewMessages = (snap) => {
      if (snap.val()) setMessages(snap.val());
    };
    chatRoom.on('value', handleNewMessages);
    return () => {
      chatRoom.off('value', handleNewMessages);
    };
  },[setMessages]);
  const handleMsgChange = e => setMsg(e.target.value);
  const handleKeyDown = e => {
      chatRoom.push({
        
        nickname: sender,
        msg,
        dateDay: new Date().toLocaleTimeString(),
        dateTime: new Date().toLocaleDateString(),
      });
      setMsg('');
  };
  return (
    <div className="App">
          <div className="chat">
            <div className="messages">
              {Object.keys(messages).map(message => {
                if (messages[message]["nickname"] === cookies.userNickname)
                  return (
                    <div style={{textAlign:'right'}} className="message">
                      <span id="me">{messages[message]["nickname"]} :</span><br />
                      {messages[message]["msg"]}<br/>
                      {messages[message]["dateDay"]}<br/>
                      {messages[message]["dateTime"]}<br/>
                    </div>
                  );
                else
                  return (
                    <div style={{textAlign:'left'}} className="message">
                      <span id="sender">{messages[message]["nickname"]} :</span><br />
                      {messages[message]["msg"]}
                    </div>
                  );
              })}
            </div>
            <div>
            <input placeholder="write here" onChange={handleMsgChange} value={msg} /><br />
            <button onClick={handleKeyDown}>Send</button>
            </div>
          </div>
    </div>
  );
}
export default Chat;
