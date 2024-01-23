import React from "react";
import Navbar from "./components/Navbar";
import Chat from './components/Chat';

import { auth } from "./firebase"
import { useAuthState } from 'react-firebase-hooks/auth'

//
const style = {
  appContainer: `max-w-[728px] mx-auto text-center`,
  sectionContainer: "flex flex-col h-[90vh] mt-10 shadow-xl border relative",
  backgroundColor: { backgroundColor: "#e7e5e4" }
}

function App() {
  const [user] = useAuthState(auth)
  //  console.log(user) - Checking if user is singed in
  return (
    // Creating the base of the chat app
    <div className={style.appContainer}>
      <section className={style.sectionContainer} style={style.backgroundColor}>
        {/* Navbar */}
        <Navbar />

        {/* Chat Component */}
        <Chat />
      </section>

    </div>
  );
}

export default App;
