import React from 'react';
import axios from "axios"
import { Button, Checkbox, Form, Input } from 'antd';
import { Link } from 'react-router-dom';
const onFinish = async (values) => {
    console.log('Success:', values);
    const res = await axios.post("https://hackthon-backend.vercel.app/api/auth/forgotPassword", values);
    console.log(res.data, "==>>> res.data");
    localStorage.setItem("reset_token", res?.data?.token);

};
const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};
const ForgotPassword = () => (
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
            wrapperCol={{
                offset: 8,
                span: 16,
            }}
        >
            <Button type="primary" htmlType="submit">
                Forgot Password
            </Button>
        </Form.Item>

    </Form>
);
export default ForgotPassword;