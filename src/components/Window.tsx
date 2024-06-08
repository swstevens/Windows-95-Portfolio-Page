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

    const handleMouseInteract = (event:any) => {
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


    return ( 
        <div onMouseDown={handleMouseInteract} ref={dragRef}>
            <div
            style={Object.assign({}, styles.window, {
                width,
                height,
                top,
                left,
            })}
            ref={windowRef}
            >
            </div>
        </div>
    )
}

const styles: StyleSheetCSS = {
    window: {
        backgroundColor: 'lightgray',
        position: 'absolute',
    },
};

export default Window