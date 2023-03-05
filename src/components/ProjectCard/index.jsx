import React from "react";
import {Link} from 'react-router-dom';

function ProjectCard (props) {
    const {projectData} = props;

    return (
        <div class="project-card" >
            <Link to={`/project/${projectData.id}`}>
            <div class="display-container">
                <div class="project-card-title">{projectData.title}</div>
                <img class="project-card-image" src={projectData.image} alt="Project"></img>
            </div>
                {/* <img src={projectData.image}></img>
                <h3>{projectData.title}</h3> */}
            </Link>

        </div>

    )
}

export default ProjectCard;