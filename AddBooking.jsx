import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { Header } from "./Header";
import { useState } from "react";
import { saveRoom } from "../services/bookingService";

export function AddBooking() {
    const [formData,setFormData]=useState({rno:"",cno:"",advanceAmout:"",pendingAmout:"",numOfDay:""});
    const [isSubmitted,setIsSubmitted]=useState(false);

    const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value});
    }

    const handleSubmit=async(e)=>{
        e.preventDefault();
        try {
           const result= await saveRoom(formData);
           setFormData({rno:"",cno:"",advanceAmout:"",pendingAmout:"",numOfDay:""});
           setIsSubmitted(true);
           setTimeout(()=>{
            setIsSubmitted(false);
           },1500);
           console.log(result.message);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Container>
            <Header text="Add New Booking here"></Header>

            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col lg={4}>
                        <Form.Group className="mb-3">
                            <Form.Label>Room Number</Form.Label>
                            <Form.Control type="text"  placeholder="Enter Room no" name="rno" onKeyUp={handleChange} />
                        </Form.Group>
                    </Col>
                    <Col lg={4}>
                        <Form.Group className="mb-3">
                            <Form.Label>Customer Number</Form.Label>
                            <Form.Control type="text" placeholder="Enter Customer number" name="cno" onKeyUp={handleChange} />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col lg={4}>
                        <Form.Group className="mb-3">
                            <Form.Label>Advance Amount</Form.Label>
                            <Form.Control type="text"  placeholder="Enter Advance Amount given by customer" name="advanceAmout" onKeyUp={handleChange} />
                        </Form.Group>
                    </Col>
                    <Col lg={4}>
                        <Form.Group className="mb-3">
                            <Form.Label>Pending Amount</Form.Label>
                            <Form.Control type="text" placeholder="Enter Pending Amount" name="pendingAmout" onKeyUp={handleChange} />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                <Col lg={4}>
                <Form.Group className="mb-3">
                            <Form.Label>Number of days</Form.Label>
                            <Form.Control type="text" placeholder="Enter Pending Amount" name="numOfDay" onKeyUp={handleChange} />
                        </Form.Group>
                    </Col>
                    <Col lg={3}>
                        <Button variant="primary" type="submit">Add Booking</Button>
                    </Col>
                </Row>
              
            </Form>
            <Row className="mt-3">
                <Col lg={4}>
                    {isSubmitted?<Alert variant="success">Booking is added into the List</Alert>:null}
                </Col>
            </Row>
        </Container>
    );
}