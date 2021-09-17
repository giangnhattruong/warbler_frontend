import React from "react";
import {Switch, Route, withRouter, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import Homepage from "../components/Homepage";
import AuthForm from "../components/AuthForm";
import { authUser } from "../store/actions/auth";

const Main = props => {
    const {authUser, error} = props;
    return (
        <div className="container">
            <Switch>
                <Route exact path="/" render={props => <Homepage {...props} />} />
                <Route exact path="/signin" render={props => (
                    <AuthForm 
                        error={error}
                        buttonText="Log In"
                        heading="Welcome Back"
                        onAuth={authUser}
                        {...props}
                    />
                )} />
                <Route exact path="/signup" render={props => (
                    <AuthForm
                        signUp
                        error={error}
                        buttonText="Sign me up!"
                        heading="Join Warbler today"
                        onAuth={authUser}
                        {...props}
                    />
                )} />
            </Switch>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        currentUser: state.currentUser,
        error: state.error
    }
}

export default withRouter(connect(mapStateToProps, {authUser}) (Main));