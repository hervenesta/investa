import React from 'react';
import Map from './Map';
import './contact.css';

function Contact() {
    return (
        <div id="contact">
            <div className="contact-form bg-primary p-2">
                <h2 className="m-heading">Contact Us</h2>
                <p>Please use the form below to contact us</p>
                <form> 
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" name="name" id="name" placeholder="Enter name"></input>
                    </div>
                </form>
                <form>
                <div className="form-group">
                    <label >Email</label>
                    <input type="email" name="email" id="email" placeholder="Enter email"></input>
                </div>
                </form>
                <form>
                    <div className="form-group">
                        <label>Phone Number</label>
                        <input type="text" name="phone" id="phone" placeholder="Enter phone number"></input>
                    </div>
                </form>
                <form>
                    <div className="form-group">
                        <label>Name</label>
                        <textarea type="text" name="message" id="message" placeholder="Enter message"></textarea>
                    </div>
                    <input type="submit" value="send" className="btn btn-dark"></input>
                </form>
            </div>
            <div className="map">
                <Map />
            </div>

            {/* LOCAL JS FILE */}
            {/* <script src="./js/main.js"></script>

            <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCjrzoeG3I7K55ko4nYVyTD23t53PIEn_Y&callback=initMap"
            async defer></script> */}
        </div>
    );
}

export default Contact;