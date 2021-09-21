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

	handleSubmit = async (event) => {
		event.preventDefault();
		const authType = this.props.signUp? "signup": "signin";
		try {
			await this.props.onAuth(authType, this.state);
			if (this.props.currentUser.isAuthenticated) {
				return this.props.history.push("/");
			}
		}
		catch(err) {
			return;
		}
		
	}

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		});
	}

	render() {
		const { error, heading, buttonText, signUp, history, removeError, currentUser } = this.props;
		history.listen(() => {
			removeError();
		})

		if (!currentUser.isAuthenticated) {
			return (
				<div className="row justify-content-md-center text-center">
					<div className="col-md-6">
						<form onSubmit={this.handleSubmit}>
							<h2>{heading}</h2>
							{error.message && (
								<div className="alert alert-danger">
									{error.message}
								</div>
							)}
							<label htmlFor="email">Email:</label>
							<input
								className="form-control mb-1"
								id="email"
								name="email"
								onChange={this.handleChange}
								type="text"
								required
							/>
							<label htmlFor="password">Password:</label>
							<input
								className="form-control mb-1"
								id="password"
								name="password"
								onChange={this.handleChange}
								type="password"
								required
							/>
							{signUp && (
								<div>
									<label htmlFor="username">Username:</label>
									<input
										className="form-control mb-1"
										id="username"
										name="username"
										onChange={this.handleChange}
										type="text"
										required
									/>
									<label htmlFor="profileImageUrl">Image URL:</label>
									<input
										className="form-control mb-1"
										id="profileImageUrl"
										name="profileImageUrl"
										onChange={this.handleChange}
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
		return (
			<div>
				<h1 className="text-center">Sorry, please Sign Out first if you want to Sign Up or Sign In again!</h1>
			</div>
		)
	}
}

export default Authform;
