import React from 'react';
import {Link} from "react-router-dom";
import MessageTimeline from './MessageTimeline';

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
    const {username, profileImageUrl} = currentUser.user;
    return (
        <MessageTimeline
            profileImageUrl={profileImageUrl}
            username={username}
        />
    )
};

export default Homepage;
