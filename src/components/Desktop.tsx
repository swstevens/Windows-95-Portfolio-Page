import React from 'react';

export interface DesktopProps {}


const Desktop: React.FC<DesktopProps> = (props) => {
    return ( 
        <div style={styles.desktop}></div>
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