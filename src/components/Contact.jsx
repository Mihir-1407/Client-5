import '../styles/Contact.css';


import React from 'react'

const Contact = () => {
  return (
    <>
      <section id="contact">
        <h1 class="h-primary center">Contact Us</h1>
        <div id="contact-box">
            <form action="">
                <div class="form-group">
                    <label for="name:">Name:</label>
                    <input type="text" name="name" id="name" placeholder="Enter your name"/>
                </div>

                <div class="form-group">
                    <label for="Email:">Email:</label>
                    <input type="email" name="email" id="email" placeholder="Enter your Email"/>
                </div>

                <div class="form-group">
                    <label for="Phone:">Phone Number:</label>
                    <input type="phone" name="phone" id="phone" placeholder="Enter your Phone Number"/>
                </div>

                <div class="form-group">
                    <label for="name:">Message:</label>
                    <textarea name="message" id="message" cols="30" rows="10"
                        placeholder="Enter the message you want to say"></textarea>
                </div>

            </form>
        </div>
    </section>


    </>
  )
}

export default Contact