import React from "react";
import About from "./About";
import { Home } from "./Home";
import { useState } from "react";
import Experience from "./Experience";
import Projects from "./Projects";
import { MemoryRouter as Router, Routes, Route, useLocation} from 'react-router-dom';
import Sidebar from "./Sidebar";
import LeftBar from "./LeftBar";

const Portfolio = ()=> {
    const [activePage, setActivePage] = useState('');
    const setActive = (page:string) => {
        setActivePage(page);
    };
    const isActive = (page:string) => {
        return activePage == page;
    };
    return (
        <div style={styles.parent}>
        <Router>
            {window.innerWidth > 480 ? <LeftBar/> : <></> } 
            <Routes>
            <Route path= '/' element= {<Home/>} />
            <Route path= '/About' element= {<About/>} />
            <Route path= '/Experience' element= {<Experience/>} />
            <Route path= '/Projects' element= {<Projects/>} />
            </Routes>
            <Sidebar/> 

        </Router>
        
        </div>
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
flexGrow: 1, minWidth: '0px',display: 'block', width: 0, maxWidth:'100%',overflow:'scroll',
flexDirection:'column'

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