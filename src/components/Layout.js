import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Navbar from "./Navbar";

const Layout = styled.div`
  color: #FFFFFF;
`;

export default function PageLayout(props) {

    const [ user, setUser ] = useState({});

    useEffect(() => {
        setUser(sessionStorage.getItem("user"));
    })

    return (
        <Layout>
            <Navbar user={user}/>
            {props.children}
        </Layout>
    )
}
