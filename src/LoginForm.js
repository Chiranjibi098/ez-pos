import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'; // Import withRouter if needed
import './LoginForm.css'; // Import your CSS file
import 'font-awesome/css/font-awesome.min.css';
import myImage from './Assets/one.png'; // Import your image
import logo from './Assets/two.png';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errorMessage: '',
      showPassword: false, // Initialize showPassword state
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  togglePasswordVisibility = () => {
    this.setState((prevState) => ({
      showPassword: !prevState.showPassword,
    }));
  };

  handleLogin = () => {
    const { email, password } = this.state;
    // Regular expressions for validation
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!email.match(emailRegex)) {
      this.setState({ errorMessage: 'Invalid email address' });
    } else if (!password.match(passwordRegex)) {
      this.setState({
        errorMessage:
          'Password must be at least 8 characters long with 1 capital letter and 1 special character.',
      });
      
      return false;
    } else {
      // Perform login logic here (e.g., send data to a server)
      this.setState({ errorMessage: '' });
      // Reset the form
      this.setState({ email: '', password: '' });
      // Redirect to the /home route after successful login
      this.props.history.push('/home');
      
      return true;
    }
  };

  render() {
    const { email, password, errorMessage, showPassword } = this.state;

    return (
      <div className="container-fluid">
        <div className="row d-flex justify-content-center align-items-center min-vh-100">
          <div className="col-md-6 login-form">
            <div>
              <div className='logo-section'>
                <img src={logo} alt=''/>
              </div>
              <h2 className='heading'><b>Welcome to Ez Pos</b></h2>
              <div className="mb-3">
                <label>Email address <span style={{color: 'red'}}>*</span></label>
                <input
                  type="email"
                  className="form-control input-field"
                  id="email"
                  name="email"
                  value={email}
                  onChange={this.handleInputChange}
                  placeholder='Enter your Ez pos email address'
                />
              </div>
              <div className="mb-3">
                <label>Password <span style={{color: 'red'}}>*</span></label>
                <div className="input-group cus-input-group">
                  <input
                    type={showPassword ? 'text' : 'password'} // Fixed
                    className="form-control input-field-pass"
                    id="password"
                    name="password"
                    value={password}
                    onChange={this.handleInputChange}
                    placeholder="Enter your Ez Pos password"
                  />
                  <span
                    className="input-group-addon"
                    onClick={this.togglePasswordVisibility}
                    style={{ cursor: 'pointer' }}
                  >
                    <i className={`fa ${showPassword ? 'fa-eye' : 'fa-eye-slash'}`} />
                  </span>
                </div>
              </div>
              {errorMessage && (
                <p className="error-message">{errorMessage}</p>
              )}
              <button
                className="btn btn-dark cus-button"
                onClick={this.handleLogin}
              >
              Sign In
              </button>
              <span className='forgot-span gradient-text'>Forgot your password?</span>
            </div>
          </div>
          <div className="col-md-6 img-section">
            <div className='img-section-back d-flex justify-content-center align-items-center'>
              <img
                src={myImage}
                alt="Your Image"
                className="img-fluid"
              />
            </div>
          </div>
          <div className='col-12 mobile-button text-center'>
            <button
                  className="btn btn-dark cus-button-mob col-12"
                  onClick={this.handleLogin}
                >
                Sign In
            </button>
            <br/>
            <span className='forgot-span-mob gradient-text '>Forgot your password?</span>
          </div>
        </div> 
      </div>
      
    );
  }
}
export default withRouter(LoginForm);