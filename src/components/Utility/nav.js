import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Image } from "react-bootstrap";
import "../../css/style.css"
import { Link } from 'react-router-dom';
function NavScroll() {
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container fluid className='container mt-2'>
                <Navbar.Brand>
                    <Link to='/'><Image src='img/logoo.png'/></Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll" style={{ marginLeft:'500px' }}>
                    <Nav
                        className="me-5 my-2 my-lg-0 ms-5"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Link className='lin' to="/home">Home</Link>
                        <Link className='lin' to="/about">About</Link>
                        <Link className='lin' to="/services">Services</Link>
                        <Link className='lin' to="/latestnews">Latest news</Link>
                        <Link className='lin' to="/contactus">Contact Us</Link>
                        <Link href="#support" className='supportul'>Support</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavScroll;