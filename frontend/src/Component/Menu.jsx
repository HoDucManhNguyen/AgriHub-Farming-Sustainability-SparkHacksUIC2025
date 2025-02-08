
function Menu() {
    return (
        <div>
            <header class="header">

                <div id="menu-btn" ></div>

                <a href="#" class="logo">NoteJam</a>


                {/* #history, #menu, #location,... are used to jump to the section with the corresponding id. */}
                <nav class="navbar">
                    <a data-active="home" href="#">Home</a>
                    <a data-active="about" href="#">About</a>
                    <a data-active="category" href="#">Category</a>
                    <a data-active="discount" href="#">Discount</a>

                </nav>

                <a href="#" class="btn">Eco Grow</a>
            </header>
        </div>

    )
}




export default Menu;