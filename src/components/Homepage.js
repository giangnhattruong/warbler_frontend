import React from 'react';
import {Link} from "react-router-dom";

const Homepage = ({currentUser}) => {
    if(!currentUser.isAuthenticated) {
        return (
            <div className="home-hero">
                <h1>Welcome to Warbler!</h1>
                <h4>You don't have an account?</h4>
                <Link to="/signup" className="btn btn-primary">
                    Sign up here
                </Link>
            </div>
        )
    }
    const {username} = currentUser.user;
    const greetUsername = username.toUpperCase()[0] + username.slice(1);
    return (
        <div>
            <h1 className="text-center">Hi {greetUsername}, how are you doing today?</h1>
        </div>
    )
};

export default Homepage;
