import React from 'react';
import {
  Nav,
  NavLink,
  NavMenu,
} from './NavbarElements';
import ToolHeader from './generics/ToolHeader';
  
const NavBar = () => {
  return (
    <>
      <ToolHeader label="Intuit's Ballot" slogan="The ballot is stronger than the bullet!"/>
      <Nav>
        {/* <Bars /> */}
        <NavMenu>
          <NavLink exact to='/' activeStyle>
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
