import { useNavigate, useParams } from 'react-router-dom'

import React from 'react';
import axios from "axios"
import { Button, Form, Input } from 'antd';
import { Link } from 'react-router-dom';

const ResetPasswrod = () => {
    const { token } = useParams();
    console.log(token, " ==>>> para ");
    const navigate = useNavigate();
    const onFinish = async (values) => {
        console.log('Success:', values);
        values = { ...values, token }
        console.log('Success: with token', values);
        const res = await axios.put("https://hackthon-backend.vercel.app/api/auth/resetPassword", { ...values, token });
        console.log(res.data, "===>>> password reset")
        if (res.data) {
            navigate("/login")
        }
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
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
                label="Password"
                name="newPassword"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Password!',
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Conform Password"
                name="confirmNewPassword"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Conform Password!',
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
                    ResetPasswrod
                </Button>
            </Form.Item>


        </Form>
    );
}
export default ResetPasswrod;
