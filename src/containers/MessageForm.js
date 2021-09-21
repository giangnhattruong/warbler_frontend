import React, { Component } from "react";
import {connect} from "react-redux";
import {postNewMessage} from "../store/actions/messages";

class MessageForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ""
        };
    }

    handleNewMessage = event => {
        event.preventDefault();
        this.props.postNewMessage(this.state.message);
        this.setState({
            message: ""
        })
        this.props.history.push("/");
    }

    handleMessageInput = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        const {message} = this.state;
        return (
            <form
                className="input-group"
                onSubmit={this.handleNewMessage}
            >
                {this.props.error.message && (
                    <div className="alert alert-danger">
                        {this.props.error.message}
                    </div>
                )}
                <input
                    type="text"
                    className="form-control"
                    name="message"
                    value={message}
                    onChange={this.handleMessageInput}
                    required
                />
                <button className="btn btn-primary">Submit</button>
            </form>
        )
    }
}

function mapStateToProps(state) {
    return {
        error: state.error
    }
}

export default connect(mapStateToProps, {postNewMessage}) (MessageForm);