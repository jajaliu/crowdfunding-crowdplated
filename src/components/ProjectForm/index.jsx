import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

function ProjectForm(){
    const [projectDetails, setProjectDetails] = useState({
        title: "",
        address: "",
        description: "",
        cuisine: "",
        image: "",
        goal: "",
        is_open: "",
    });

    const navigate = useNavigate();

    const handleChange = (event) => {
        const {id, value} = event.target;
        setProjectDetails((prevProjectDetails) =>({
            ...prevProjectDetails,
            [id]: value,
            
        }));
    };

    const postData = async() => {
        const token = window.localStorage.getItem("token");
        const response = await fetch(
            `${import.meta.env.VITE_API_URL}create-project/`, {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `token ${token}`
                },
                body: JSON.stringify(projectDetails),
            }
        );
        if (response.status !== 201) {
            throw new Error(response.statusText);
        }
        return response.json();
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        postData().then((response) => {
            navigate("/");
        })
    }

    return (
        <form >
           
            <div>
                <label htmlFor="title">Title: </label>
                <input
                    type="text"
                    class="inputFields"
                    id="title"
                    placeholder="Enter title"
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="address">Address: </label>
                <input
                    type="text"
                    class="inputFields"
                    id="address"
                    placeholder="Enter your resaurant's address"
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="description">Description: </label>
                <input
                    type="text"
                    class="inputFields"
                    id="description"
                    placeholder="Enter a description"
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="cuisine">Cuisine: </label>
                <input
                    type="text"
                    class="inputFields"
                    id="cuisine"
                    placeholder="Enter the cuisine"
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="image">Image: </label>
                <input
                    type="url"
                    class="inputFields"
                    id="image"
                    placeholder="Enter the URL for the image"
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="goal">Goal: </label>
                <input
                    type="number"
                    class="inputFields"
                    id="goal"
                    placeholder="Enter the goal"
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="is_open">Open for pledges: </label>
                <input
                    type="checkbox"
                    class="inputFields"
                    id="is_open"
                    onChange={handleChange}
                />
            </div>
            <button type="submit" id="submit-btn" onClick={handleSubmit}>Submit</button>
        </form>
    )
}

export default ProjectForm;