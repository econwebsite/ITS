import React from 'react';
// FIX: Aliased Card component to avoid potential name collisions.
import { Row, Col, Card as AntdCard, Typography, Form, Input, Select, Button } from 'antd';
import { FaCamera, FaCloud, FaLocationArrow, FaImage, FaBox, FaCameraRetro } from 'react-icons/fa';
import { MdComputer } from 'react-icons/md';
import { AiOutlineLink } from 'react-icons/ai';
import '../solutions.css';
const { Title, Paragraph, Text } = Typography;

const StopArm = () => {
  const components = [
        { icon: <FaBox />, name: 'Rugged Compute Box' },
        { icon: <FaCameraRetro />, name: '4K-HDR Camera (Sturdecam88)' },
        { icon: <FaLocationArrow />, name: 'GPS & Lidar modules' },
        { icon: <FaImage />, name: 'Multi-Lane Capture Software' },
        { icon: <FaCloud />, name: 'Secure Data Archiving' },
        { icon: <AiOutlineLink />, name: 'Law Enforcement Integration' },
    ];

   return (
        <div className="overflow-hidden">
            {/* Hero Section */}
            <div className="position-relative bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/1920/1080?grayscale&blur=2&random=anpr')", height: '80vh' }}>
                <div className="position-absolute top-0 start-0 end-0 bottom-0" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}></div>
                <div className="position-relative h-100 d-flex align-items-center justify-content-center text-center px-4">
                    <div data-aos="fade-up">
                        <Title level={1} className="text-white display-4 fw-bold">Advanced ANPR & Traffic Management System</Title>
                    </div>
                </div>
            </div>

            {/* Intro Section */}
            <div className="py-5 bg-white">
                <div className="">
                    <Row justify="center">
                        <Col xs={24} md={22} lg={22} className="text-center">
                            <Paragraph className="text-justify mainPara" data-aos="fade-up">
                                At e-con Systems, we provide state-of-the-art Automatic Number-Plate Recognition (ANPR) solutions for law enforcement, tolling, and smart city applications. Our system is built for accuracy, speed, and reliability in any environment.
                            </Paragraph>
                            <Paragraph className="mt-3 text-justify mainPara" data-aos="fade-up" data-aos-delay="100">
                                Inaccurate plate reads and system downtime can compromise security and revenue. Our ANPR system utilizes advanced AI and high-resolution imaging to deliver exceptional read rates, day or night, in all weather conditions.
                            </Paragraph>
                             <Paragraph className="mt-3 text-justify mainPara" data-aos="fade-up" data-aos-delay="200">
                                Our modular ANPR system is designed for easy integration and scalability. It provides real-time alerts, detailed analytics, and seamless data sharing with existing platforms, offering the flexibility to build a solution tailored to your needs.
                            </Paragraph>
                        </Col>
                    </Row>
                </div>
            </div>

            {/* Cloud-Based Deployment Section */}
            <div className="py-5 bg-white">
                <div className=" px-4 px-lg-5">
                    {/* FIX: Replaced Card with AntdCard to resolve JSX element type error. */}
                    <div className="shadow-lg rounded-4 border-0 overflow-hidden" data-aos="zoom-in">
                        <Row align="middle" gutter={[32, 32]}>
                            <Col xs={24} md={12}>
                            <div className="p-5">
                                <Title level={3} className="!text-[#29a8de]" style={{color:'#29a8de'}}>Real-Time, Edge-to-Cloud Processing</Title>
                                <Paragraph className="mt-3 mainPara">
                                    Our system combines powerful edge processing for instant plate recognition with robust cloud infrastructure for data management and analysis. This hybrid approach ensures high performance and availability, supported by our expert team to handle the technical complexity.
                                </Paragraph>
                                </div>
                            </Col>
                            <Col xs={24} md={12}>
                                <img src="https://picsum.photos/800/600?random=3" alt="Cloud Deployment" className="w-100 h-100 object-cover"/>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>

            {/* Modular & Customizable Section */}
            <div className="py-5 bg-light">
                <div className="container-xl px-4 px-lg-5 text-center">
                    <Title level={2} className="!text-[#0d203f] !mb-3" style={{color:'#1f3b70'}} data-aos="fade-up">Modular & Customizable</Title>
                    <Paragraph className="fs-5 text-secondary mb-5" data-aos="fade-up" data-aos-delay="100">Choose only the components you need:</Paragraph>
                    <Row gutter={[24, 24]} justify="center">
                        {components.map((item, index) => (
                            <Col xs={24} sm={12} md={8} key={index} data-aos="fade-up" data-aos-delay={100 * (index + 1)}>
                                {/* FIX: Replaced Card with AntdCard to resolve JSX element type error. */}
                                <div className="h-100 d-flex flex-column align-items-center justify-content-center text-center p-4 rounded-4 shadow-hover transition-shadow duration-300 modularCard">
                                    {item.icon}
                                    <Text className="fw-semibold text-dark">{item.name}</Text>
                                </div>
                            </Col>
                        ))}
                    </Row>
                    <Paragraph className="mt-5 mainPara">
                                    Our system combines powerful edge processing for instant plate recognition with robust cloud infrastructure for data management and analysis. This hybrid approach ensures high performance and availability, supported by our expert team to handle the technical complexity.
                                </Paragraph>
                </div>
            </div>
            
            {/* Ready to Transform Section */}
             <div className="py-5 bg-white">
                <div className="container-xl px-4 px-lg-5">
                    <div className="text-center mb-5">
                        <Title level={2} className="!text-[#1f3b70]" style={{color:'#1f3b70'}} data-aos="fade-up">Ready to Enhance Your Traffic Intelligence?</Title>
                    </div>
                     <Row align="middle" gutter={[48, 32]}>
                        <Col xs={24} md={12} data-aos="fade-right">
                             <Title level={3}  style={{color:'#29a8de'}}>Upgrade Your ANPR Capabilities</Title>
                             <Paragraph className="mainPara mt-3 fs-6">
                                Whether you're implementing a new system or upgrading an existing one, our team is ready to assist. We help you select the right hardware and software to create a powerful, efficient, and reliable ANPR solution.
                            </Paragraph>
                            <Paragraph className="mainPara mt-3 fs-6">
                                Fill out the form below to request a demo, get pricing, or speak with one of our experts. We'll help you design the right solution for your needs — whether it's for a single entry point or a city-wide network.
                            </Paragraph>
                        </Col>
                        <Col xs={24} md={12} data-aos="fade-left">
                            <img src="https://picsum.photos/800/600?random=4" alt="Transform Workflow" className="w-100 h-auto object-cover rounded-4 shadow-lg"/>
                        </Col>
                    </Row>
                </div>
            </div>

            {/* Contact Us Section */}
            <div className="position-relative py-5 bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/1920/1080?grayscale&blur=1&random=anpr')" }}>
                <div className="position-absolute top-0 start-0 end-0 bottom-0" style={{ backgroundColor: 'rgba(13, 32, 63, 0.8)' }}></div>
                <div className="position-relative container-xl px-4 px-lg-5">
                    <Row gutter={[48, 32]} align="middle">
                        <Col xs={24} lg={10} data-aos="fade-right">
                            <Title level={2} className="text-white">Contact Us</Title>
                            <Paragraph className="text-light fs-4">
                                Do You Have Any Questions?
                            </Paragraph>
                        </Col>
                        <Col xs={24} lg={14} data-aos="fade-left">
                            {/* FIX: Replaced Card with AntdCard to resolve JSX element type error. */}
                            <AntdCard className="!p-4 !p-md-5 !rounded-4 shadow-lg">
                                <Form layout="vertical" name="contact-form">
                                    <Row gutter={16}>
                                        <Col xs={24} sm={12}>
                                            <Form.Item name="name" rules={[{ required: true, message: 'Please input your name!' }]}>
                                                <Input placeholder="Name *" size="large" className="!rounded-pill !px-4"/>
                                            </Form.Item>
                                        </Col>
                                        <Col xs={24} sm={12}>
                                            <Form.Item name="company" rules={[{ required: true, message: 'Please input your company name!' }]}>
                                                <Input placeholder="Company Name *" size="large" className="!rounded-pill !px-4"/>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                    <Row gutter={16}>
                                        <Col xs={24} sm={12}>
                                            <Form.Item name="email" rules={[{ required: true, type: 'email', message: 'Please input a valid email!' }]}>
                                                <Input placeholder="Yourname@company.com*" size="large" className="!rounded-pill !px-4"/>
                                            </Form.Item>
                                        </Col>
                                        <Col xs={24} sm={12}>
                                            <Form.Item name="phone">
                                                <Input placeholder="Contact Number" size="large" className="!rounded-pill !px-4"/>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                     <Row gutter={16}>
                                        <Col xs={24} sm={12}>
                                            <Form.Item name="country" initialValue="usa">
                                                <Select size="large" className="custom-select" options={[
                                                    { value: 'usa', label: 'USA' },
                                                    { value: 'canada', label: 'Canada' },
                                                ]}/>
                                            </Form.Item>
                                        </Col>
                                        <Col xs={24} sm={12}>
                                            <Form.Item name="state" initialValue="alaska">
                                                <Select size="large" className="custom-select" options={[
                                                    { value: 'alaska', label: 'Alaska' },
                                                    { value: 'california', label: 'California' },
                                                ]}/>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                    <Form.Item>
                                        <Input placeholder="How did you hear about us?" size="large" className="!rounded-pill !px-4"/>
                                    </Form.Item>
                                    <Form.Item>
                                        <Input.TextArea placeholder="Describe your queries" rows={4} className="!rounded-3 !px-4"/>
                                    </Form.Item>
                                    <Form.Item>
                                        <Button htmlType="submit" size="large" className="w-100 !rounded-pill !bg-[#0d203f] hover:!bg-[#00a9e0] !border-0 !text-white !fw-bold">
                                            Submit
                                        </Button>
                                    </Form.Item>
                                </Form>
                                <style dangerouslySetInnerHTML={{__html: `
                                    .custom-select .ant-select-selector {
                                        border-radius: 50rem !important;
                                        padding-left: 1rem !important;
                                        padding-right: 1rem !important;
                                    }
                                `}}></style>
                            </AntdCard>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
};

export default StopArm;