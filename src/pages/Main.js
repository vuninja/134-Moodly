import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Calendar from 'react-calendar';

import { Button, Card, Modal, Input, notification  } from 'antd';

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
    const [text, setText] = useState("");

    const { Meta } = Card;
    const { TextArea } = Input;

    useEffect(() => {
        openNotification();
    },[]);

    const handleOpenModal = (value, event) => {
        setDate(value);
        setVisible(true);
    };

    const handleCloseModal = () => {
        setText("");
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

    const openNotification = () => {
        notification.open({
          message: 'Did you know?',
          description:
            'Scroll down a little to see the resources that we found to be helpful to users like you!',
          onClick: () => {
            console.log('Notification Clicked!');
          },
        });
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
                <TextArea rows={4} value={text} onChange={event => setText(event.target.value)}/>
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
                            }
                            onClick={() => window.open("https://www.forbes.com/sites/jennagoudreau/2013/03/20/12-ways-to-eliminate-stress-at-work/#5161c1f87f29", '_blank')}
                        >
                        <Meta title="12 Ways To Eliminate Stress At Work" description="www.forbes.com"
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
                            }
                            onClick={() => window.open("https://www.flexjobs.com/blog/post/how-to-meditate-at-work/", '_blank')}>
                            <Meta title="How to meditate at work" description="www.flexjobs.com"
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
                            }
                            onClick={() => window.open("https://us.foursigmatic.com/blog/why-am-i-so-tired", "_blank")}>
                            <Meta title="Why am I so tired?" description="us.foursigmatic.com"
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
