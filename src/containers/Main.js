import React from "react";
import {Switch, Route, withRouter, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import Homepage from "../components/Homepage";
import AuthForm from "../components/AuthForm";
import { authUser } from "../store/actions/auth";
import { removeError } from "../store/actions/errors";
import withAuth from "../hocs/withAuth";
import MessageForm from "../containers/MessageForm";

const Main = props => {
    const {authUser, error, removeError, currentUser} = props;
    return (
        <div className="container-fluid">
            <Switch>
                <Route exact path="/" render={props => 
                    <Homepage currentUser={currentUser} {...props} />
                }/>
                <Route exact path="/signin" render={props => (
                    <AuthForm 
                        currentUser={currentUser}
                        removeError={removeError}
                        error={error}
                        buttonText="Log In"
                        heading="Welcome Back"
                        onAuth={authUser}
                        {...props}
                    />
                )} />
                <Route exact path="/signup" render={props => (
                    <AuthForm
                        currentUser={currentUser}
                        removeError={removeError}
                        signUp
                        error={error}
                        buttonText="Sign me up!"
                        heading="Join Warbler today"
                        onAuth={authUser}
                        {...props}
                    />
                )} />
                <Route 
                    path="/users/:userId/messages/new" 
                    component={withAuth(MessageForm)}
                />
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

export default withRouter(connect(mapStateToProps, {authUser, removeError}) (Main));