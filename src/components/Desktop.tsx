import React, { useState } from 'react';
import DesktopShortcut from './DesktopShortcut';
import Window from "./Window";

export interface DesktopProps {}


const Desktop: React.FC<DesktopProps> = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const showWindow = () => {
        setIsOpen(!isOpen)
    } 

    return ( 
        <>
        <div style={styles.desktop} >
            <div onMouseDown={showWindow}>
            <DesktopShortcut
                shortcutName={"banana"}
            />
            </div>
        </div>
        {isOpen && <Window width={250} height={250} top={25}
            left={25} setOpen={showWindow}
        />}
        </>
    )
}

const styles: StyleSheetCSS = {
    desktop: {
        minHeight: '100%',
        flex: 1,
        backgroundColor: '#3e9697',
    }
};

export default Desktop;