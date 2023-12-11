import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { Header } from "./Header";
import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { fetchRoomByrno, updateRoom } from "../services/RoomService";

export function EditRoomDetails() {
    const params=useParams();
    const [formData,setFormData]=useState({rno:"",type:"",capacity:"",price:"",availabilty:""});
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
            
            setFormData(result.room);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        populateStudentState();
    },[]);

    return (
        <Container>
            <Header text="Update Room Deatils here"></Header>
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
                            <Form.Label>Room Type</Form.Label>
                            <Form.Control type="text" value={formData.type} placeholder="Enter Room type" name="type" onChange={handleChange} />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col lg={4}>
                        <Form.Group className="mb-3">
                            <Form.Label>Capacity</Form.Label>
                            <Form.Control type="text" value={formData.capacity}  placeholder="Enter Capacity" name="capacity" onChange={handleChange} />
                        </Form.Group>
                    </Col>
                    <Col lg={4}>
                        <Form.Group className="mb-3">
                            <Form.Label>Price</Form.Label>
                            <Form.Control type="text" value={formData.price} placeholder="Enter Price" name="price" onChange={handleChange} />
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
                            onChange={handleChange}
                            
                        />
                        <Form.Check
                            type="radio"
                            label="Not-Available"
                            name="availability"
                            value="Not-Available"
                            onChange={handleChange}
                        />
                    </Col>
                    <Col lg={3}>
                        <Button variant="primary" type="submit">Register</Button>
                    </Col>
                </Row>
                </Form>:null};
            
            <Row className="mt-3">
                <Col lg={4}>
                    {isSubmitted?<Alert variant="success">Room Added into the List</Alert>:null}
                </Col>
            </Row>
            
        </Container>
    );
}