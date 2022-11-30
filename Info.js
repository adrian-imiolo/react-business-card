import React from "react"

export default function Info() {
    return (
        <div className="info">
            <div className="profile-pic-container">
            </div>
            <div className="info-background">
                <h1>Adrian Imioło</h1>
                <h3>Frontend Developer</h3>
                <p>adrian.website</p>
                <div className="buttons">
                    <a href="#" className="email-btn"><i className="fa-solid fa-envelope"></i>Email</a>
                    <a href="#" className="linkedin-btn"><i className="fa-brands fa-linkedin"></i>LinkedIn</a>
                </div>
            </div>
        </div>
    )
}