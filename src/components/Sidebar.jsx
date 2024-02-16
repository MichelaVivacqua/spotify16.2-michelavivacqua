import { Navbar, Nav, FormControl, Button } from "react-bootstrap";

const Sidebar = () => {
  return (
    <aside className="col col-2">
      <Navbar
        expand="md"
        fixed="left"
        className="justify-content-between"
        id="sidebar"
      >
        <div className="container flex-column align-items-start">
          <Navbar.Brand href="index.html">
            <img
              src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
              alt="Spotify Logo"
              width="131"
              height="40"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarNavAltMarkup" />
          <Navbar.Collapse id="navbarNavAltMarkup">
            <Nav className="navbar-nav">
              <ul>
                <li>
                  <Nav.Link
                    href="#"
                    className="nav-item nav-link d-flex align-items-center"
                  >
                    <i className="bi bi-house-door-fill m-2"></i> Home
                  </Nav.Link>
                </li>
                <li>
                  <Nav.Link
                    href="#"
                    className="nav-item nav-link d-flex align-items-center"
                  >
                    <i className="bi bi-book-fill m-2"></i> Your Library
                  </Nav.Link>
                </li>
                <li>
                  <div className="input-group mt-3">
                    <FormControl
                      type="text"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <div className="input-group-append">
                      <Button variant="outline-secondary" size="sm">
                        GO
                      </Button>
                    </div>
                  </div>
                </li>
              </ul>
            </Nav>
          </Navbar.Collapse>
        </div>
        <div className="nav-btn">
          <Button className="signup-btn" variant="light" type="button">
            Sign Up
          </Button>
          <Button className="login-btn" variant="dark" type="button">
            Login
          </Button>
          <a href="#">Cookie Policy</a> |<a href="#"> Privacy</a>
        </div>
      </Navbar>
    </aside>
  );
};

export default Sidebar;
