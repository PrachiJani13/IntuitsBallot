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
          <NavLink to='/' activeStyle>
            Main Screen
          </NavLink>
          <NavLink to='/registervoters' activeStyle>
           Register Voter
          </NavLink>
          <NavLink to='/newelections' activeStyle>
           New Elections
          </NavLink>
          <NavLink to='/viewelections' activeStyle>
            View Elections
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default NavBar;
