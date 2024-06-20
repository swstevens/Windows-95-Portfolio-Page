import React from "react";
import  { Link } from "react-router-dom";

export default function MobileHeader() {
return (
    <div style={styles.sticky}>
    { window.innerWidth <= 480 ? <div style={{alignItems: 'center', justifyContent: 'space-evenly', flexGrow:1}}>

        <Link style={styles.link} to="/">Home</Link>
        <Link style={styles.link} to="/About">About</Link>
        <Link style={styles.link} to="/Experience">Experience</Link>
        <Link style={styles.link} to="/Projects">Projects</Link>
        
        </div> : <> </>}
    </div>
)
}

const styles : StyleSheetCSS = {
    link: {
        // margin: '16px',
    },
    sticky: {
        position: 'sticky',
        top: '0',
        width: '100%',
        backgroundColor: 'lightgray',
    },
}