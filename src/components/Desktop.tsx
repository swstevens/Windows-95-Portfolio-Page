import React, { act, useCallback, useState } from 'react';
import DesktopShortcut from './DesktopShortcut';
import Window from "./Window";
import Toolbar from './Toolbar';

export interface DesktopProps {}


const Desktop: React.FC<DesktopProps> = (props) => {
    const [isOpen, setIsOpen] = useState(true);
    const [windows, setWindows] = useState<DesktopWindows>({});
    const [focus, setFocus] = useState(String);
    
    const [isMinimized, setIsMinimized] = useState(false);
    const [height, setHeight] = useState(window.innerHeight - 50 - 12);
    const [width, setWidth] = useState(window.innerWidth - 50);
    const [top, setTop] = useState(25 - 6);
    const [left, setLeft] = useState(25);

    window.addEventListener('onresize',function(){  
        setHeight(window.innerHeight - 50 - 12);
        setWidth(window.innerWidth - 50)
    })

    const OBJECTS: {
        [key in string]:  {
            key: string;
            icon: string
        };
    } = {
        test1: {
            key: 'test1',
            icon: 'assets/windowExplorerIcon.png',
        },
        test2: {
            key: 'test2',
            icon: 'assets/windowExplorerIcon.png',
        },
        test3: {
            key: 'test3',
            icon: 'assets/windowExplorerIcon.png',
        },
    }

    const minimizeWindow = useCallback((key: string) => {
        setFocus('')
        setWindows((prevWindows) => {
            const newWindows = { ...prevWindows };
            newWindows[key].minimized = true;
            return newWindows;
        });
    }, [setWindows])



    const removeWindow = useCallback((key: string) => {
        setWindows((prevWindows) => {
            const newWindows = { ...prevWindows };
            delete newWindows[key];
            return newWindows;
        });
    }, [setWindows])

    const getHighestZIndex = useCallback((): number => {
        let highestZIndex = 0;
        Object.keys(windows).forEach((key) => {
            const window = windows[key];
            if (window) {
                if (window.zIndex > highestZIndex)
                    highestZIndex = window.zIndex;
            }
        });
        return highestZIndex;
    }, [windows]);

    const addWindow = (key: string, element: JSX.Element) => {
        setFocus(key)
        setWindows((prevWindows) => ({
            ...prevWindows,
            [key]: {
                zIndex: getHighestZIndex() + 1,
                minimized: false,
                component:  element,
            },
        }));
    };

    const onWindowInteract = 
        (key: string) => {
            setFocus(key);
            setWindows((prevWindows) => ({
                ...prevWindows,
                [key]: {
                    ...prevWindows[key],
                    zIndex: 1 + getHighestZIndex(),
                },
            }));
        };

    const toggleMinimizeWindow = useCallback((key: string) => {
        const newWindows = { ...windows };
        const highestIndex = getHighestZIndex();
        if (newWindows[key].minimized) {
            newWindows[key].minimized = !newWindows[key].minimized;
            setFocus(key)
        } else {
            if (focus == key) {
                newWindows[key].minimized = !newWindows[key].minimized;
                setFocus('')
            }
            else {
                newWindows[key].zIndex = getHighestZIndex() + 1
                setFocus(key)

            }
        }
        setWindows(newWindows);
    }, [windows, focus, setFocus ,setWindows, getHighestZIndex])

    const  handleClickShortcut = (key:string) => {
        addWindow(key,<Window title={key} icon={'assets/windowExplorerIcon.png'} onInteract={() => onWindowInteract(key)} width={width} height={height} top={top}
            left={left} close={() => removeWindow(key)} minimize={() => minimizeWindow(key)} />)
    };

    return ( 
        <>
        <div style={styles.desktop} >
            {Object.keys(OBJECTS).map((key) => {
                return (
                    <div key={`shortcut-${key}`} onMouseDown={() => handleClickShortcut(key)}>
                        <DesktopShortcut
                            shortcutName={key}
                        />
                    </div>
                );
            })}
        </div>

        {Object.keys(windows).map((key) => {
            const element = windows[key].component; // sometimes desynced? 
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
                        onInteract: () => onWindowInteract(key),
                        isFocus: key == focus,
                    })}
                </div>
            );
        })}
        <div className='too' style={styles.toolbar}>
            <Toolbar windows={windows} isMinimized={isMinimized} minimize={toggleMinimizeWindow} focus={focus}/>
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