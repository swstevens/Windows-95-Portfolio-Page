import React from "react";

const Portfolio = ()=> {
    return (
        // <div>
        // <div style={styles.verticalTextBox}>
        //     <p style={styles.verticalText}><em>SHEA STEVENS</em></p>
        // </div>
        // <div style={styles.navbar}>
        //     <p><em>some text</em></p>
        // </div>
        // </div>

        <div className={'parent'} style={styles.parent}>
            <div style={styles.variableColumn}>
            <div style={styles.verticalTextBox}>
                <p style={styles.verticalText}><em>SHEA STEVENS</em></p>
            </div>
            </div>
            <div style={styles.fixedColumn}></div>
        </div>
    )
};

export default Portfolio;

const styles: StyleSheetCSS = {
    parent: {
        display: 'flex',
        width: '100%',
        height: '100%'
,    },
    variableColumn: {
        flex: 1
    },
    fixedColumn: {
        flex: 0,
        minWidth: '300px', 
        maxWidth: '300px',
        position: 'sticky',
        top: 0,
    },
    verticalTextBox: {
        writingMode: 'vertical-rl',
        // bottom: '0%',
        left: '0',
        color: '#ed217c',
        opacity: 0.5,
        overflow: 'hidden',
        textAlign: 'center',
        minWidth: 'fit-content',
        maxWidth: 'fit-content',
        lineHeight: '1.5'
    },
    verticalText: {
        fontSize: '72px',
        fontWeight: 'bolder',
        fontStyle: 'italic',
        font: '4rem "Microgramma", sans-serif',
        // blockSize: 'fit-content',
        left: '-24px',
        textAlign: 'center',
        overflow: 'hidden'
    },
    navbar: {
        width: 300,
        height: '100%',
        flexDirection: 'column',
        padding: 48,
        boxSizing: 'border-box',
        position: 'fixed',
        overflow: 'hidden',
    },
};