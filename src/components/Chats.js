import React from 'react';
import Chat from './Chat';

function Chats(props){

    return (
        <div className="chats">
            <Chat
            name="name"
            message="some shit"
            timestamp="32 min ago"
            profilePic=""
            />
            <Chat
            name="name2"
            message="hi!!!"
            timestamp="16 min ago"
            profilePic=""
            />
            <Chat
            name="name3"
            message="what's up..?"
            timestamp="2 days ago"
            profilePic=""
            />
        </div>
    );
}

export default Chats;