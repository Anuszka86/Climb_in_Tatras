import React from 'react';
import "../SCSS/_contact.scss"
import iconMail from "../assets/Mail-Photo-icon.png";
export function Contact() {
    return (
        <div id="contact" className="contact_bar">
            <p>strona przygotowana przez miłośniczkę Tatr ||</p>
            <a href = "mailto: ap.dabrow@egmail.com"><img height="40x" width="40px" src={iconMail}/></a>
        </div>
    )
}