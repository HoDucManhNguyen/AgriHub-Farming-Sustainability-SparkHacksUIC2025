import aboutus from "../assets/about-us.jpeg";


function AboutUs() {
    return (
        <div>
            <section className="about-us" id="about-us">

                <h1 className="heading"> established about-us <span>Only the best for the best</span> </h1>

                <div className="row">

                    <div className="image">
                        <img src={aboutus} alt="" />
                    </div>

                    <div className="content">
                        <h3 className="title">Become a talented student</h3>
                        <p>With useful courses, diverse materials spanning all areas of expertise even the most specialized. The content is easy to understand, profound, full of creativity.</p>
                        <a href="#" className="btn">Explore Now</a>
                    </div>
                </div>

            </section>
        </div>
    )
}


export default AboutUs;