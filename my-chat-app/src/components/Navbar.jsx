import React from 'react'
import SignIn from './SignIn'
import { auth } from '../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import LogOut from './LogOut'


const style = {
    nav: `h-20 flex justify-between items-center p-4`,
    backgroundColor: { backgroundColor: `#0369a1` }, //Alternate Colour: #ec4899
    heading: `text-white text-3xl`
}


const Navbar = () => {
    const [user] = useAuthState(auth)
    console.log(user)
    return (
        <div className={style.nav} style={style.backgroundColor}>
            <h1 className={style.heading}> Chat Application</h1>

            {user ? <LogOut /> : <SignIn />} {/* Operator to check if the user is singed in if so only display logout and if not display sign in*/}

        </div>
    )
}

export default Navbar
