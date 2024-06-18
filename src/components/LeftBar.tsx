import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function LeftBar(){
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
        isHome ? <></> : 
        <>
            <div style={styles.fixedColumnLeft}>
                <p style={styles.text}>SHEA_STEVENS</p>
            </div>
        </>
    )
}

const styles: StyleSheetCSS = {
    fixedColumnLeft: {
        flex: 0,
        writingMode: 'vertical-rl',
        minWidth: '64px', 
        maxWidth: '64px',
        position: 'sticky',
        top: 0,
        padding: 0,
        margin: 0,
        justifyContent: 'center',
        alignItems:'center',
        textAlign: 'center',
        overflow: 'hidden'
    },
    text: {
        flex: 0,
        position: 'relative',
        padding: 0,
        margin: 0,
        fontSize: '72px',
        fontWeight: 'bolder',
        font: '4rem "Microgramma", sans-serif',
        left: '-24px',
        color: 'darkred',
        opacity: 0.9,
    },
}