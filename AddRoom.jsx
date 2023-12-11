import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { Header } from "./Header";
import { useState } from "react";
import { saveRoom } from "../services/RoomService";

export function AddRoom() {
    const [formData,setFormData]=useState({rno:"",type:"",capacity:"",price:"",availabilty:""});
    const [isSubmitted,setIsSubmitted]=useState(false);

    const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value});
    }

    const handleSubmit=async(e)=>{
        e.preventDefault();
        try {
           const result= await saveRoom(formData);
           setFormData({rno:"",type:"",capacity:"",price:"",availability:""});
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
            <Header text="Add Room here"></Header>

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
                            <Form.Label>Room Type</Form.Label>
                            <Form.Control type="text" placeholder="Enter Room type" name="type" onKeyUp={handleChange} />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col lg={4}>
                        <Form.Group className="mb-3">
                            <Form.Label>Capacity</Form.Label>
                            <Form.Control type="text"  placeholder="Enter Capacity" name="capacity" onKeyUp={handleChange} />
                        </Form.Group>
                    </Col>
                    <Col lg={4}>
                        <Form.Group className="mb-3">
                            <Form.Label>Price</Form.Label>
                            <Form.Control type="text" placeholder="Enter Price" name="price" onKeyUp={handleChange} />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                <Col lg={4}>
                        <Form.Check
                            type="radio"
                            label="Available"
                            name="availability"
                            value="Available"
                            onchange={handleChange}
                        />
                        <Form.Check
                            type="radio"
                            label="Not-Available"
                            name="availability"
                            value="Not-Available"
                            onchange={handleChange}
                        />
                    </Col>
                    <Col lg={3}>
                        <Button variant="primary" type="submit">Register</Button>
                    </Col>
                </Row>
              
            </Form>
            <Row className="mt-3">
                <Col lg={4}>
                    {isSubmitted?<Alert variant="success">Room Added into the List</Alert>:null}
                </Col>
            </Row>
        </Container>
    );
}