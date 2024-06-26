import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Sidebar(){
    const location = useLocation();

    const [isHome, setIsHome] = useState(false);
    useEffect(() => {
        if (location.pathname === '/') {
            setIsHome(true);
        } else {
            setIsHome(false);
        }
        return () => {};
    }, [location.pathname]);
    return (
        !isHome && window.innerWidth > 480 ? 
        <>
            <div className="testing tesing" style={styles.fixedColumn}>
                <img src="assets/headspin-square-unscreen.gif" alt="my head" style={styles.headspin}/>
                <p>That's Me!</p>
                <div style={{height:'64px'}}></div>
                <div style={styles.links}>
                <Link style={styles.link} to="/">Home</Link>
                <Link style={styles.link} to="/About">About</Link>
                <Link style={styles.link} to="/Experience">Experience</Link>
                <Link style={styles.link} to="/Projects">Projects</Link>
                </div>

            </div>
        </> 
        : 
        <></>
    )
}

const styles: StyleSheetCSS = {
    fixedColumn: {
        flex: 0,
        minWidth: '250px', 
        maxWidth: '250px',
        position: 'sticky',
        top: 0,
        alignItems: "center",
        display: 'inline-block',
        justifyContent: 'center',
        textAlign: 'center',
        flexDirection: 'column'
    },
    headspin: {
        width: 150,
        height: 150,
        paddingTop: '40px',
    },
    links: {
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'center',
    },
    link: {
        margin: '8px',
    }
}