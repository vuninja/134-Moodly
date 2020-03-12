import React from "react";
import styled from "styled-components";
import {
    Link
} from "react-router-dom";

import Home from "../pages/Home"
import SignUp from "../pages/SignUp";

const Nav = styled.nav`
  margin: 2em 2em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  > div > a {
    margin: 0 1em;
  }
`;

export default function Navbar(props) {

    const { user } = props;

    return (
        <Nav>
            <Link to="/">Moodly</Link>
            <div>
                <Link to="/">Account</Link>
                <Link to="/">About</Link>
                {user?<Link to="/">Hello {String(sessionStorage.getItem("firstName"))}</Link>:<Link to="sign-up">Sign Up</Link>}
            </div>

        </Nav>
    )
}
