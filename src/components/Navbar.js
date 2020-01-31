import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  
  Button
} from 'reactstrap';

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/"><i className="fa fa-home" aria-hidden="true"></i> Makers</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/homekers/">Login </NavLink>
            </NavItem>
            <NavItem>
              <Button>Sign Up</Button>
            </NavItem>
            
          </Nav>
          
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;
