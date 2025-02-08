import book1 from "../assets/book-1.png";

function HomePage() {
    return (
        <div>
            <section className="home" id="home">
                <div className="row">
                    <div className="content">
                        <h3>It's the last day to save</h3>
                        <p>Courses are on sale now. Log in to your NoteJam account to see your discount.</p>
                        <a href="#" className="btn">Login now</a>
                    </div>

                    <div className="book-slider">
                        <a href="#" className="swiper-slide">
                            <img src={book1} alt="" />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default HomePage;