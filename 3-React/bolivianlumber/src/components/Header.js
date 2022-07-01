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
import WoodLogo from '../app/assets/logo.png';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <Navbar className='navbar' dark color='primary' sticky='top' expand='md'>
            <NavbarBrand className='ms-5' href='/'>
                <img src={WoodLogo} alt='Lumber logo' className='float-start' />
            </NavbarBrand>
            <NavbarToggler onClick={() => setMenuOpen(!menuOpen)}/>
            <Collapse isOpen={menuOpen} navbar>
                <Nav className='ms-auto navBarNav' navbar>
                    <NavItem>
                        <NavLink className='nav-link navBarItems' to='/'>
                            HOME
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
 