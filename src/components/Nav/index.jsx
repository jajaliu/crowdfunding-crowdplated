import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom';

function Nav() {
    
    const [isUserSignedIn, setIsUserSignedIn] = useState(false);
    const token = window.localStorage.getItem("token");

    useEffect(() => {
        console.log("useEffect called");
        

        if( token !== null){
            setIsUserSignedIn(prevState => {
                return {
                    ...prevState,
                    isUserSignedIn : !isUserSignedIn
                }
            });
        }
        
    }, [token]);


    return (
        <nav>
            <div><Link to="/">
            <img id="logo" src="https://static.vecteezy.com/system/resources/previews/005/542/677/original/modern-shape-plate-with-spoon-and-fork-logo-symbol-icon-graphic-design-illustration-idea-creative-vector.jpg" alt="Logo" ></img>
            </Link></div>
           
           <div>
            <a href="/#projects">Explore</a>
            {/* <Link to="/">Explore</Link> */}
            <Link to="/create-project">Start a project</Link>
            {isUserSignedIn?"Logged In":<Link to="/login">Login</Link>}
                {/* <Link to="/login">Login</Link> */}
           </div>
            
        </nav>
    )
}

export default Nav;