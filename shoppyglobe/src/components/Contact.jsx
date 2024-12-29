import React from 'react';

const Contact = () => {
    return (
        <div className="contact-container">
            <h1>Contact Us</h1>
            <div className="contact-form">
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" rows="5" required></textarea>
                    </div>
                    <button type="submit" className="submit-btn">Send Message</button>
                </form>
            </div>
            <div className="contact-info">
                <h2>Our Contact Information</h2>
                <p>Email: support@shoppyglobe.com</p>
                <p>Phone: +1 (555) 123-4567</p>
                <p>Address: 123 Shoppy Street, Globe City</p>
            </div>
        </div>
    );
};

export default Contact;
