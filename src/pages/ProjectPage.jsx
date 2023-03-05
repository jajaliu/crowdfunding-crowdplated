import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {oneProject} from '../data';

function ProjectPage() {
    const [projectData, setProjectData] = useState({pledges: []});
    const {id} = useParams();

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}projects/${id}`)
        .then((results) => {
            return results.json();
        })
        .then((data) => {
            setProjectData(data);
        })
    }, []);
  

    return (
        <div class="project-detail">
            <div class="project-detail-column">
                <img class="project-detail-image" src={projectData.image} alt="Project"></img>
            </div>

            <div class="project-detail-column">
                <h2 class="project-detail-title">{projectData.title}</h2>
                <p class="project-detail-date">{projectData.date_created} </p>
                <p class="project-detail-description">{projectData.description}</p>
                
                {/* <h3>{`Status: ${projectData.is_open}`}</h3> */}
                <h3>Pledges:</h3>
                <ul>
                    {projectData.pledges.map((pledge, key) => {
                        return <li key={key}>{`A user commented "${pledge.comment}" and pledged $${pledge.amount} `}</li>;
                    })}
                </ul>
            </div>
            
        </div>
    )
}

export default ProjectPage;
