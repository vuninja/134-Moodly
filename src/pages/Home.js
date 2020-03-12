import React from "react";
import styled from "styled-components";

import { Typography, Divider, Button } from 'antd';

import PageLayout from "../components/Layout";
import { Row, Col } from "../styles"
import LandingImg from "../landingpic.png"

const { Title, Paragraph, Text } = Typography;

const LandingDiv = styled.div`
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export default function Home() {
    return (
        <PageLayout>
            <LandingDiv>
                <Title style={{color: '#FFFFFF'}}>Moodly</Title>
                <Row>
                    <Col size={3}/>
                    <Col size={2}>
                        <Typography style={{lineHeight: 1.75, color: '#FFFFFF'}}>
                            Moodly is more than just a journal. Track your moods, get readings/articles to help 
                            improve your mood, and become aware of your mental progress!
                        </Typography>
                    </Col>
                    <Col size={3}/>
                </Row>
                <Row style={{marginTop: '1em'}}>
                    <Col size={3}/>
                    <Col size={1}>
                        <Button block href="/sign-up" type="primary">Sign Up</Button>
                    </Col>
                    <Col size={.1}/>
                    <Col size={1}>
                        <Button block ghost>Learn More</Button>
                    </Col>
                    <Col size={3}/>
                </Row>
                <Row>
                    <Col size={1}/>
                    <img src={LandingImg}/>
                    <Col size={1}/>
                </Row>
            </LandingDiv>
        </PageLayout>
    );
}
