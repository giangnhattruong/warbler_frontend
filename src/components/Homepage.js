import React from 'react';
import {Link} from "react-router-dom";

const Homepage = () => (
    <div className="home-hero">
        <h1>Welcome to Warbler!</h1>
        <h4>You don't have an account?</h4>
        <Link to="/signup" className="btn btn-primary">
            Sign up here
        </Link>
    </div>
)

export default Homepage
