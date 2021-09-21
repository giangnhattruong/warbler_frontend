import React, {Component} from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import logo from "../images/warbler-logo.png";
import {signOut} from "../store/actions/auth";

class Navbar extends Component {
    signOut = event => {
        event.preventDefault();
        this.props.signOut();
    }

    render() {
        const {currentUser} = this.props;
        return (
            <nav className="navbar navbar-expand">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">
                        <img src={logo} alt="Warbler Home" />
                    </Link>
                        {
                            !currentUser.isAuthenticated?
                            (
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link to="/signup" className="nav-link">Sign up</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/signin" className="nav-link">Sign in</Link>
                                    </li>
                                </ul>
                            ):
                            (
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link to={`/users/${currentUser.user.id}/messages/new`} className="nav-link">New Message</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link onClick={this.signOut} className="nav-link">Sign Out</Link>
                                    </li>
                                </ul>
                            )
                        }
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

export default connect(mapStateToProps, {signOut}) (Navbar);