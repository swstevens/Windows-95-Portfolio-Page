import React, {useState} from "react";
import DosPlayer from '../dos/DosPlayer';

export default function Doom(){
    return (
        <div style={styles.box}>
            <DosPlayer bundleUrl="doom.jsdos" />
        </div>
    )
}
const styles: StyleSheetCSS = {
    box: {
        // display: 'flex',
        flex: '1 1 auto',
        height: '100vh',
        border: 'none',
        flexGrow: 1, 
        minWidth: '0px',
        display: 'block', 
        width: 0, 
        maxWidth:'100%',
      }
}