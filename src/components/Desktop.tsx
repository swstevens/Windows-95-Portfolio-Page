import React, { useState } from 'react';
import DesktopShortcut from './DesktopShortcut';
import Window from "./Window";
import Toolbar from './Toolbar';

export interface DesktopProps {}


const Desktop: React.FC<DesktopProps> = (props) => {
    const [isOpen, setIsOpen] = useState(true);
    
    const [isMinimized, setIsMinimized] = useState(false);
    const [height, setHeight] = useState(window.innerHeight - 50 - 12);
    const [width, setWidth] = useState(window.innerWidth - 50);
    const [top, setTop] = useState(25 - 6);
    const [left, setLeft] = useState(25);

    window.addEventListener('onresize',function(){  
        setHeight(window.innerHeight - 50 - 12);
        setWidth(window.innerWidth - 50)
    })

    const minimize = () => {
        if (isOpen) {
            setIsMinimized(!isMinimized)
        }
    } 

    const showWindow = () => {
        if (isOpen == false) {
            setIsOpen(!isOpen);
        }
    } 

    const closeWindow = () => {
        setIsOpen(false)
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
        {isOpen && <Window width={width} height={height} top={top}
            left={left} setOpen={closeWindow} minimize={minimize} isMinimized={isMinimized}
        />}
        <div className='too' style={styles.toolbar}>
            <Toolbar isMinimized={isMinimized} minimize={minimize} isOpen={isOpen}/>
        </div>
        </>
    )
}

const styles: StyleSheetCSS = {
    desktop: {
        minHeight: '100%',
        flex: 1,
        backgroundColor: '#3e9697',
        justifyContent: 'center',
        alignItems: 'center'
    },
    toolbar: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: '24px',
        border: `1px solid ${'lightgray'}`,
        borderTopColor: 'white',
        zIndex: 100000,

        padding: 2,
        paddingBottom:3,
        backgroundColor: 'lightgray'
    }
};

export default Desktop;