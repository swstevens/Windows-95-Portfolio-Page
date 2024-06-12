import { TrackballControls } from "@react-three/drei";
import React from "react";

export interface ToolbarProps {
    isOpen: boolean,
    minimize: () => void,

}


const Toolbar: React.FC<ToolbarProps> = (props) => {
    return (
        <div style={{width: '100%', paddingRight: '6px'}}>
            <div style={styles.tabContainerOuter}>
                <div style={styles.tabContainer}>
                    <p style={styles.containerText}>test text</p>
                </div>
            </div>
            <div style={styles.spacer}/>
            <div style={styles.center}></div>
            <div style={styles.tabContainerOuter}>
                <div style={styles.tabContainer}>
                    <p style={styles.containerText}>test text</p>
                </div>
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
        // flex: 1,
    },
    containerText: {
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
        alignItems: 'start',
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
    }

};

export default Toolbar;