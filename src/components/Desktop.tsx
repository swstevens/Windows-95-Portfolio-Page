import React from 'react';
import DesktopShortcut from './DesktopShortcut';

export interface DesktopProps {}


const Desktop: React.FC<DesktopProps> = (props) => {
    return ( 
        <div style={styles.desktop}>
            <DesktopShortcut
                shortcutName={"banana"}
            />
        </div>
    )
}

const styles: StyleSheetCSS = {
    desktop: {
        minHeight: '100%',
        flex: 1,
        backgroundColor: '#3e9697',
    }
};

export default Desktop;