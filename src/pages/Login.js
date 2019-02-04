import React, { Component } from "react";
import axios from "axios";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      message: ""
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    const { email, password } = this.state;
    axios
      .post("http://localhost:3000/users/signin", { email, password })
      .then(res => {
        const token = res.data.data.token;
        localStorage.setItem("token", token);
        this.props.history.push("/");
        console.log(res);
      })
      .catch(err => {
        this.setState({ message: "Pastikan Email dan Password Anda Benar" });
        console.log(err);
      });
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <h1>Login</h1>

        {this.state.message !== "" && (
          <div class="alert alert-danger" role="alert">
            {this.state.message}
          </div>
        )}

        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              className="form-control"
              name="email"
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              className="form-control"
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
          <button className="btn btn-primary" type="submit">
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
