import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import { Typography, Divider, Button, Form, Input, Card } from 'antd';

import PageLayout from "../components/Layout";
import { Row, Col } from "../styles"

const { Title, Paragraph, Text } = Typography;

const LandingDiv = styled.div`
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;


function NormalSignUp(props) {

    const history = useHistory();
    const { getFieldDecorator, getFieldsError } = props.form;
    const [confirmDirty, setConfirmDirty] = useState(false);


    useEffect(() => {
        props.form.validateFields();
    }, [])

    const handleConfirmBlur = e => {
        const { value } = e.target;
        setConfirmDirty({ confirmDirty: confirmDirty || !!value });
    };

    const compareToFirstPassword = (rule, value, callback) => {
        const { form } = props;
        if (value && value !== form.getFieldValue('password')) {
            callback('The two passwords are not consistent.');
        } else {
            callback();
        }
    };

    const validateToNextPassword = (rule, value, callback) => {
        const { form } = props;
        if (value.length >= 6) {
            if (value && confirmDirty) {
                form.validateFields(['confirm'], { force: true });
                callback();
            }
        } else {
            if (value.length != 0) {
                callback('Password is too short. Must be at least 6 characters.');
            } else {
                callback();
            }
        }
    };

    const handleSubmit = event => {
        event.preventDefault(); 
        props.form.validateFieldsAndScroll((err, values) => {
            try {
                sessionStorage.setItem("user", values["firstName"] + values["lastName"]);
                sessionStorage.setItem("firstName", values["firstName"]);
                sessionStorage.setItem("email", values["email"]);
                history.push('/question');
                // console.log('JSON: '+ JSON.stringify(data)); // JSON-string from `response.json()` call
            } catch (error) {
                console.log(error);
                alert(error);
            }
        });
    };


    const hasErrors = (fieldsError) => {
        return Object.keys(fieldsError).some(field => fieldsError[field]);
    }

    return (
        <PageLayout>
            <LandingDiv>
                <Title style={{ color: '#FFFFFF' }}>Sign Up</Title>
                <Card style={{ backgroundColor: '#756fa6', border: 0 }}>
                    <Form onSubmit={handleSubmit} style={{ width: "20vw" }}>
                        <Form.Item label="First Name" style={{ marginBottom: 0, color: "blue" }}>
                            {getFieldDecorator('firstName', {
                                rules: [
                                    {
                                        required: true,
                                        message: 'Please input your first name!',
                                    },
                                ],
                            })(<Input placeholder="John" />)}
                        </Form.Item>
                        <Form.Item label="Last Name" style={{ marginBottom: 0 }}>
                            {getFieldDecorator('lastName', {
                                rules: [
                                    {
                                        required: true,
                                        message: 'Please input your last name!',
                                    },
                                ],
                            })(<Input placeholder="Doe" />)}
                        </Form.Item>
                        <Form.Item label="E-mail" style={{ marginBottom: 0 }}>
                            {getFieldDecorator('email', {
                                rules: [
                                    {
                                        type: 'email',
                                        message: 'The input is not valid E-mail!',
                                    },
                                    {
                                        required: true,
                                        message: 'Please input your E-mail!',
                                    },
                                ],
                            })(<Input placeholder="email@mail.com" />)}
                        </Form.Item>
                        <Form.Item label="Password" hasFeedback style={{ marginBottom: 0 }}>
                            {getFieldDecorator('password', {
                                rules: [
                                    {
                                        required: true,
                                        message: 'Please input your password!',
                                    },
                                    {
                                        validator: validateToNextPassword,
                                    },
                                ],
                            })(<Input.Password placeholder="Password" />)}
                        </Form.Item>
                        <Form.Item label="Confirm Password" hasFeedback>
                            {getFieldDecorator('confirm', {
                                rules: [
                                    {
                                        required: true,
                                        message: 'Please confirm your password!',
                                    },
                                    {
                                        validator: compareToFirstPassword,
                                    },
                                ],
                            })(<Input.Password onBlur={handleConfirmBlur} placeholder="Password" />)}
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="register-form-button" disabled={hasErrors(getFieldsError())}>
                                Register
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </LandingDiv>
        </PageLayout>
    );
}

const SignUp = Form.create({ name: 'normal_register' })(NormalSignUp);

export default SignUp;