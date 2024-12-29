import { useRef } from "react";
import { Container, Nav, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"

export default function NavBar() {
    const navbarRef = useRef();
    let collapsed = true;
    const handleCollapse = () => {
      collapsed = !collapsed;
      if (collapsed)
        navbarRef.current.style.height = "60px";
      else
        navbarRef.current.style.height = "300px";
    };
    return(
      <Navbar bg="dark" variant="dark" expand="lg" ref={navbarRef}> 
        <Container> 
          <Navbar.Brand href="/">Younes Apps </Navbar.Brand> 
          <Navbar.Toggle onClick={handleCollapse} aria-controls="basic-navbar-nav" /> 
          <Navbar.Collapse id="basic-navbar-nav"> 
            <Nav className="me-auto"> 
              <Nav.Link as={Link} to="/">
                  Accueil
              </Nav.Link>
              <Nav.Link as={Link} to="Calculatrice">
                  Calculator
              </Nav.Link>
              <Nav.Link as={Link} to="FormTp">
                  Formulaire
              </Nav.Link>
              <Nav.Link as={Link} to="FlagTp">
                  Country Flags
              </Nav.Link>
              <Nav.Link as={Link} to="/src/TodoList">
                  TodoList
              </Nav.Link>
              
            </Nav> 
          </Navbar.Collapse> 
        </Container> 
      </Navbar>
    );
}