import React, { act, useCallback, useState } from 'react';
import DesktopShortcut from './DesktopShortcut';
import Window from "./Window";
import Toolbar from './Toolbar';

export interface DesktopProps {}


const Desktop: React.FC<DesktopProps> = (props) => {
    const [isOpen, setIsOpen] = useState(true);
    const [windows, setWindows] = useState<DesktopWindows>({});
    
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

    const addWindow = useCallback((key: string, element: JSX.Element) => {
        setWindows((prevState) => ({
            ...prevState,
            [key]: {
                zIndex: 1,
                minimized: false,
                component:  element,
            },
        }));
    }, [])

    const minimizeWindow = useCallback((key: string) => {
        setWindows((prevWindows) => {
            const newWindows = { ...prevWindows };
            newWindows[key].minimized = true;
            return newWindows;
        });
    }, [])

    const removeWindow = useCallback((key: string) => {
        let activeWindows = { ...windows};
        delete activeWindows[key];
        setWindows(activeWindows);
    }, [])

    const getHighestZIndex = useCallback((): number => {
        let zIndex = 0;
        Object.keys(windows).forEach((key) => {
            const window = windows[key];
            if (window.zIndex > zIndex) {
                zIndex = window.zIndex
            }
        });
        return zIndex;
    }, [])

    return ( 
        <>
        <div style={styles.desktop} >
            <div onMouseDown={() => addWindow('test',<Window width={width} height={height} top={top}
            left={left} setOpen={() => removeWindow('test')} minimize={() => minimizeWindow('test')} zIndex={getHighestZIndex()+1}/>)}>
            <DesktopShortcut
                shortcutName={"Item 1"}
            />
            </div>
            <div onMouseDown={showWindow}>
            <DesktopShortcut
                shortcutName={"Item 2"}
            />
            </div>
            <div onMouseDown={showWindow}>
            <DesktopShortcut
                shortcutName={"Item 3"}
            />
            </div>
        </div>
        {/* {isOpen && <Window width={width} height={height} top={top}
            left={left} setOpen={closeWindow} minimize={() => minimizeWindow('test')}
        />} */}
        {Object.keys(windows).map((key) => {
            const element = windows[key].component;
            return (
                <div
                    key={`win-${key}`}
                    style={Object.assign(
                        {},
                        { zIndex: windows[key].zIndex },
                        windows[key].minimized && styles.minimized
                    )}
                >
                    {React.cloneElement(element, {
                        key,
                        onClose: () => removeWindow(key),
                    })}
                </div>
            );
        })}
        <div className='too' style={styles.toolbar}>
            <Toolbar windows={windows} isMinimized={isMinimized} minimize={() => minimizeWindow('test')} isOpen={isOpen}/>
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
    },
    minimized: {
        pointerEvents: 'none',
        opacity: 0,
    },
};

export default Desktop;