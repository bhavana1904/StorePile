import React, { Component } from "react";
import './Form.css';
import { createNewUser } from "./SecurityActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";
class Register extends Component {
  
    constructor() {
      super();
  
      this.state = {
        username: "",
        fullName: "",
        password: "",
        confirmPassword: "",
        errors: {}
      };
      this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    }
  
    UNSAFE_componentWillReceiveProps (nextProps) {
    
        if (nextProps.errors) {
          this.setState({ errors: nextProps.errors });
        }
      }
    
   
    onSubmit(e) {
      e.preventDefault();
      const newUser = {
        username: this.state.username,
        fullName: this.state.fullName,
        password: this.state.password,
        confirmPassword: this.state.confirmPassword
      };
      this.props.createNewUser(newUser, this.props.history);
      console.log(newUser);
    }
  
    onChange(e) {
      this.setState({ [e.target.name]: e.target.value });
    }
  
    render() {
      const { errors } = this.state;
      return(
        <>
        <Navbar />
        <div className='form-container'>
        <span className='close-btn'></span>
        <div className='form-content-left'></div>
        <div className='form-content-right'>
      <form onSubmit={this.onSubmit} className='form' >
    
        <div className='form-inputs'>
          <label className='form-label'>Username</label>
          <input 
           required
           className='form-input'
            type='text'
            name='username'
            placeholder='Enter your username'
            value={this.state.username}
            onChange={this.onChange}
           
            />
            {errors.username && (
            <div>{errors.username}</div>
            )}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Full Name</label>
          <input
           required
            className='form-input'
            type='text'
            name='fullName'
            placeholder='Enter your Full Name'
            value={this.state.fullName}
            onChange={this.onChange}
          />
          {errors.fullName && (
                    <div>{errors.fullName}</div>
                  )}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Password</label>
          <input
           required
            className='form-input'
            type='password'
            name='password'
            placeholder='Enter your password'
            value={this.state.password}
            onChange={this.onChange}
          />
          {errors.password && (
            <div>{errors.password}</div>
          )}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Confirm Password</label>
          <input
           required
            className='form-input'
            type='password'
            name='confirmPassword'
            placeholder='Confirm your password'
            value={this.state.confirmPassword}
                    onChange={this.onChange}
                  />
                 {errors.confirmPassword && (
                    <div>
                      {errors.confirmPassword}
                    </div>
                  )}
        </div>
        <button className='form-input-btn' type='submit'>
          Sign up
        </button>
        <span className='form-input-login'>
          Already have an account?  <Link to="/login" >Login</Link>here
        </span>
      </form>
    </div></div>
    </> )
    }
}
Register.propTypes = {
    createNewUser: PropTypes.func.isRequired,
    //errors: PropTypes.object.isRequired
  };

  const mapStateToProps = (state) => {
    
   return{ errors: state.errors,security: state.security}
   
  };
  export default connect(
    mapStateToProps,
    { createNewUser }
  )(Register);