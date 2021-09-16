import React, { Component } from 'react';

class Authform extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email           : '',
			username        : '',
			password        : '',
			profileImageUrl : ''
		};
	}

	handleSubmit = (event) => {
		event.preventDefault();
		const authType = this.props.signUp? "signup": "signin";
		this.props.onAuth(authType, this.state)
			.then(() => {
				console.log("U Ok")
			})
		this.setState({
			email           : '',
			username        : '',
			password        : '',
			profileImageUrl : ''
		});
	}

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		});
	}

	render() {
		const { email, username, password, profileImageUrl } = this.state;
		const { heading, buttonText, signUp } = this.props;
		return (
			<div className="row justify-content-md-center text-center">
				<div className="col-md-6">
					<form onSubmit={this.handleSubmit}>
						<h2>{heading}</h2>
						<label htmlFor="email">Email:</label>
						<input
							className="form-control mb-1"
							id="email"
							name="email"
							onChange={this.handleChange}
							value={email}
							type="text"
						/>
						<label htmlFor="password">Password:</label>
						<input
							className="form-control mb-1"
							id="password"
							name="password"
							onChange={this.handleChange}
							type="password"
						/>
                        {signUp && (
                            <div>
                                <label htmlFor="username">Username:</label>
                                <input
                                    className="form-control mb-1"
                                    id="username"
                                    name="username"
                                    onChange={this.handleChange}
                                    value={username}
                                    type="text"
                                />
                                <label htmlFor="profileImageUrl">Image URL:</label>
                                <input
                                    className="form-control mb-1"
                                    id="profileImageUrl"
                                    name="profileImageUrl"
                                    onChange={this.handleChange}
                                    value={profileImageUrl}
                                    type="text"
                                />
                            </div>
                        )}
						<button className="btn btn-primary w-100 mt-3">{buttonText}</button>
					</form>
				</div>
			</div>
		);
	}
}

export default Authform;
