import React, { useEffect, useState } from 'react';
import axios from "axios"
import { Button, Checkbox, Form, Input } from 'antd';
import { useNavigate } from "react-router-dom";


const VerifyEmail = () => {
    const navigate = useNavigate();
    const [data, setData] = useState([])
    const onFinish = async (values) => {
        console.log('Success:', values);
        // const header = Authorization
        const res = await axios.post("https://hackthon-backend.vercel.app/api/auth/verifyEmail", values, {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("access_token")
            }
        });
        console.log(res.data);
        setData(res.data)
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    console.log(data)

    useEffect(() => {
        if (data?.data?.isVerified) {
            navigate("/login")
        }

    }, [navigate, data])
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
                label="otp"
                name="otp"
                rules={[
                    {
                        required: true,
                        message: 'Please input your otp!',
                    },
                ]}
            >
                <Input />
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
                    Verify
                </Button>
            </Form.Item>
        </Form>
    );
}
export default VerifyEmail;