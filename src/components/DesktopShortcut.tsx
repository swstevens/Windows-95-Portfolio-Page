import React from "react";

export interface DesktopShortcutProps {
    // icon: string,
    shortcutName: string;
    onOpen?: () => void;
}

const DesktopShortcut: React.FC<DesktopShortcutProps> = ({
//    icon,
   shortcutName,

}) => {
    const shortcutId = shortcutName;


    return (
        <div
        id={`${shortcutId}`}
        style={Object.assign({}, styles.appShortcut)}
    >
        <img style={{height:48, width:48}} src="assets/myComputer.png"></img>
        <p
        id={`${shortcutId}`}
        className='osText'
        style={Object.assign(
            {},
            styles.shortcutText,
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
    shortcutText: {
        cursor: 'pointer',
        textOverflow: 'wrap',
        color: 'white',
        fontSize: 16,
    },
}

export default DesktopShortcut