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
        <img src="./myComputer.png"></img>
        <p
        id={`${shortcutId}`}
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
        width: 56,

        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        textAlign: 'center',
    },
    shortcutText: {
        cursor: 'pointer',
        textOverflow: 'wrap',
        fontFamily: 'MSSerif',
        color: 'white',
        fontSize: 8,
        paddingRight: 2,
        paddingLeft: 2,
    },
}

export default DesktopShortcut