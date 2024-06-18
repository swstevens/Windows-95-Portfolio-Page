import React from "react";
import About from "./About";
import { Home } from "./Home";
import { useState } from "react";
import Experience from "./Experience";
import Projects from "./Projects";

const Portfolio = ()=> {
    const [activePage, setActivePage] = useState('');
    const setActive = (page:string) => {
        setActivePage(page);
    };
    const isActive = (page:string) => {
        return activePage == page;
    };
    return (
        <>
        {isActive('') && 
        <Home 
            setHome={() => setActive('')}
            setAbout={() => setActive('About')}
            setExperience={() => setActive('Experience')}
            setProjects={() => setActive('Projects')}
        />}

        {!isActive('') && <div className={'parent'} style={styles.parent}>
            <div style={styles.variableColumn}>
            <div style={styles.fixedColumnLeft}>
                <p style={styles.text}>SHEA_STEVENS</p>
            </div>
            <div style={styles.variableColumnInside}>
                {isActive('About') && <About/>}
                {isActive('Experience') && <Experience/>}
                {isActive('Projects') && <Projects/>}
            </div>
            </div>
            { window.innerWidth >= 480 && <div style={styles.fixedColumn}>
                <img src="assets/headspin-square-unscreen.gif" alt="my head" style={styles.headspin}/>
                <p>That's Me!</p>
                <div style={{height:'64px'}}></div>
                <p style={styles.hyperlink} onClick={() => setActive('')}><u>Home</u></p>
                <p style={styles.hyperlink} onClick={() => setActive('About')}><u>About Me</u></p>
                <p style={styles.hyperlink} onClick={() => setActive('Experience')}><u>Experience</u></p>
                <p style={styles.hyperlink} onClick={() => setActive('Projects')}><u>Projects</u></p>


            </div>}
        </div>}
        </>
    )
};

export default Portfolio;

const styles: StyleSheetCSS = {
    parent: {
        display: 'flex',
        width: '100%',
        height: '100%',
    },
    variableColumn: {
        flex: 1,
    },
    variableColumnInside: {
        flex: 1,
        textAlign: 'left',
        flexDirection: 'column',
        // display: "inline-block",
        overflow: 'auto',
        paddingRight: '30px',
        paddingLeft: '30px'

    },
    fixedColumn: {
        flex: 0,
        minWidth: '250px', 
        maxWidth: '250px',
        position: 'sticky',
        top: 0,
        alignItems: "center",
        display: 'inline-block',
        justifyContent: 'center',
        textAlign: 'center',
    },
    fixedColumnLeft: {
        flex: 0,
        writingMode: 'vertical-rl',
        minWidth: '64px', 
        maxWidth: '64px',
        position: 'sticky',
        top: 0,
        padding: 0,
        margin: 0,
        justifyContent: 'center',
        alignItems:'center',
        textAlign: 'center',
        overflow: 'hidden'
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
        fontWeight: '900',
        fontStyle: 'italic',
        font: '"Microgramma", sans-serif',
        // blockSize: 'fit-content',
        left: '-24px',
        textAlign: 'center',
        overflow: 'hidden'
    },
    text: {
        flex: 0,
        position: 'relative',
        padding: 0,
        margin: 0,
        fontSize: '72px',
        fontWeight: 'bolder',
        font: '4rem "Microgramma", sans-serif',
        left: '-24px',
        color: 'darkred',
        opacity: 0.9,
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
    headspin: {
        width: 150,
        height: 150,
        paddingTop: '40px',
    },
    image: {
        height: 'auto',
        width: '100%',
        paddingTop: '10%',
    },
    verticalImage: {
        alignSelf: 'center',
        // width: '80%',
        marginLeft: 32,
        flex: 0.8,

        alignItems: 'center',
        // marginBottom: 32,
        textAlign: 'center',
        flexDirection: 'column',
    },
    hyperlink: {
        color: 'blue',
        cursor: 'pointer',
        paddingTop: '16px',
    },
};