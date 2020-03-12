import React, { useState } from "react";
import styled from "styled-components";
import Calendar from 'react-calendar';

import { Button, Card, Modal, Input } from 'antd';

import { Row, Col } from 'antd';
import '../Calendar.css';

import PageLayout from "../components/Layout";
import RatingImg from "../img/rating.png";

export default function Home() {
    const [date, setDate] = useState(new Date());
    const [visible, setVisible] = useState(false);

    const { Meta } = Card;
    const { TextArea } = Input;

    const handleOpenModal = () => {
        setVisible(true)
    };

    const handleCloseModal = () => {
        setVisible(false)
    };

    return (
        <PageLayout>
            <Modal
                // title="How do you feel today?"
                visible={visible}
                onOk={handleCloseModal}
                onCancel={handleCloseModal}
            >
                <h2 style={{color: '#474747'}}>How do you feel today?</h2>
                <img src={RatingImg}/>
                <h4 style={{color: '#474747', marginTop: '4em'}}>Journal</h4>
                <TextArea rows={4}/>
            </Modal>

            <Row style={{marginTop: '8em'}}>
                <Col span={12} offset={6} style={{color: '#000000'}}>
                    <Calendar
                        calendarType={"US"}
                        onClickDay={handleOpenModal}/>
                </Col>
            </Row>
            <Row justify="center">
                <Col span={4} offset={10}>
                    <Button
                        onClick={handleOpenModal}
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
