import { NavLink } from "react-router-dom";
function Nav() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to="home">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="profile">Profile</NavLink>
                        </li>
                       
                        <li className="nav-item">
                            <NavLink className="nav-link" to="form">Formik</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="products" >Products</NavLink>
                            {/* <NavLink className="nav-link" to="products" onClick={showFilter('Products')}>Products</NavLink> */}
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;