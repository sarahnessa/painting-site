import React, { Component } from 'react';
import axios from 'axios';

class ContactForm extends Component{
  
    handleSubmit(e){
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        axios({
            method: "POST", 
            url:"http://localhost:3002/send", 
            data: {
                name: name,   
                email: email,  
                messsage: message
            }
        }).then((response)=>{
            if (response.data.msg === 'success'){
                alert("Message Sent."); 
                this.resetForm()
            }else if(response.data.msg === 'fail'){
                alert("Message failed to send.")
            }
        })
    }

    resetForm(){
        document.querySelector('.contact-form').reset();
    }

    render(){
        return(
            <form className="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" id="name" value="name" />

                <label htmlFor="email">Email address</label>
                <input type="email" className="form-control" id="email" value="email" aria-describedby="emailHelp" />

                <label htmlFor="message">Message</label>
                <textarea className="form-control" rows="5" id="message" value="message"></textarea>
       
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        )
    }
}

export default ContactForm; 