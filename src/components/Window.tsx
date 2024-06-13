import React, { useRef, useState, useEffect } from 'react';
import Button from './Button';
import Portfolio from './Portfolio';

export interface WindowProps {
    width: number;
    height: number;
    top: number;
    left: number;
    close: () => void;
    minimize: () => void;
    onInteract: () => void;
    title: string;
    icon: string;
}

const Window: React.FC<WindowProps> = (props) => {
    const windowRef = useRef<any>(null);
    const indicatorRef = useRef<any>(null);


    const [top, setTop] = useState(props.top);
    const [left, setLeft] = useState(props.left);
    const [width, setWidth] = useState(props.width);
    const [height, setHeight] = useState(props.height);

    const [topStore, setTopStore] = useState(props.top);
    const [leftStore, setLeftStore] = useState(props.left);
    const [widthStore, setWidthStore] = useState(props.width);
    const [heightStore, setHeightStore] = useState(props.height);

    const [indicatorHeight, setIndicatorHeight] = useState(height);
    const [indicatorWidth, setIndicatorWidth] = useState(width);
    const [indicatorTop, setIndicatorTop] = useState(top);
    const [indicatorLeft, setIndicatorLeft] = useState(left);

    const [ isDragging, setIsDragging ]  = useState(false);
    const [isMaximized, setIsMaximized] = useState(false);

    const dragProps = useRef<{
        dragStartX: any;
        dragStartY: any;
    }>();

    const maximize = () => {
        if (isMaximized) {
            setHeight(heightStore);
            setWidth(widthStore);
            setTop(topStore);
            setLeft(leftStore);
            setIsMaximized(!isMaximized)
        } else {
            setTopStore(top);
            setLeftStore(left);
            setWidthStore(width);
            setHeightStore(height);
            setTop(0);
            setLeft(0);
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
            setIsMaximized(!isMaximized);

        }
    }

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
        setIndicatorTop(y);
        setIndicatorLeft(x);
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
        setIndicatorHeight(y);
        setIndicatorWidth(x);
    }

    const stopResize = ({ clientX, clientY }: any) => {
        setIsDragging(false);
        let { x, y } = getXYFromResizeProps(clientX, clientY);
        setHeight(Math.max(100,y));
        setWidth(Math.max(100,x));
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

    const minimizeFunc = () => {
        props.minimize && props.minimize();
    };


    return ( 
        <div onMouseDown={() => props.onInteract()}> 
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
                        { !isMaximized && <div
                            style={styles.dragHitbox}
                            onMouseDown={startDrag}
                        /> }
                        { !isMaximized && <div
                            onMouseDown={startResize}
                            style={styles.resizeHitbox}
                        />}
                        <div
                            style={Object.assign({}, styles.topBar)}
                        >
                            <div style={styles.topHeader}>
                                <img src={props.icon} style={styles.windowBarIcon}></img>
                                <div style={{ width: 4 }} />
                                <p style={{color:'white'}}>{props.title}</p>
                            </div>
                            <div style={Object.assign({}, styles.buttons)}> 
                                <Button onClick={minimizeFunc} img="/assets/minimize.png"/>
                                <Button onClick={maximize} img="/assets/maximize.png"/>
                                <div style={{ paddingLeft: 2 }}>
                                    <Button onClick={props.close} img="/assets/close.png"/>
                                </div>
                            </div>
                        </div>
                        <div
                            style={Object.assign({}, styles.spacer)}
                        ></div>
                        <div
                            style={Object.assign({}, styles.insetBorder, {
                                flex: 1,
                                alignItems: 'center',
                            })}
                        >
                            <Portfolio/>
                        </div>
                        <div
                            style={Object.assign({}, styles.spacer)}
                        ></div>
                        <div
                            style={Object.assign({}, styles.bottomBar)}
                        >   
                            <div
                                style={Object.assign({}, styles.insetBorder, {
                                    height: 16,
                                    flex: 3/5,
                                    alignItems: 'center',
                                })}
                            >
                                <p>test text</p>
                            </div>
                            {/* <div
                                style={Object.assign(
                                    {},
                                    styles.insetBorder,
                                    styles.bottomSpacer
                                )}
                            />
                            <div
                                style={Object.assign(
                                    {},
                                    styles.insetBorder,
                                    styles.bottomSpacer
                                )}
                            /> */}
                            <div
                                style={Object.assign({}, styles.insetBorder, {
                                    height: 16,
                                    flex: 2/5,
                                    alignItems: 'center',
                                    marginLeft: 2,
                                })}
                            >
                                <div
                                    style={{
                                        position: 'absolute',
                                        bottom: 6,
                                        right: 6,
                                        pointerEvents: 'none',
                                    }}
                                >
                                <img src={'assets/windowResize.png'} style={{height: 12}}/>
                                </div>
                            </div>
                        </div>
                        <div
                            style={Object.assign({}, styles.spacer)}
                        ></div>
                    </div>
                </div>
            </div>
            {isDragging && <div
            style={Object.assign({}, styles.checkerboard, {
                width: indicatorWidth,
                height: indicatorHeight,
                top: indicatorTop,
                left: indicatorLeft,
                // width,
                // height,
                // top,
                // left,
            })}
            ref={indicatorRef}
            
            > 
            </div>}
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
    topBar: {
        backgroundColor: 'blue',
        width: '100%',
        height: 20,

        alignItems: 'center',
        paddingRight: 2,
        boxSizing: 'border-box',
    },
    topHeader: {
        height:20,
        flex: 1,
        alignItems: 'center',
    },
    spacer: {
        width: '100%',
        height: 4,  
    },
    buttons: {
        alignItems: 'center',
    },
    insetBorder: {
        border: `1px solid ${'white'}`,
        borderTopColor: 'darkGray',
        borderLeftColor: 'darkGray',
        padding: 2,
        overflow: 'hidden',
    },
    bottomBar: {
        flexShrink: 1,
        width: '100%',
        height: 16,

        alignItems: 'center',
    },
    bottomSpacer: {
        width: 16,
        height: 16,
        marginLeft: 2,
    },
    checkerboard: {
        backgroundImage: `linear-gradient(45deg, black 25%, transparent 25%),
        linear-gradient(-45deg, black 25%, transparent 25%),
        linear-gradient(45deg, transparent 75%, black 75%),
        linear-gradient(-45deg, transparent 75%, black 75%)`,
        backgroundSize: `4px 4px`,
        backgroundPosition: `0 0, 0 2px, 2px -2px, -2px 0px`,
        pointerEvents: 'none',
        position: 'absolute',
    },
    windowBarIcon: {
        paddingLeft: 2,
        height:16,
    },
};

export default Window