import React from "react";

const Portfolio = ()=> {
    return (
        <div style={styles.verticalTextBox}>
            <p style={styles.verticalText}><em>SHEA STEVENS</em></p>
        </div>
    )
};

export default Portfolio;

const styles: StyleSheetCSS = {
    verticalTextBox: {
        writingMode: 'vertical-rl',
        position: 'relative',
        height: 'fit-content',
        // bottom: '0%',
        left: '0',
        color: '#ed217c',
        opacity: 0.5,
        overflow: 'hidden',
    },
    verticalText: {
        fontSize: '72px',
        fontWeight: 'bolder',
        fontStyle: 'italic',
        font: '4rem "Microgramma", sans-serif',
        position:'relative',
        height: 'fit-content',
        width: 'fit-content',
        blockSize: 'fit-content',
        bottom: '0px',
        left: '-24px',
        margin: 0,
        padding: 0,
        overflow: 'hidden'
    }
};