import React from "react";

const Projects = () => {
    return (
        <>
        <h1 style={{padding: 0, marginBottom:0}} >THIS WEBSITE</h1>
        <h3 style={{margin:0, paddingLeft: '4px'}}>A react website in all its Win95 goodness</h3>
        <a style={{paddingLeft: '4px'}} href="https://github.com/swstevens/internal-site">https://github.com/swstevens/internal-site</a>
        <br />
        <div className="text-block">
            <p>
            interesting text will go here
            </p>
            <br />
            <p>
            and add the image to the right or below the text
            </p>
        </div>

        <h1 style={{padding: 0, marginBottom:0}} >PS1 SHADER</h1>
        <h3 style={{margin:0, paddingLeft: '4px'}}>A recreation of ps1 era graphics in Godot</h3>
        <a style={{paddingLeft: '4px'}} href="https://github.com/swstevens/Godot-and-Shaders">https://github.com/swstevens/Godot-and-Shaders</a>
        <br />
        <div className="text-block">
            <p>
            interesting text will go here
            </p>
            <br />
            <p>
            and add the image to the right or below the text
            </p>
        </div>

        <h1 style={{padding: 0, marginBottom:0.1}}>'23 WEBSITE</h1>
        <a style={{paddingLeft: '4px'}} href="https://github.com/swstevens/react-website">https://github.com/swstevens/react-website</a>
        <br />
        <div className="text-block">
            <p>
            Collaborated with up to 10 team members to schedule weekly practices and matches. Organized video reviews of practices and matches to improve communication, coordination, and cohesion between members.
            </p>
        </div>   

        <h1 style={{padding: 0, marginBottom:0.1}}>ASCII GEN</h1>
        <h3 style={{margin:0.5, paddingLeft: '4px'}}>A fun script that converts an image to an ascii render</h3>
        <a style={{paddingLeft: '4px'}} href="https://github.com/swstevens/ascii-converter">https://github.com/swstevens/ascii-converter</a>

        <br />
        <div className="text-block">
            <p>
            Collaborated with up to 10 team members to schedule weekly practices and matches. Organized video reviews of practices and matches to improve communication, coordination, and cohesion between members.
            </p>
        </div>   

        <h1 style={{padding: 0, marginBottom:0.1}}>REST SITE</h1>
        <h3 style={{margin:0.5, paddingLeft: '4px'}}>An iterative project to build a RESTful site using MongoDB</h3>
        <a style={{paddingLeft: '4px'}} href="https://bitbucket.org/swstevens/">https://bitbucket.org/swstevens/</a>

        <br />
        <div className="text-block">
            <p>
            Collaborated with up to 10 team members to schedule weekly practices and matches. Organized video reviews of practices and matches to improve communication, coordination, and cohesion between members.
            </p>
        </div>   
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

}

export default Projects;