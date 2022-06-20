import React from "react";

const Contact = () => {
    return (
        <>
        <div id="contact" className="container pt-5 pb-3">
            <div className="row">
                <h2 className="text-center">Contact Details</h2>
                <hr/>
                <div className="col-sm-3">

                </div>
                <div className="col-lg-6 pt-4">
                <form>
                <div className="mb-3">
                    <label for="exampleForm" className="form-label">Full Name</label>
                    <input type="email" className="form-control" id="exampleForm" placeholder="Sandeep Kumar" />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="sky7800@gmail.com" />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button type="submit" className="btn btn-outline-primary">Submit</button>
            </form>
                </div>
                <div className="col-sm-3">

                </div>
            </div>
        </div>
        </>
    )
}

export default Contact;