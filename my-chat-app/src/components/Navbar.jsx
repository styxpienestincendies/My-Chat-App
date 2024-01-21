import React from 'react'

const style = {
    nav: `h-20 flex justify-between items-center p-4`,
    backgroundColor: { backgroundColor: `#0369a1` }, //Alternate Colour: #ec4899
    heading: `text-white text-3xl`
}

const Navbar = () => {
    return (
        <div className={style.nav} style={style.backgroundColor}>
            <h1 className={style.heading}> Chat Application</h1>
        </div>
    )
}

export default Navbar
