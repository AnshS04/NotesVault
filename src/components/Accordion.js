import React from 'react'

const Accordion = () => {
    return (
        <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        <strong>About NotesVault</strong>
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        Our website is your go-to platform for seamlessly storing and managing your personal notes. It provides a user-friendly interface for users to create, update, delete, and retrieve notes, making it a one-stop solution for all your note-taking needs.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <strong>User-Centric Approach</strong>
                    </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        At the core of our website's design is a commitment to user convenience. We understand the importance of having access to your notes at any time, from anywhere. With our user accounts and login/signup authentication system, you can be assured that your notes are safe and readily available whenever you need them. The intuitive CRUD (Create, Read, Update, Delete) operations on notes ensure that you have full control over your notes, empowering you to organize and customize your digital notebook.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <strong>Security and Privacy</strong>
                    </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        We take the security and privacy of your notes seriously. Our website employs robust security measures to protect your data. User authentication ensures that only you have access to your notes, and our team is dedicated to keeping your information safe. Whether you're storing personal thoughts, professional ideas, or any other type of note, you can trust our website to keep them confidential and accessible whenever you require them.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Accordion