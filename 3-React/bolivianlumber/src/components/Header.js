import { useState } from 'react';
import {
    Navbar,
    NavbarBrand,
    Collapse,
    NavbarToggler,
    Nav,
    NavItem,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
// import WoodLogo from '../app/assets/logo.png';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        if(window.scrollY >= 80) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };

    window.addEventListener('scroll', changeBackground);

    return (
        <Navbar className={navbar ? 'navbar active' : 'navbar'} dark sticky='top' expand='md'>
            <NavbarBrand className='ms-5' href='/'>
                {/* <img src={WoodLogo} alt='Lumber logo' className='float-start' /> */}
            </NavbarBrand>
            <NavbarToggler onClick={() => setMenuOpen(!menuOpen)}/>
            <Collapse isOpen={menuOpen} navbar>
                <Nav className='ms-auto navBarNav' navbar>
                    <NavItem>
                        <NavLink className='nav-link navBarItems' to='/'>
                            || BOLVIANLUMBERLLC ||
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link navBarItems' to='/inventory'>
                            INVENTORY
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link navBarItems' to='/about'>
                            ABOUT
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link navBarItems' to='/contact'>
                            CONTACT
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
};

export default Header;
 