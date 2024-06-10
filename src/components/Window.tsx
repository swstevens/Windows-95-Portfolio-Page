import React, { useRef, useState, useEffect } from 'react';

export interface WindowProps {
    width: number;
    height: number;
    top: number;
    left: number;
}

const Window: React.FC<WindowProps> = (props) => {
    const windowRef = useRef<any>(null);
    const dragRef = useRef<any>(null);


    const [top, setTop] = useState(props.top);
    const [left, setLeft] = useState(props.left);
    const [width, setWidth] = useState(props.width);
    const [height, setHeight] = useState(props.height);

    const [ isDragging, setIsDragging ]  = useState(false);
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

    const startResize = (event:any) => {
        const { clientX, clientY } = event;
        setIsDragging(true);
        event.preventDefault();
        dragProps.current = {
            dragStartX: clientX,
            dragStartY: clientY,
        };
        window.addEventListener('mousemove', onResize, false);
        window.addEventListener('mouseup', stopResize, false);
    }
    const onResize = ({ clientX, clientY }: any) => {
        let { x, y } = getXYFromResizeProps(clientX, clientY);
        setHeight(y);
        setWidth(x);
    }
    const stopResize = ({ clientX, clientY }: any) => {
        setIsDragging(false);
        let { x, y } = getXYFromResizeProps(clientX, clientY);
        setHeight(y);
        setWidth(x);
        window.removeEventListener('mousemove', onResize, false);
        window.removeEventListener('mouseup', stopResize, false);
    }
    const getXYFromResizeProps = (
        clientX: number,
        clientY: number
    ): { x: number; y: number } => {
        if (!dragProps.current) return { x: 0, y: 0 };
        const { dragStartX, dragStartY } = dragProps.current;

        const x = clientX - dragStartX + width;
        const y = clientY - dragStartY + height;

        return { x, y };
    };


    return ( 
        <div>
            <div
            style={Object.assign({}, styles.window, {
                width,
                height,
                top,
                left,
            })}
            ref={windowRef}
            >
                <div style={styles.windowBorderOuter}>
                    <div style={styles.windowBorderInner}>
                        <div
                            style={styles.dragHitbox}
                            onMouseDown={startDrag}
                        ></div>
                        <div
                            onMouseDown={startResize}
                            style={styles.resizeHitbox}
                        ></div>
                        <div
                            style={Object.assign({}, styles.insetBorder, {
                                flex: 1,
                                alignItems: 'center',
                            })}
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const styles: StyleSheetCSS = {
    window: {
        backgroundColor: 'LightGray',
        position: 'absolute',
    },
    windowBorderOuter: {
        border: `1px solid ${'black'}`,
        borderTopColor: 'lightGray',
        borderLeftColor: 'lightGray',
        flex: 1,
    },
    windowBorderInner: {
        border: `1px solid ${'darkGray'}`,
        borderTopColor: 'white',
        borderLeftColor: 'white',
        flex: 1,
        padding: 2,

        flexDirection: 'column',
    },
    dragHitbox: {
        position: 'absolute',
        width: 'calc(100% - 70px)',
        height: 48,
        zIndex: 10000,
        top: -8,
        left: -4,
        cursor: 'move',
    },
    resizeHitbox: {
        position: 'absolute',
        width: 60,
        height: 60,
        bottom: -20,
        right: -20,
        cursor: 'nwse-resize',
    },
    insetBorder: {
        border: `1px solid ${'white'}`,
        borderTopColor: 'darkGray',
        borderLeftColor: 'darkGray',
        padding: 2,
    },
};

export default Window