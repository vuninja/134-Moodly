import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import { Typography, Divider, Button, Radio } from 'antd';

import PageLayout from "../components/Layout";
import { Row, Col } from "../styles"


const { Title, Paragraph, Text } = Typography;

const LandingDiv = styled.div`
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: left;
`;

export default function Survey() {

    const [ value, setValue ] = useState();
    const history = useHistory();

    const onChange = (e, index) => {
        // let temp = value;
        // temp[index] = e.target.value;
        // setValue(temp);
        setValue(e.target.value)
        console.log(value);
    }

    const radioStyle = {
        display: 'block',
        height: '30px',
        lineHeight: '30px',
        background: 'white',
        margin: '1vh',
        borderStyle: 'hidden',
        borderRadius: '5px',
        paddingLeft: '.7vw',
        width: '18vw',
        color: 'black'
      };

    return (
        <PageLayout>
            <LandingDiv>
                <Title style={{color: '#FFFFFF'}}>Welcome to our community {sessionStorage.getItem("firstName")}!</Title>
                <Title style={{color: '#FFFFFF', fontSize: "2rem", width: "25vw"}}>Questionnare</Title>
                <Row>
                    <Col size={3}/>
                    <Col size={2}>
                        <Typography style={{lineHeight: 1.75, color: '#FFFFFF'}}>
                            We want to get to know you a little better before you start using Moodly. This questionnare will help improve your results with Moodly. This will only take a few minutes.
                        </Typography>
                    </Col>
                    <Col size={3}/>
                </Row>
                <Row style={{marginTop: '1em'}}>
                    <Col size={3}/>
                    <Col size={2}>
                        <p>1. I have little interest or pleasure in doing things</p>
                        <Radio.Group onChange={(e) => onChange(e, 0)} value={value}>
                            <Radio style={radioStyle} value={1}>Not at all</Radio>
                            <Radio style={radioStyle} value={2}>Several days</Radio>
                            <Radio style={radioStyle} value={3}>More than half of a week</Radio>
                            <Radio style={radioStyle} value={4}>Nearly every day</Radio>
                            <Radio style={radioStyle} value={5}>Prefer not answer</Radio>
                        </Radio.Group>
                    </Col>
                    <Col size={3}/>
                </Row>
                <Row style={{marginTop: '1em'}}>
                    <Col size={3}/>
                    <Col size={2}>
                        <p>2. I feel down, depressed, or hopeless</p>
                        <Radio.Group disabled>
                            <Radio style={radioStyle} value={1}>Not at all</Radio>
                            <Radio style={radioStyle} value={2}>Several days</Radio>
                            <Radio style={radioStyle} value={3}>More than half of a week</Radio>
                            <Radio style={radioStyle} value={4}>Nearly every day</Radio>
                            <Radio style={radioStyle} value={5}>Prefer not answer</Radio>
                        </Radio.Group>
                    </Col>
                    <Col size={3}/>
                </Row>
                <Row style={{marginTop: '1em'}}>
                    <Col size={3}/>
                    <Col size={2}>
                        <p>3. I have trouble falling or staying asleep, or sleeping too much</p>
                        <Radio.Group disabled>
                            <Radio style={radioStyle} value={1}>Not at all</Radio>
                            <Radio style={radioStyle} value={2}>Several days</Radio>
                            <Radio style={radioStyle} value={3}>More than half of a week</Radio>
                            <Radio style={radioStyle} value={4}>Nearly every day</Radio>
                            <Radio style={radioStyle} value={5}>Prefer not answer</Radio>
                        </Radio.Group>
                    </Col>
                    <Col size={3}/>
                </Row>
                <Row style={{marginTop: '1em'}}>
                    <Col size={3}/>
                    <Col size={2}>
                        <p>4. I feel tired or having little energy</p>
                        <Radio.Group disabled>
                            <Radio style={radioStyle} value={1}>Not at all</Radio>
                            <Radio style={radioStyle} value={2}>Several days</Radio>
                            <Radio style={radioStyle} value={3}>More than half of a week</Radio>
                            <Radio style={radioStyle} value={4}>Nearly every day</Radio>
                            <Radio style={radioStyle} value={5}>Prefer not answer</Radio>
                        </Radio.Group>
                    </Col>
                    <Col size={3}/>
                </Row>
                <Row style={{marginTop: '1em'}}>
                    <Col size={3}/>
                    <Col size={2}>
                        <p>5. I have poor appetite or overeating</p>
                        <Radio.Group disabled>
                            <Radio style={radioStyle} value={1}>Not at all</Radio>
                            <Radio style={radioStyle} value={2}>Several days</Radio>
                            <Radio style={radioStyle} value={3}>More than half of a week</Radio>
                            <Radio style={radioStyle} value={4}>Nearly every day</Radio>
                            <Radio style={radioStyle} value={5}>Prefer not answer</Radio>
                        </Radio.Group>
                    </Col>
                    <Col size={3}/>
                </Row>
                <Row style={{marginTop: '1em'}}>
                    <Col size={3}/>
                    <Col size={2}>
                        <p>6. I feel bad about myself - or that I’m a failure or have let myself or my family down</p>
                        <Radio.Group disabled>
                            <Radio style={radioStyle} value={1}>Not at all</Radio>
                            <Radio style={radioStyle} value={2}>Several days</Radio>
                            <Radio style={radioStyle} value={3}>More than half of a week</Radio>
                            <Radio style={radioStyle} value={4}>Nearly every day</Radio>
                            <Radio style={radioStyle} value={5}>Prefer not answer</Radio>
                        </Radio.Group>
                    </Col>
                    <Col size={3}/>
                </Row>
                <Row style={{marginTop: '1em'}}>
                    <Col size={3}/>
                    <Col size={2}>
                        <p>7. I have trouble concentrating on things, such as reading the newspaper or watching television</p>
                        <Radio.Group disabled>
                            <Radio style={radioStyle} value={1}>Not at all</Radio>
                            <Radio style={radioStyle} value={2}>Several days</Radio>
                            <Radio style={radioStyle} value={3}>More than half of a week</Radio>
                            <Radio style={radioStyle} value={4}>Nearly every day</Radio>
                            <Radio style={radioStyle} value={5}>Prefer not answer</Radio>
                        </Radio.Group>
                    </Col>
                    <Col size={3}/>
                </Row>
                <Row style={{marginTop: '1em'}}>
                    <Col size={3}/>
                    <Col size={2}>
                        <p>8. I move or speak so slowly that other people could have noticed</p>
                        <Radio.Group disabled>
                            <Radio style={radioStyle} value={1}>Not at all</Radio>
                            <Radio style={radioStyle} value={2}>Several days</Radio>
                            <Radio style={radioStyle} value={3}>More than half of a week</Radio>
                            <Radio style={radioStyle} value={4}>Nearly every day</Radio>
                            <Radio style={radioStyle} value={5}>Prefer not answer</Radio>
                        </Radio.Group>
                    </Col>
                    <Col size={3}/>
                </Row>
                <Row style={{marginTop: '1em'}}>
                    <Col size={3}/>
                    <Col size={2}>
                        <p>9. I have thoughts that I would be better off dead, or by hurting myself</p>
                        <Radio.Group disabled>
                            <Radio style={radioStyle} value={1}>Not at all</Radio>
                            <Radio style={radioStyle} value={2}>Several days</Radio>
                            <Radio style={radioStyle} value={3}>More than half of a week</Radio>
                            <Radio style={radioStyle} value={4}>Nearly every day</Radio>
                            <Radio style={radioStyle} value={5}>Prefer not answer</Radio>
                        </Radio.Group>
                    </Col>
                    <Col size={3}/>
                </Row>
                <Row style={{marginTop: '1em'}}>
                    <Col size={3}/>
                    <Col size={2}>
                        <p>10. I have thoughts that you would be better off dead, or of hurting yourself</p>
                        <Radio.Group disabled>
                            <Radio style={radioStyle} value={1}>Not at all</Radio>
                            <Radio style={radioStyle} value={2}>Several days</Radio>
                            <Radio style={radioStyle} value={3}>More than half of a week</Radio>
                            <Radio style={radioStyle} value={4}>Nearly every day</Radio>
                            <Radio style={radioStyle} value={5}>Prefer not answer</Radio>
                        </Radio.Group>
                    </Col>
                    <Col size={3}/>
                </Row>
                <Row style={{marginTop: '1em', justifyContent: 'center'}}>
                    <Col size={3}/>
                    <Col size={2}>
                        <Button type="primary" style={{justifyContent: 'center', width: '77%'}} onClick={() => {history.push('/main'); window.scrollTo(0, 0);}}>Submit</Button>
                    </Col>
                    <Col size={3}/>
                </Row>
                <br/>
                <br/>
            </LandingDiv>
        </PageLayout>
    );
}
