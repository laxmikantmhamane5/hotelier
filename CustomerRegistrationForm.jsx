import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { Header } from "./Header";
import { useState } from "react";
import { saveCustomer } from "../services/CustomerService";

export function CustomerRegistrationForm() {
    const [formData,setFormData]=useState({cno:"",name:"",contact:"",adharno:"",age:"",numOfPersons:""});
    const [isSubmitted,setIsSubmitted]=useState(false);

    const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value});
    }

    const handleSubmit=async(e)=>{
        e.preventDefault();
        try {
           const result= await saveCustomer(formData);
           setFormData({cno:"",name:"",contact:"",adharno:"",age:"",numOfPersons:""});
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
            <Header text="Register student here"></Header>
{/* value={isSubmitted?formData.id:null} */}
            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col lg={4}>
                        <Form.Group className="mb-3">
                            <Form.Label>Customer Number</Form.Label>
                            <Form.Control type="text"  placeholder="Enter Customer no" name="cno" onKeyUp={handleChange} />
                        </Form.Group>
                    </Col>
                    <Col lg={4}>
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter name" name="name" onKeyUp={handleChange} />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col lg={4}>
                        <Form.Group className="mb-3">
                            <Form.Label>Contact</Form.Label>
                            <Form.Control type="text"  placeholder="Enter Contact number" name="contact" onKeyUp={handleChange} />
                        </Form.Group>
                    </Col>
                    <Col lg={4}>
                        <Form.Group className="mb-3">
                            <Form.Label>Adhar number</Form.Label>
                            <Form.Control type="text" placeholder="Enter adhar num" name="adharno" onKeyUp={handleChange} />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col lg={4}>
                        <Form.Group className="mb-3">
                            <Form.Label>Age</Form.Label>
                            <Form.Control type="text" placeholder="Enter marks" name="age" onKeyUp={handleChange}/>
                        </Form.Group>
                    </Col>
                    <Col lg={4}>
                        <Form.Group className="mb-3">
                            <Form.Label>Number of persons</Form.Label>
                            <Form.Control type="text" placeholder="Enter number of persons" name="numOfPersons" onKeyUp={handleChange}/>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                
                    <Col lg={3}>
                        <Button variant="primary" type="submit">Register</Button>
                    </Col>
                    
                </Row>
            </Form>
            <Row className="mt-3">
                <Col lg={4}>
                    {isSubmitted?<Alert variant="success">Customer Registered</Alert>:null}
                </Col>
            </Row>
        </Container>
    );
}