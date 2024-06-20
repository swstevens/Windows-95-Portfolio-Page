import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
    return (
        <div style={{flexGrow: 1, minWidth: '0px',display: 'block', width: 0, maxWidth:'100%',overflow:'scroll'}}>
        
        <div style={{height: '100%', width: '100%', flexDirection: 'column', alignItems:'center', justifyContent: 'center'}}>
            <div style={styles.half}>
                <img src="assets/headspin-square-unscreen.gif" alt="my head" style={styles.headspin}/>
            </div>
            <div style={window.innerWidth > 480 ? styles.half : styles.halfMobile}>
                <h1 style={window.innerWidth <= 480 ? {textAlign: 'center'} : {}}>SHEA STEVENS</h1>
                <div>

                <Link style={styles.link} to="/">Home</Link>
                <Link style={styles.link} to="/About">About</Link>
                <Link style={styles.link} to="/Experience">Experience</Link>
                <Link style={styles.link} to="/Projects">Projects</Link>

                </div>
            </div>
        </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    half: {
        height: '50%',
        width: '100%',
        alignItems: 'center',
        flexDirection: 'column',
    },
    halfMobile: {
        height: '50%',
        width: '100%',
        alignItems: 'center',
        flexDirection: 'column',
    },
    hyperlink: {
        color: 'blue',
        cursor: 'pointer',
        paddingLeft: '32px',
        paddingRight: '32px',
    },
    link: {
        margin: '16px',
    },
}