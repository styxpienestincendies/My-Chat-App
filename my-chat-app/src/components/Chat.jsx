import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import Message from './Message';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '../firebase';
import SendMessage from './SendMessage';


const style = {
    main: `flex flex-col p-[10px] relative`,
}

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const scroll = useRef();

    {/* If there any change to our firebase database, it will update in real time*/ }
    useEffect(() => {
        const q = query(collection(db, 'messages'), orderBy('timestamp'))
        const unsubscribe = onSnapshot(q, (querySnapShot) => {
            let messages = []
            querySnapShot.forEach((doc) => {
                messages.push({ ...doc.data(), id: doc.id })
            })
            setMessages(messages)
        })
        return () => unsubscribe()
    }, [])

    return (
        <>
            <main className={style.main}>
                {/* Chat Mesage Component */}

                {messages && messages.map((message) => (
                    <Message key={message.id} message={message} />
                ))}



            </main>
            {/* Send Message*/}
            <SendMessage scroll={scroll} />
            <span ref={scroll}></span>
        </>
    )
}

export default Chat
