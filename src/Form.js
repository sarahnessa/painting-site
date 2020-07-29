import React, { Component } from 'react';
import emailjs from 'emailjs-com';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            message: ''
       };

        this.sendEmail = this.sendEmail.bind(this);
    }

    
    
    sendEmail(e) {
        e.preventDefault();


        emailjs.sendForm("default_service", "template_6wJbbcD6", '#contact-form', "user_myTDDhwO9wbroZMR3XfSE")
          .then((result) => {
              console.log(result.text);
              this.setState({ message: 'Your message has been sent.' });
          }, (error) => {
              console.log(error.text);
              this.setState({ message: 'Something went wrong. Please send an email to sarahnessaart@gmail.com.' });
          });
    }

    render() {
        return (
              <form id="contact-form" onSubmit={this.sendEmail}>
                <h2>Get In Touch</h2>
                <label htmlFor="name">Name</label>
                <input required type="text" className="form-control" id="name" name="user_name" />

                <label htmlFor="email">Email address</label>
                <input required type="email" className="form-control" id="email"  name="user_email" />

                <label htmlFor="message">Message</label>
                <textarea type="text" required className="form-control" rows="3" id="message" name="message_html"></textarea>
       
                <button type="submit" value="Send" className="btn btn-primary">Submit</button>
                <div id="result-message">{this.state.message}</div>
              </form>
        )
    }
}

export default Form; 