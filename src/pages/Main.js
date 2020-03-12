import React, { useState } from "react";
import styled from "styled-components";
import Calendar from 'react-calendar';

import { Typography, Divider, Button, Card } from 'antd';

import { Row, Col } from 'antd';
import '../Calendar.css';

import PageLayout from "../components/Layout";
import LandingImg from "../landingpic.png"

export default function Home() {
    const [date, setDate] = useState(new Date());

    const { Meta } = Card;

    const logDay = () => {
        console.log('clicked')
    };

    return (
        <PageLayout>
            <Row style={{marginTop: '8em'}}>
                <Col span={12} offset={6} style={{color: '#000000'}}>
                    <Calendar
                        calendarType={"US"}
                        onClickDay={logDay}/>
                </Col>
            </Row>
            <Row justify="center">
                <Col span={4} offset={10}>
                    <Button
                        onClick={logDay}
                        style={{marginTop: '2em'}}
                        block
                    >+ How I felt today</Button>
                </Col>
            </Row>

            <Row style={{marginTop: '8em', marginLeft: '10em', marginRight: '10em'}}>
                <h2 style={{marginLeft: '2em'}}>Good Resources</h2>
                <Row gutter={[64, 64]} style={{margin: 0}}>
                    <Col span={7}>
                        <Card
                            cover={
                                <img
                                    alt="example"
                                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                />
                            }>
                        <Meta title="Europe Street beat" description="www.instagram.com"
                            style={{background: "none"}}/>
                        </Card>
                    </Col>
                    <Col span={7}>
                        <Card
                            cover={
                                <img
                                    alt="example"
                                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                />
                            }>
                            <Meta title="Europe Street beat" description="www.instagram.com"
                                  style={{background: "none"}}/>
                        </Card>
                    </Col>
                    <Col span={7}>
                        <Card
                            cover={
                                <img
                                    alt="example"
                                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                />
                            }>
                            <Meta title="Europe Street beat" description="www.instagram.com"
                                  style={{background: "none"}}/>
                        </Card>
                    </Col>
                    <Col span={3}>
                        <h2>Pinned Links</h2>
                        <p>Apple</p>
                        <p>Apple</p>
                        <p>Apple</p>
                        <p>Apple</p>
                    </Col>
                </Row>
            </Row>
        </PageLayout>
    );
}
