import React, { Component } from 'react';
import './Form.css';
 
export default class Details extends Component {
   constructor() {
        super();
      this.state = {
          accnumber: "",
          cvv: "",
          raccnumber: "",
          amount:""
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);}
      
      onSubmit(e) {
        e.preventDefault();
        const DetailRequest = {
          accnumber: this.state.accnumber,
          cvv: this.state.cvv,
          raccnumber:this.state.raccnumber,
          amount : this.state.amount
        };
    console.log(DetailRequest);
      }  
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
      }
       
  render() {
    return (
        <div className='form-container'>
        <span className='close-btn'></span>
        <div className='form-content-left'></div>
        <div className='form-content-right'>
      <form onSubmit={this.onSubmit} className='form' >
    
        <div className='form-inputs'>
          <label className='form-label'>Enter your account number</label>
          <input 
           required
           className='form-input'
            type='text'
            name='accnumber'
            placeholder='Enter your account number'
            value={this.state.accnumber}
            onChange={this.onChange.bind(this)}
           
            />
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Enter Your CVV</label>
          <input
           required
            className='form-input'
            type='text'
            name='cvv'
            placeholder='Enter your cvv'
            value={this.state.cvv}
            onChange={this.onChange.bind(this)}
          />
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Enter reciever's Account number</label>
          <input
           required
            className='form-input'
            type='text'
            name='raccnumber'
            placeholder='Enter receiver account number'
            value={this.state.raccnumber}
            onChange={this.onChange.bind(this)}
          />
         
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Enter Amount</label>
          <input
           required
            className='form-input'
            type='text'
            name='amount'
            placeholder='Enter Amount'
            value={this.state.amount}
            onChange={this.onChange.bind(this)}
          />
         
        </div>
        <button className='form-input-btn' type='submit'>
          DONE
        </button>
      </form>
    </div></div>
    )
  }
}
