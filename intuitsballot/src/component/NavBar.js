import React from 'react';
import {
  Nav,
  NavLink,
  NavMenu,
} from './NavbarElements';
  
const NavBar = () => {
  return (
    <>
      <Nav>
        {/* <Bars /> */}
        <NavMenu>
          <NavLink exact to='/' activeStyle>
            Main Screen
          </NavLink>
          <NavLink to='/registervoter' activeStyle>
           Register Voter
          </NavLink>
          <NavLink to='/newelections' activeStyle>
           New Elections
          </NavLink>
          <NavLink to='/viewelections' activeStyle>
            View Elections
          </NavLink>
          <NavLink to='/registeredvoter' activeStyle>
            Registered Voter
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default NavBar;
