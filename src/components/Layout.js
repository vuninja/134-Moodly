import React from "react";
import styled from "styled-components";

import Navbar from "./Navbar";

const Layout = styled.div`
  color: #FFFFFF;
`;

export default function PageLayout(props) {
    return (
        <Layout>
            <Navbar/>
            {props.children}
        </Layout>
    )
}
