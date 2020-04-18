import React, { Component } from 'react';
import axios from 'axios';

class Form extends Component {

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
            if (response.data.msg === 'success') {
                alert('Message sent');
                console.log(response.data.msg);
                this.resetForm();
            } else if (response.data.msg === 'fail') {
                alert('Message failed. Please fill out all entries.')
            }
        })
    }

    resetForm(){
        document.querySelector('.contact-form').reset();
    }

    render() {
        return(
            <div>
              <form className="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                <h2>Get In Touch</h2>
                <label htmlFor="name">Name</label>
                <input required type="text" className="form-control" id="name" />

                <label htmlFor="email">Email address</label>
                <input required type="email" className="form-control" id="email" aria-describedby="emailHelp" />

                <label htmlFor="message">Message</label>
                <textarea required className="form-control" rows="5" id="message" ></textarea>
       
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
        )
    }
}

export default Form; 