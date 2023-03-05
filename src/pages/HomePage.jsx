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
            {/* <h1>CrowdPlated</h1>
             */}
            <header id="home">
                <img id="home_image" src="src/assets/home_image.jpg" alt="CrowdPlated" ></img>
                <div class="text_ontop">
                    <h1 is="h1-home">CrowdPlated</h1>
                    <h4>Bring your dream restaurant to life</h4> 
                </div>
            </header>

            <div class="content">
                <div id="projects">
                    <h2 id="project-section">Projects</h2>

                </div>

                <div class="row">
                    {projectList.map((projectData, key) =>{
                        return <ProjectCard key={key} projectData={projectData}/>
                    })}
                </div>

                

            </div>


        </div>
    )
}

export default HomePage;