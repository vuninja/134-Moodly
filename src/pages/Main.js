import React, { useState } from "react";
import styled from "styled-components";
import Calendar from 'react-calendar';

import { Button, Card, Modal, Input } from 'antd';

import { Row, Col } from 'antd';
import '../Calendar.css';
import '../css/main.css';

import PageLayout from "../components/Layout";
import RatingImg from "../img/rating.png";
import OneImg from "../img/1.png";
import TwoImg from "../img/2.png";
import ThreeImg from "../img/3.png";
import FourImg from "../img/4.png";
import FiveImg from "../img/5.png";

export default function Home() {
    const [date, setDate] = useState(new Date());
    const [day5, setDay5] = useState([]);
    const [day4, setDay4] = useState([]);
    const [day3, setDay3] = useState([]);
    const [day2, setDay2] = useState([]);
    const [day1, setDay1] = useState([]);
    const [visible, setVisible] = useState(false);

    const { Meta } = Card;
    const { TextArea } = Input;

    const handleOpenModal = (value, event) => {
        setDate(value);
        setVisible(true);
    };

    const handleCloseModal = () => {
        setVisible(false)
    };

    const handleMoodClick = (rank) => {
        console.log(rank);
        let temp = [];
        if(rank === 1){
            temp = day1;
            temp.push(date.toISOString());
            setDay1(temp);
        }else if(rank === 2){
            temp = day2;
            temp.push(date.toISOString());
            setDay2(temp);
        }else if(rank === 3){
            temp = day3;
            temp.push(date.toISOString());
            setDay3(temp);
        }else if(rank === 4){
            temp = day4;
            temp.push(date.toISOString());
            setDay4(temp);
        }else if(rank === 5){
            temp = day5;
            temp.push(date.toISOString());
            setDay5(temp);
        }
    }

    return (
        <PageLayout>
            <Modal
                // title="How do you feel today?"
                visible={visible}
                onOk={handleCloseModal}
                onCancel={handleCloseModal}
            >
                <h2 style={{color: '#474747'}}>How do you feel today?</h2>
                <Button style={{borderWidth: 0, width: 95}} onClick={() => handleMoodClick(5)}> 
                    <img src={FiveImg}/>
                </Button>
                <Button style={{borderWidth: 0, width: 89}} onClick={() => handleMoodClick(4)}> 
                    <img src={FourImg}/>
                </Button>
                <Button style={{borderWidth: 0, width: 89}} onClick={() => handleMoodClick(3)}> 
                    <img src={ThreeImg}/>
                </Button>
                <Button style={{borderWidth: 0, width: 89}} onClick={() => handleMoodClick(2)}> 
                    <img src={TwoImg}/>
                </Button>
                <Button style={{borderWidth: 0, width: 89}} onClick={() => handleMoodClick(1)}> 
                    <img src={OneImg}/>
                </Button>
                <h4 style={{color: '#474747', marginTop: '4em'}}>Journal</h4>
                <TextArea rows={4}/>
            </Modal>

            <Row style={{marginTop: '8em'}}>
                <Col span={12} offset={6} style={{color: '#000000'}}>
                    <Calendar
                        calendarType={"US"}
                        onClickDay={handleOpenModal}
                        tileClassName={({activeStartDate, date, view}) => {
                            console.log(day5);
                            console.log(date);
                            console.log(day5.includes(date.toISOString()));
                            if(view === 'month'){
                                if(day1.includes(date.toISOString())){
                                    return 'one-dates';
                                }
                                if(day2.includes(date.toISOString())){
                                    return 'two-dates';
                                }
                                if(day3.includes(date.toISOString())){
                                    return 'three-dates';
                                }
                                if(day4.includes(date.toISOString())){
                                    return 'four-dates';
                                }
                                if(day5.includes(date.toISOString())){
                                    return 'five-dates';
                                }
                            }
                        }}/>
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
