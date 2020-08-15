import React from 'react';
import Chat from './Chat';

function Chats(props){

    return (
        <div className="chats">
            <Chat
            name="name"
            message="some shit"
            timestamp="32 min"
            //profilePic=""
            />
            <Chat
            name=""
            message=""
            timestamp=""
            profilePic=""
            />
            <Chat
            name=""
            message=""
            timestamp=""
            profilePic=""
            />
        </div>
    );
}

export default Chats;