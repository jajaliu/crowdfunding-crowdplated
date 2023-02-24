import React, {useState, useEffect} from 'react';
import {allProjects} from "../data";
import ProjectCard from '../components/ProjectCard';

function HomePage() {
    const[projectList, setProjectList] = useState([]);

    useEffect(() => {
        // setProjectList(allProjects);
        fetch(`${import.meta.env.VITE_API_URL}projects`)
        .then((results) => {
            return results.json();
        })
        .then((data) => {
            setProjectList(data);
        })
    }, []);
    
    return (
        <div>
            {/* {allProjects.map((projectData, key) =>{
                return <div key={key}>{projectData.title}{projectData.id}</div>
            })} */}
            {projectList.map((projectData, key) =>{
                return <ProjectCard key={key} projectData={projectData}/>
            })}
        </div>
    )
}

export default HomePage;