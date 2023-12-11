import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { Header } from "./Header";
import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { fetchCustomerBycno, updateCustomer } from "../services/CustomerService";

export function CustomerEditForm() {
    const params=useParams();
    const [formData,setFormData]=useState({cno:"",name:"",contact:"",adharno:"",age:"",numOfPersons:""});
    const [isSubmitted,setIsSubmitted]=useState(false);
    const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value});
    }

    const handleSubmit=async(e)=>{
        e.preventDefault();
        try {
           await updateCustomer(formData,params.cno);
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
            const result=await fetchCustomerBycno(params.cno);
            
            setFormData(result.customer);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        populateStudentState();
    },[]);

    return (
        <Container>
            <Header text="Update Customer here"></Header>
            {formData?<Form onSubmit={handleSubmit}>
                <Row>
                    <Col lg={4}>
                        <Form.Group className="mb-3">
                            <Form.Label>CustomerId</Form.Label>
                            <Form.Control type="text" value={formData.cno} placeholder="Enter Customer id" name="cno" onChange={handleChange} />
                        </Form.Group>
                    </Col>
                    <Col lg={4}>
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" value={formData.name} placeholder="Enter name" name="name" onChange={handleChange} />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                <Col lg={4}>
                        <Form.Group className="mb-3">
                            <Form.Label>Contact</Form.Label>
                            <Form.Control type="text" value={formData.contact} placeholder="Enter name" name="contact" onChange={handleChange} />
                        </Form.Group>
                </Col>
                <Col lg={4}>
                        <Form.Group className="mb-3">
                            <Form.Label>Adhar Number</Form.Label>
                            <Form.Control type="text" value={formData.adharno} placeholder="Enter Adhar number" name="adharno" onChange={handleChange} />
                        </Form.Group>
                </Col>
                </Row>
                <Row>
                    <Col lg={4}>
                        <Form.Group className="mb-3">
                            <Form.Label>Age</Form.Label>
                            <Form.Control type="text" value={formData.age} placeholder="Enter Age" name="age" onChange={handleChange}/>
                        </Form.Group>
                    </Col>
                    <Col lg={4}>
                    <Form.Group className="mb-3">
                            <Form.Label>Number of Persons</Form.Label>
                            <Form.Control type="text" value={formData.numOfPersons} placeholder="Enter Age" name="numOfPersons" onChange={handleChange}/>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
               
                    <Col lg={3}>
                        <Button variant="primary" type="submit">Update</Button>
                    </Col>
                    
                </Row>
            </Form>:<p>No data found for given roll no.</p>}
            
            <Row className="mt-3">
                <Col lg={4}>
                    {isSubmitted?<Alert variant="success">Customer updated sucessfully....</Alert>:null}
                </Col>
            </Row>
        </Container>
    );
}