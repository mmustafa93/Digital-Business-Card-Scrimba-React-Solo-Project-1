import React from "react"

export default function Info() {
    return (
        <header>
            <img src="../images/123.jpg" className="info--img" />
            <h1 className="info--title">Muhammad Mustafa</h1>
            <h4 className="info--role">Frontend Developer</h4>
            <p className="info--website">mmustafa.website</p>
            
            <div className="img--icons">
                <img src="../images/Email.png" />
                <img src="../images/LinkedIn.png" />
            </div>
        </header>
    )
}