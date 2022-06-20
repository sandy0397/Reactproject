import React from "react";

const About = () => {
    return(
        <>
            <div id="about" className="container pt-5">
                <div className="row">
                    <h2 className="text-center pt-2">About</h2>
                    <hr/>
                    <div className="col-md-5 col-lg-6 pt-5">
                        <img src="./image/1.jpg" alt="aboutimage" className="img-fluid"></img>
                    </div>
                    <div className="col-md-7 col-lg-6 pt-5">
                        <h3>About Us</h3>
                        <p className="pt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, suscipit? Quia magni in sit commodi officiis, cum corrupti error consectetur tenetur a repellat vero aliquid cupiditate voluptatem impedit, totam sapiente.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est eligendi enim minima dolorum hic ipsam quos reprehenderit. Tempora, eligendi quibusdam itaque nisi quia id. Corporis iste itaque consequatur asperiores quasi.</p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed, est! Aut odio consectetur nesciunt repellat sunt quisquam dignissimos vero porro, qui tenetur facere asperiores beatae quaerat, earum eveniet ipsam totam?</p>
                        <button className="btn btn-primary">See More</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;