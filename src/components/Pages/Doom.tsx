import React, {useState} from "react";
import DosPlayer from '../dos/DosPlayer';

export default function Doom(){
    const [width, setWidth] = useState(980);
    const [height, setHeight] = useState(670);
    return (
        // <iframe id="jsdos" style={styles.box}
        // src="https://dos.zone/player/?bundleUrl=https%3A%2F%2Fcdn.dos.zone%2Foriginal%2F2X%2F2%2F24b00b14f118580763440ecaddcc948f8cb94f14.jsdos&anonymous=1"
        // allowFullScreen>
        // </iframe>
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