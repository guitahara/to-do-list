import React from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import {
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
    Collapse
} from 'reactstrap';
import { authActions } from '../../redux/actions/index'

function NavbarComponent() {

    const dispatch = useDispatch();
    const location = useLocation();

    const handleClick = () => {
        const { from } = location.state || { from: { pathname: "/" } };
        dispatch(authActions.logout(from));
    }

    return (
        <Navbar color="light" light expand="md">
            <NavbarBrand>EDirectInsure TODO List</NavbarBrand>

            <Nav className="ml-auto" navbar>
                <UncontrolledDropdown nav inNavbar className=''>
                    <DropdownToggle nav caret>
                        Username
        </DropdownToggle>
                    <DropdownMenu right>
                        <DropdownItem onClick={handleClick}>
                            Logout
        </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
            </Nav>
        </Navbar>
    );
}

export { NavbarComponent };