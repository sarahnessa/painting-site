import React, { Component } from 'react'


class Contact extends Component {
  	constructor(props) {
	  super(props)

	  this.state = {
	   name: '',
	   email: '',
	   subject: '',
	   message: ''
	  }

	  this.handleChange = this.handleChange.bind(this)
	  this.handleSubmit = this.handleSubmit.bind(this)
	 }

  	handleChange = (e) => {
	 let newState = {}

	 newState[e.target.name] = e.target.value

	 this.setState(newState)
	}

	handleSubmit = (e, message) => {
		 e.preventDefault()

		 let formData = {
		  formSender: this.state.name,
		  formEmail: this.state.email,
		  formSubject: this.state.subject,
		  formMessage: this.state.message
		 }

		 if (formData.formSender.length < 1 || formData.formEmail.length < 1 || formData.formSubject.length < 1 || formData.formMessage.length < 1) {
		  return false
		 }

		  this.setState({
		   firstName: '',
		   lastName: '',
		   email: '',
		   message: ''
		  })
		 }


  render() {
    return (
   			<div>

   					<div class="emailAddress">
   						<a href="mailto:sarahnessaart@gmail.com">sarahnessaart@gmail.com</a>
   					</div>
				   {/* <form id='gform' onSubmit={this.handleSubmit} method="POST" action="https://script.google.com/macros/s/AKfycbyoyC0aTKwMfQcyGJVam8X10pOQHOs6sTHCoQW8/exec">


				     <input id='name' placeholder='Name' className='form-input' name='name' type='text' required onChange={this.handleChange} value={this.state.name} />


				     <input id='email' placeholder='Email' className='form-input' name='email' type='email' required onChange={this.handleChange} value={this.state.email} />


				     <textarea rows="7" placeholder='Message' id='message' className='form-textarea' name='message' required onChange={this.handleChange}></textarea>


				     <input id='button' className='btn' value="Send" type='submit' placeholder='Send' />

				   </form>

				   <div style={{display: 'none'}} id="thankyou_message">
					   <h2><em>Thank you</em> for contacting me.<br/>
					   I will get back to you as soon as possible.</h2>
				   </div> */}
		   </div>
    );
  }
}
 
export default Contact;

