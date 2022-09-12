import React, { Component } from "react";
import './Form.css';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { login } from "./SecurityActions";
import Navbar from "./components/Navbar";

class Login extends Component{
 
  constructor() 
  {
        super();
        this.state = {
          username: "",
          password: "",
          errors: {}
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
      }
      UNSAFE_componentWillReceiveProps (nextProps) {
        if (nextProps.security.validToken) {
          this.props.history.push("/homepage");
        }
      }
    
      onSubmit(e) {
        e.preventDefault();
        const LoginRequest = {
          username: this.state.username,
          password: this.state.password
        };
        if(this.props.login(LoginRequest))
        {
        console.log(LoginRequest);}

      }    
      onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
      }
    
      render(){
        const { errors } = this.state;
        return (
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
          <label className='form-label'>Password</label>
          <input
               required
            className='form-input'
            type='password'
            name='password'
            placeholder='Enter your password'
            value={this.state.password}
            onChange={this.onChange}
          /></div>
          {errors.password && (
            <div>{errors.password}</div>
          )}
           <button className='form-input-btn' type='submit'>
          LOGIN
        </button>
        
          </form>
          </div>
          </div>
          </> )
      }
      
      }
      
       Login.propTypes = {
        login: PropTypes.func.isRequired,
        //errors: PropTypes.object.isRequired
      };
      
      const mapStateToProps = state => ({
        security: state.security,
        //errors: state.errors
      });
      
      export default connect(
        mapStateToProps,
        { login }
      )(Login);