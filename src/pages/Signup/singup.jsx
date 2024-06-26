import React from 'react';
import axios from "axios"
import { useQuery } from '@tanstack/react-query'

import { Button, Checkbox, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';

const Singup = () => { 
    
const navigate = useNavigate()
const onFinish = async (values) => {
    console.log('Success:', values);
    const res = await axios.post(
        "https://hackthon-backend.vercel.app/api/auth/signup",
        values,
    );

    localStorage.setItem("access_token", res?.data?.token)
    console.log(res.data, " ==>>. singup data...");
    if (res.status) {
        navigate("/verifyemail")
    }
};
const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

  return  (
        <Form
        name="basic"
        labelCol={{
            span: 8,
        }}
        wrapperCol={{
            span: 16,
        }}
        style={{
            maxWidth: 600,
        }}
        initialValues={{
            remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        >

        <Form.Item
            label="First Name"
            name="firstName"
            rules={[
                {
                    required: true,
                    message: 'Please input your First Name!',
                },
            ]}
            >
            <Input />
        </Form.Item>

        <Form.Item
            label="Last Name"
            name="lastName"
            rules={[
                {
                    required: true,
                    message: 'Please input your Last Name!',
                },
            ]}
            >
            <Input />
        </Form.Item>

        <Form.Item
            label="Username"
            name="userName"
            rules={[
                {
                    required: true,
                    message: 'Please input your username!',
                },
            ]}
            >
            <Input />
        </Form.Item>

        <Form.Item
            label="Email"
            name="email"
            rules={[
                {
                    required: true,
                    message: 'Please input your Email!',
                },
            ]}
            >
            <Input />
        </Form.Item>

        <Form.Item
            label="Password"
            name="password"
            rules={[
                {
                    required: true,
                    message: 'Please input your password!',
                },
            ]}
            >
            <Input.Password />
        </Form.Item>

        <Form.Item
            label="Conform Password"
            name="cPassword"
            rules={[
                {
                    required: true,
                    message: 'Please correct the password!',
                },
            ]}
            >
            <Input.Password />
        </Form.Item>

        <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
                offset: 8,
                span: 16,
            }}
            >
            <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item
            wrapperCol={{
                offset: 8,
                span: 16,
            }}
            >
            <Button type="primary" htmlType="submit">
                Signup
            </Button>
        </Form.Item>
    </Form>
);
}
export default Singup;