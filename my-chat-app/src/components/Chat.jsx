import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import Message from './Message';


const style = {
    main: `flex flex-col p-[10px] relative`,
}

const Chat = () => {
    const scroll = useRef();
    return (
        <>
            <main className={style.main}>
                {/* Chat Mesage Component */}
                <Message />

            </main>
            {/* Send Message*/}

            <span ref={scroll}></span>
        </>
    )
}

export default Chat
