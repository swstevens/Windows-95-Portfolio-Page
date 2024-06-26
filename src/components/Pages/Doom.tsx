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
        display: 'flex',
        flex: '1 1 auto',
        height: '100vh',
        border: 'none',
      }
}