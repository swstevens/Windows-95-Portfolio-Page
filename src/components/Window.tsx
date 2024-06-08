import React, { useRef, useState } from 'react';

export interface WindowProps {
    width: number;
    height: number;
    top: number;
    left: number;
}

const Window: React.FC<WindowProps> = (props) => {
    const windowRef = useRef<any>(null);

    const [top, setTop] = useState(props.top);
    const [left, setLeft] = useState(props.left);
    const [width, setWidth] = useState(props.width);
    const [height, setHeight] = useState(props.height);

    return ( 
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
    )
}

const styles: StyleSheetCSS = {
    window: {
        backgroundColor: 'lightgray',
        position: 'absolute',
    },
};

export default Window