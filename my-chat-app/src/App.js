import React from "react";
import Navbar from "./components/Navbar";

//
const style = {
  appContainer: `max-w-[728px] mx-auto text-center`,
  sectionContainer: "flex flex-col h-[90vh] mt-10 shadow-xl border relative",
  backgroundColor: { backgroundColor: "#e7e5e4" }
}

function App() {
  return (
    // Creating the base of the chat app
    <div className={style.appContainer}>
      <section className={style.sectionContainer} style={style.backgroundColor}>
        {/* Navbar */}
        <Navbar />

        {/* Chat Component */}
      </section>

    </div>
  );
}

export default App;
