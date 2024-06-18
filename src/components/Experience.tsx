import React from "react";

const Experience = () => {
    return (
        <div style={{flexGrow: 1, minWidth: '0px',display: 'block', width: 0, maxWidth:'100%',overflow:'scroll'}}>
        <h1 style={{padding: 0, marginBottom:0}} >VINDICIA</h1>
        <h3 style={{margin:0, paddingLeft: '4px'}}>San Francisco, 03/22-12/23</h3>
        <br />
        <div className="text-block">
            <p>
            As a full stack developer, developed frontend features leveraging React and backend microservices utilizing Python Flask, DynamoDB, and PostgreSQL to streamline and integrate processes, serving to drive  seamless integration and iteration. Maintained and enhanced critical legacy billing system within Perl and PostgreSQL in alignment with modernization initiatives. Oversaw end-to-end projects from requirements gathering through the comprehensive software development life cycle of billing systems and transaction retention.
            </p>
            <br />
            <p>
            Identified feature gap in service and designed new microservice to fit into current system design in Python/Flask to fill consumer needs, boosting user retention by 20%. 
Collaborated with cross-functional teams to create detailed specifications, user stories, and acceptance criteria in line with best practices to accelerate project release time by two release cycles. 
Built and improved Amazon S3 and DynamoDB storage system to store transaction information and batch logs.
Proactively addressed improperly built API calls forecasted for release by rewriting logic and collaborating with senior engineers prior to code freeze, enabling new features to release on schedule while ensuring quality coding.

            </p>
        </div>

        <h1 style={{padding: 0, marginBottom:0}} >UO TECHDESK</h1>
        <h3 style={{margin:0, paddingLeft: '4px'}}>Eugene, 09/19-08/21</h3>
        <br />
        <div className="text-block">
            <p>
            Partnered with customers to effectively resolve technical and university account-related issues to optimize satisfaction and yield positive feedback. Worked closely with various internal teams using Microsoft Teams to effectively maintain an engaging culture. Performed in the top 5% of team members in customer assistance.
Utilized Confluence to document internal records and highlight best practices on how to solve IT challenges, enabling active and future employees to accelerate resolutions beyond former capacity. 
            </p>

        </div>

        <h1 style={{padding: 0, marginBottom:0.1}} >UO ESPORTS</h1>
        <h3 style={{margin:0.5, paddingLeft: '4px'}}>Eugene, 09/19-06/21</h3>
        <br />
        <div className="text-block">
            <p>
            Collaborated with up to 10 team members to schedule weekly practices and matches. Organized video reviews of practices and matches to improve communication, coordination, and cohesion between members.
            </p>
        </div>   
        </div>
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

export default Experience;