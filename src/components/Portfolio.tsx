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
            <div style={styles.fixedColumnLeft}>
                <p style={styles.text}>SHEA_STEVENS</p>
            </div>
            <div style={styles.variableColumnInside}>
            {/* <img src={me} style={styles.topImage} alt="" /> */}
            <h1 >WELCOME</h1>
            <h3>I'm Shea Stevens</h3>
            <br />
            <div className="text-block">
                <p>
                    I'm a full stack software engineer looking for employment! In 2021 I graduated from 
                    the University of Oregon
                    with my BS in Computer Science. Minors in Mathematics and Japanese. 
                </p>
                <br />
                <p>
                    Thank you for taking the time to check out my portfolio. I
                    really hope you enjoy exploring it as much as I enjoyed
                    building it. If you have any questions or comments, feel
                    free to contact me using{' '}
                    <a href="mailto:sstevensw@gmail.com">
                        sstevensw@gmail.com
                    </a>
                </p>
            </div>
            <div className="text-block">
                <h3>About Me</h3>
                <br />
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <br />

                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <br />
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <br />
                <br />
                <div style={{}}>
                    <div
                        style={{
                            flex: 1,
                            textAlign: 'justify',
                            alignSelf: 'center',
                            flexDirection: 'column',
                        }}
                    >
                        <h3>My Hobbies</h3>
                        <br />
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <br />
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                    <div style={styles.verticalImage}>
                        <img src={'assets/cherry blossom 2024.jpg'} style={styles.image} alt="" />
                        <p>
                            <sub>
                                <b>Figure 2:</b> Me, April 2024
                            </sub>
                        </p>
                    </div>
                </div>
                <br />
                <br />
                <p>
                    If you have any questions or comments I would love to hear
                    them. You can reach me through the{' '}
                    at{' '}
                    <a href="mailto:sstevensw@gmail.com">
                        sstevensw@gmail.com
                    </a>
                </p>
        </div>
            </div>
            </div>
            <div style={styles.fixedColumn}>
                <img src="assets/headspin-square-unscreen.gif" alt="my head" style={styles.headspin}/>
                <p>That's Me!</p>
            </div>
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
        paddingTop: '48px',
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
};