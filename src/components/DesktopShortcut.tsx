import React, {useCallback, useState, useRef, useEffect} from "react";

export interface DesktopShortcutProps {
    // icon: string,
    shortcutName: string;
    shortcutIcon: string;
    onMouseDown: () => void;
    topval: number;
    leftval: number;
}

const DesktopShortcut: React.FC<DesktopShortcutProps> = ({
//    icon,
   shortcutName,
   shortcutIcon,
   onMouseDown,
   topval,
   leftval,

}) => {
    const shortcutId = shortcutName;
    const icon = shortcutIcon;
    const [doubleClickTimerActive, setDoubleClickTimerActive] = useState(false);
    const [isSelected, setIsSelected] = useState(false)

    const [top, setTop] = useState(topval);
    const [left, setLeft] = useState(leftval);
    const [ isDragging, setIsDragging ]  = useState(false);

    const handleClickShortcut = useCallback((event:any) => {
        if (doubleClickTimerActive) {
            onMouseDown && onMouseDown();
            setDoubleClickTimerActive(false);
            return;
        }
        setDoubleClickTimerActive(true);
        setIsSelected(true)
        startDrag(event)
        // set double click timer
        setTimeout(() => {
            setDoubleClickTimerActive(false);
        }, 300);
    }, [doubleClickTimerActive, onMouseDown]);

    const handleClickOutside = useCallback(
        
        (event: MouseEvent) => {
            // @ts-ignore
            const targetId = event.target.id;
            if (targetId !== shortcutId) {
                setIsSelected(false);
            }
        },
        [isSelected, setIsSelected, shortcutId]
    );

    const dragProps = useRef<{
        dragStartX: any;
        dragStartY: any;
    }>();

    const startDrag = (event:any) => {
        const { clientX, clientY } = event;
        setIsDragging(true);
        event.preventDefault();
        dragProps.current = {
            dragStartX: clientX,
            dragStartY: clientY,
        };
        window.addEventListener('mousemove', onDrag, false);
        window.addEventListener('mouseup', stopDrag, false);
    }

    const onDrag = ({ clientX, clientY }: any) => {
        let { x, y } = getXYFromDragProps(clientX, clientY);
        setTop(y);
        setLeft(x);
    }

    const stopDrag = ({ clientX, clientY }: any) => {
        setIsDragging(false);
        let { x, y } = getXYFromDragProps(clientX, clientY);
        setTop(y);
        setLeft(x);
        window.removeEventListener('mousemove', onDrag, false);
        window.removeEventListener('mouseup', stopDrag, false);
    }

    const getXYFromDragProps = (
        clientX: number,
        clientY: number
    ): { x: number; y: number } => {
        if (!dragProps.current) return { x: 0, y: 0 };
        const { dragStartX, dragStartY } = dragProps.current;

        const x = clientX - dragStartX + left;
        const y = clientY - dragStartY + top;

        return { x, y };
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isSelected, handleClickOutside]);
    
    return (
        <div
        id={`${shortcutId}`}
        style={Object.assign({}, styles.appShortcut, { top, left })}
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
        position: 'absolute',
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