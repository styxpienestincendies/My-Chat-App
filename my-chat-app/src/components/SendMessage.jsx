import React, { useState } from 'react'
import { auth, db } from '../firebase'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'

const style = {
    form: `h-14 w-full max-w-[728px]  flex text-xl absolute bottom-0`,
    input: `w-full text-xl p-3 text-white outline-none border-none`,
    backgroundColor: { backgroundColor: `#d1d5db` },
    button: `w-[20%] bg-[#6ee7b7]`,
}


const SendMessage = (scroll) => {
    const [input, setInput] = useState('')
    //Function to getting the message sent
    const sendMessage = async (e) => {
        e.preventDefault()
        if (input === '') {
            alert("You haven't typed in anything, enter a message before sending!")
            return
        }
        const { uid, displayName } = auth.currentUser
        await addDoc(collection(db, 'messages'), {
            text: input,
            name: displayName,
            uid,
            timestamp: serverTimestamp()
        })
        setInput('')
        scroll.current.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <form onSubmit={sendMessage} className={style.form}>

            <input value={input} onChange={(e) => setInput(e.target.value)} className={style.input} style={style.backgroundColor} type="text" placeholder='Type to Chat!' />
            <button className={style.button} type="submit">Send</button>
        </form>
    )
}

export default SendMessage
