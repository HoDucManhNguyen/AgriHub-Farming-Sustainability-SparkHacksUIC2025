import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './HomePage';
import AboutUs from './AboutUs';

function Menu() {
    return (
        <Router>
            <div>
                <header className="header">
                    <div id="menu-btn"></div>

                    <a href="#" className="logo"><i className="fa fa-seedling"></i>NoteJam</a>

                    {/* Navigation */}
                    <nav className="navbar">
                        <Link to="/home">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="#">Admin</Link>
                    </nav>

                    <a href="#" className="btn">Getting Started</a>
                </header>

                {/* Define Routes */}
                <Routes>
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/about" element={<AboutUs />} />
                </Routes>
            </div>
        </Router>
    );
}

export default Menu;
