import { TrackballControls } from "@react-three/drei";
import React, { useEffect } from "react";

export interface ToolbarProps {
    isMinimized: boolean,
    isOpen: boolean,
    minimize: () => void,

}


const Toolbar: React.FC<ToolbarProps> = (props) => {
    const click = () =>{
        props.minimize()
    }

    return (
        <div style={{width: '100%', paddingRight: '6px'}}>
            <div style={styles.tabContainerOuter}>
                <div style={styles.tabContainer}>
                    <p style={styles.containerText}>test text</p>
                </div>
            </div>
            <div style={styles.spacer}/>
            <div style={styles.center}>
                {props.isOpen && props.isMinimized && <div style={styles.centerContainerOuter} onMouseDown={click}>
                    <div style={styles.tabContainer}>
                        <p style={styles.containerText}>test text</p>
                    </div>
                </div>}
                {props.isOpen && !props.isMinimized && <div style={styles.centerContainerOuterOn} onMouseDown={click}>
                    <div style={styles.tabContainerOn}>
                        <p style={styles.containerText}>test text</p>
                    </div>
                </div>}
            </div>
            <div style={styles.timeContainerOuter}>
                {/* <div style={styles.timeContainer}> */}
                    <p style={styles.containerText}>12:00</p>
                {/* </div> */}
            </div>
        </div>
    )
}

const styles: StyleSheetCSS = {
    tabContainerOuter: {
        border: `1px solid ${'white'}`,
        borderBottomColor: 'black',
        borderRightColor: 'black',
        width: '100px',
        height: '24px'
        // flex: 1,
    },
    centerContainerOuter: {
        border: `1px solid ${'white'}`,
        borderBottomColor: 'black',
        borderRightColor: 'black',
        minWidth: '50px',
        width: '50%',
        height: '24px'
        // flex: 1,
    },
    centerContainerOuterOn: {
        border: `1px solid ${'black'}`,
        borderBottomColor: 'white',
        borderRightColor: 'white',
        minWidth: '50px',
        width: '50%',
        height: '24px'
        // flex: 1,
    },
    tabContainerOn: {
        display: 'flex',
        border: `1px solid ${'gray'}`,
        borderBottomColor: 'darkgray',
        borderRightColor: 'darkgray',
        backgroundImage: `linear-gradient(45deg, white 25%, transparent 25%),
        linear-gradient(-45deg, white 25%, transparent 25%),
        linear-gradient(45deg, transparent 75%, white 75%),
        linear-gradient(-45deg, transparent 75%, white 75%)`,
        backgroundSize: `4px 4px`,
        backgroundPosition: `0 0, 0 2px, 2px -2px, -2px 0px`,
        alignItems: 'center',
        flex: 1,
    },
    containerText: {
        // fontWeight: 'bold',
        paddingLeft:4,
        paddingRight:4,
    },
    tabContainer: {
        display: 'flex',
        border: `1px solid ${'darkGray'}`,
        borderBottomColor: 'gray',
        borderRightColor: 'gray',
        alignItems: 'center',
        flex: 1,
    },
    center: {
        justifyContent: 'start',
        width: 'fit-content',
        flexGrow: 1,
    },
    tabIcon: {
        marginRight: 6,
    },
    spacer: {
        display:'flex',
        width: '0px',
        border: `1px solid ${'darkGray'}`,
        borderLeftColor: 'white',
        borderTopColor: 'white',
        marginLeft: '4px',
        marginRight: '4px',
    },
    timeContainerOuter: {
        border: `1px solid ${'gray'}`,
        borderBottomColor: 'white',
        borderRightColor: 'white',
        width: '56px',
        height: '24px',
        justifyContent: 'center',
        alignItems: 'center',

        // flex: 1,
    },
    timeContainer: {
        display: 'flex',
        border: `1px solid ${'gray'}`,
        borderBottomColor: 'darkgray',
        borderRightColor: 'darkgray',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },

};

export default Toolbar;