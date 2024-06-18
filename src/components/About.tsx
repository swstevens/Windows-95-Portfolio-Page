import React from "react";
import  { Link } from "react-router-dom";

const About = () => {
    return (
        <>
        <div style={{flexGrow: 1, minWidth: '0px',display: 'block', width: 0, maxWidth:'100%',overflow:'scroll'}}>
        <h1 >WELCOME</h1>
            <h3>I'm Shea Stevens</h3>
            <br />
            <div className="text-block">
                <p>
                    I'm a full stack software engineer looking for employment! I was born and raised in Hawaii, and in 2021 I graduated from 
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
                <br />
                <div style={styles.resumeContainer}>
                    <img style={styles.resumePrinter} alt="" src={'assets/printer.gif'} />
                    <div style={styles.resumeContainerText}>
                    <h3 style={{margin:0}}>{'Looking for my resume?'}</h3>
                    <a rel="noreferrer" target="_blank" href={'assets/Shea_Stevens_Res_June_New.pdf'} download>
                        <p>Click here to download it!</p>
                    </a>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <h3>About Me</h3>
                <br />
                {/* <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p> */}
                <p>
                    I've always been an avid tinkerer. From laptops to VCR's to robotics, my childhood was filled with taking things apart and seeing how they work. These days, I'm a coder. I love to do back end work, setting up the connections between all of the different systems in an environment. Whether it's a large monolith, or a swift microservice system, I'm always at home working through additions and optimizations.
                </p>
                <br />
                <p>
                    Most of my experience lies in coding backend API's, but I'm rapidly building skills to work as a Full Stack Developer. By far, I used Python the most. It may not be the fastest language out there, but its lenient syntax let's you spin a small project up the fastest. When speed is a priority, I like to use C# or C++. And of course, I've got all those algorithm skills that they teach you in university too (Djikstra eat your heart out).
                </p>
                <br />
                {/* <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p> */}
                <p>
                   My passion for programming also comes from the love of video games, which have shaped a lot of who I am today. When I would pick up my controller and be amazed by what could be created through code, I knew deep down that this was my path in life. That early era of janky, low poly models is something that I hold dear to my heart, and something that I replicate in my own personal projects. It helps that you don't need a super large team like newer releases, either.
                </p>
                <br />
                {/* <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p> */}
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
                        {/* <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p> */}
                        <p>
                            Outside of programming, I've got quite a few hobbies. Flim photography is one. Nothing beats the physical mediums in my opnion, and the imperfections that come with film. You can check out some of my photographs here:
                        </p>
                        <br />
                        <p>
                            My personal projects tend to include some form of retro game. Recently, I've really liked the Godot Engine, due to it's open source and free nature. After the debacle with Unity liscensing, I've seen a lot of indie devs move there as well. Probably the most interesting thing about it is the language it uses, aptly named Godot, which is it's own fork of C#. Perfect for those smaller teams looking to build a retro labor of love.
                        </p>
                        <br />
                        <p>
                            And believe it or not, I'm quite a cook. While recipes can be quite formulaic, I try to keep my instincts in mind in the kitchen. Learn enough about the ingredients you cook with and you can come up with something pretty unique based on what's in your fridge. 
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
            {/* <div style={styles.fixedColumn}>
                <img src="assets/headspin-square-unscreen.gif" alt="my head" style={styles.headspin}/>
                <p>That's Me!</p>
                <div style={{height:'64px'}}></div>
                <Link to="/">Home</Link>
                <Link to="/About">About</Link>
                <Link to="/Experience">Experience</Link>
                <Link to="/Projects">Projects</Link>


            </div> */}
            </>
    )
}

const styles: StyleSheetCSS = {
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
    resumeContainer: {
        padding: 12,
        boxSizing: 'border-box',
        border: '2px solid black',
        borderLeftWidth: 0,
        borderRightWidth: 0,
        width: '100%',
        alignItems: 'center',
    },
    resumeContainerText: {
        flexDirection: 'column',
    },
    resumePrinter: {
        width: 56,
        height: 48,
        paddingRight: 24,
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
        flexDirection: 'column',
    },
    headspin: {
        width: 150,
        height: 150,
        paddingTop: '40px',
    },
}

export default About;