import React from "react";

export interface HomeProps {
    setHome: () => void;
    setAbout: () => void;
    setExperience: () => void;
    setProjects: () => void;
}

export const Home: React.FC<HomeProps>  = (props) => {
    return (
        <div style={{height: '100%', width: '100%', flexDirection: 'column', alignItems:'center', justifyContent: 'center'}}>
            <div style={styles.half}>
                <img src="assets/headspin-square-unscreen.gif" alt="my head" style={styles.headspin}/>
            </div>
            <div style={styles.half}>
                <h1>SHEA STEVENS</h1>
                <div>
                <p style={styles.hyperlink} onClick={() => props.setHome()}><u>Home</u></p>
                <p style={styles.hyperlink} onClick={() => props.setAbout()}><u>About Me</u></p>
                <p style={styles.hyperlink} onClick={() => props.setExperience()}><u>Experience</u></p>
                <p style={styles.hyperlink} onClick={() => props.setProjects()}><u>Projects</u></p>
                </div>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    half: {
        height: '50%',
        width: '100%',
        alignItems: 'center',
        flexDirection: 'column',
    },
    hyperlink: {
        color: 'blue',
        cursor: 'pointer',
        paddingLeft: '32px',
        paddingRight: '32px',
    }
}