import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { Header } from "./Header";
import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { fetchRoomByrno, updateRoom } from "../services/bookingService";

export function UpdateBooking() {
    const params=useParams();
    const [formData,setFormData]=useState({rno:"",cno:"",advanceAmout:"",pendingAmout:"",numOfDay:""});
    const [isSubmitted,setIsSubmitted]=useState(false);
    const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value});
    }

    const handleSubmit=async(e)=>{
        e.preventDefault();
        try {
           await updateRoom(formData,params.rno);
           setIsSubmitted(true);
           setTimeout(() => {
                setIsSubmitted(false);
           }, 2000);
           
        } catch (error) {
            console.log(error);
        }
    }

    const populateStudentState=async()=>{
        try {
            const result=await fetchRoomByrno(params.rno);
            
            setFormData(result.booking);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        populateStudentState();
    },[]);

    return (
        <Container>
            <Header text="Update Booking here"></Header>
            {formData?<Form onSubmit={handleSubmit}>
                <Row>
                    <Col lg={4}>
                        <Form.Group className="mb-3">
                            <Form.Label>Room Number</Form.Label>
                            <Form.Control type="text" value={formData.rno} placeholder="Enter Room no" name="rno" onChange={handleChange} />
                        </Form.Group>
                    </Col>
                    <Col lg={4}>
                        <Form.Group className="mb-3">
                            <Form.Label>Customer Number</Form.Label>
                            <Form.Control type="text" value={formData.cno} placeholder="Enter Customer number" name="cno" onChange={handleChange} />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col lg={4}>
                        <Form.Group className="mb-3">
                            <Form.Label>Advance Amount</Form.Label>
                            <Form.Control type="text" value={formData.advanceAmout}  placeholder="Enter Advance Amount given by customer" name="advanceAmout" onChange={handleChange} />
                        </Form.Group>
                    </Col>
                    <Col lg={4}>
                        <Form.Group className="mb-3">
                            <Form.Label>Pending Amount</Form.Label>
                            <Form.Control type="text" value={formData.pendingAmout} placeholder="Enter Pending Amount" name="pendingAmout" onChange={handleChange} />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                <Col lg={4}>
                <Form.Group className="mb-3">
                            <Form.Label>Number of days</Form.Label>
                            <Form.Control type="text" value={formData.numOfDay} placeholder="Enter Pending Amount" name="numOfDay" onKeyUp={handleChange} />
                        </Form.Group>
                    </Col>
                    <Col lg={3}>
                        <Button variant="primary" type="submit">Update Booking</Button>
                    </Col>
                </Row>
              
            </Form>:null};
            
            <Row className="mt-3">
                <Col lg={4}>
                    {isSubmitted?<Alert variant="success">Booking Updated Sucessfuly</Alert>:null}
                </Col>
            </Row>
            
        </Container>
    );
}