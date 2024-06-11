import React, { useState } from 'react';
import DesktopShortcut from './DesktopShortcut';
import Window from "./Window";

export interface DesktopProps {}


const Desktop: React.FC<DesktopProps> = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    
    const [isMinimized, setIsMinimized] = useState(false);
    const [height, setHeight] = useState(250);
    const [width, setWidth] = useState(250);
    const [top, setTop] = useState(25);
    const [left, setLeft] = useState(25);

    const minimize = () => {
        setIsMinimized(!isMinimized)
    } 

    const showWindow = () => {
        if (isOpen == false) {
            setIsOpen(!isOpen);
        }
    } 

    return ( 
        <>
        <div style={styles.desktop} >
            <div onMouseDown={showWindow}>
            <DesktopShortcut
                shortcutName={"banana"}
            />
            </div>
            <div onMouseDown={minimize}>
            <DesktopShortcut
                shortcutName={"minimizer"}
            />
            </div>
        </div>
        {isOpen && <Window width={width} height={height} top={top}
            left={left} setOpen={showWindow} minimize={minimize} isMinimized={isMinimized}
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