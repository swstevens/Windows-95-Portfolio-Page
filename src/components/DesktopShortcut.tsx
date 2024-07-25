import React, {useCallback, useState, useEffect} from "react";

export interface DesktopShortcutProps {
    // icon: string,
    shortcutName: string;
    shortcutIcon: string;
    onMouseDown: () => void;
}

const DesktopShortcut: React.FC<DesktopShortcutProps> = ({
//    icon,
   shortcutName,
   shortcutIcon,
   onMouseDown

}) => {
    const shortcutId = shortcutName;
    const icon = shortcutIcon;
    const [doubleClickTimerActive, setDoubleClickTimerActive] = useState(false);
    const [isSelected, setIsSelected] = useState(false)

    const handleClickShortcut = useCallback(() => {
        if (doubleClickTimerActive) {
            onMouseDown && onMouseDown();
            setDoubleClickTimerActive(false);
            return;
        }
        setDoubleClickTimerActive(true);
        setIsSelected(true)
        // set double click timer
        setTimeout(() => {
            setDoubleClickTimerActive(false);
        }, 300);
    }, [doubleClickTimerActive, onMouseDown]);

    const handleClickOutside = useCallback(
        
        (event: MouseEvent) => {
            // @ts-ignore
            const targetId = event.target.id;
            console.log(targetId)
            console.log(shortcutId)
            if (targetId !== shortcutId) {
                console.log('you fail')
                setIsSelected(false);
            }
        },
        [isSelected, setIsSelected, shortcutId]
    );

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isSelected, handleClickOutside]);
    
    return (
        <div
        id={`${shortcutId}`}
        style={Object.assign({}, styles.appShortcut)}
        onMouseDown={handleClickShortcut}
    >
        <div id={`${shortcutId}`} style={Object.assign(
            isSelected ? styles.checkerboard  : {}
        )}>
            <img style={{height:40, width:40, pointerEvents: 'none', userSelect:'none'}} src={icon}>    
        </img>
        </div>
        <div style={{height: 2}}/>
        <p
        id={`${shortcutId}`}
        className='osText'
        style={Object.assign(
            {},
            styles.shortcutText,
            isSelected ? styles.checkerboard  : {}
        )}
    >
        {shortcutName}
    </p>
    </div>
    );
};

const styles: StyleSheetCSS = {
    appShortcut: {
        position: 'relative',
        width: 72,

        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        textAlign: 'center',
        marginTop: '12px',
        paddingLeft: '8px',
        paddingTop: '8px',
        cursor: 'pointer',
    },
    checkerboard: {
        backgroundImage: `linear-gradient(45deg, blue 25%, transparent 25%),
        linear-gradient(-45deg, blue 25%, transparent 25%),
        linear-gradient(45deg, transparent 75%, blue 75%),
        linear-gradient(-45deg, transparent 75%, blue 75%)`,
        backgroundSize: `2px 2px`,
        backgroundPosition: `0 0, 0 1px, 1px -1px, -1px 0px`,
        pointerEvents: 'none',
    },
    shortcutText: {
        cursor: 'pointer',
        textOverflow: 'wrap',
        color: 'white',
        fontSize: 16,
    },
}

export default DesktopShortcut