import React, {Component} from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import logo from "../images/warbler-logo.png";

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">
                        <img src={logo} alt="Warbler Home" />
                    </Link>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/signup" className="nav-link">Sign up</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/signin" className="nav-link">Log in</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
};

function mapStateToProps(state) {
    return {
        currentUser: state.currentUser
    }
}

export default connect(mapStateToProps, null) (Navbar);