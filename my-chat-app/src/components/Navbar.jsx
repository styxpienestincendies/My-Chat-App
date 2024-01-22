import React from 'react'
import { auth } from '../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'

const style = {
    nav: `h-20 flex justify-between items-center p-4`,
    backgroundColor: { backgroundColor: `#0369a1` }, //Alternate Colour: #ec4899
    heading: `text-white text-3xl`
}

const Navbar = () => {
    const [user] = useAuthState(auth)
    return (
        <div className={style.nav} style={style.backgroundColor}>
            <h1 className={style.heading}> Chat Application</h1>
        </div>
    )
}

export default Navbar
