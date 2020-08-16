import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import './ChatScreen.css';


function ChatScreen(props){
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
        {
            name: 'name',
            image: '',
            message: 'whats up..'
        },
        {
            name: 'name',
            image: '',
            message: 'whats up 2..'
        },
        {
            message: 'hi. whats up..'
        }
    ]);

    const handleSend = (e) => {
        e.preventDefault();
        setMessages([...messages, {message: input}]);
        setInput('');
    }


    return (
        <div className="chatScreen">
            <p className="chatScreen__timestamp">You matched with .... on 10/07/2020</p>
            {messages.map((message) => (
                message.name 
                ? <div className="chatScreen__message">
                    <Avatar 
                    className='chatScreen__image' 
                    alt={message.name} 
                    src={message.image}/>
                    <p className="chatScreen__text">{message.message}</p>
                </div>
                : <div className="chatScreen__message">
                    <p className="chatScreen__textUser">{message.message}</p>
                </div>
            ))}
                <form className="chatScreen__input">
                    <input value={input} onChange={(e)=> setInput(e.target.value)} className="chatScreen__inputField" type="text" placeholder="Type..."/>
                    <button onClick={handleSend} className="chatScreen__inputButton">Send</button>
                </form>
        </div>
    );
}

export default ChatScreen;