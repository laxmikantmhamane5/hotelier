import { Button, Container, Modal, Table } from "react-bootstrap";
import { Header } from "./Header";
import { useEffect, useState } from "react";
import { deleteCustomer, fetchCustomer } from "../services/CustomerService";
import { useNavigate } from "react-router-dom";

export function CustomerList() {

    const [students, setStudents] = useState([]);
    const [showDialog, setShowDialog] = useState(false);
    const [selectedRoll,setSelectedRoll] = useState("");
    const navigate = useNavigate();

    const openModalDialog = () => {
        setShowDialog(true);
    }
    const closeModalDialog = () => {
        setShowDialog(false);
    }

    async function populateStudentState() {
        try {
            const data = await fetchCustomer();
             setStudents(data.customer);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        populateStudentState();
    }, []);

    const handleStudentDelete = async () => {
        try {
            await deleteCustomer(selectedRoll);
            closeModalDialog();
            populateStudentState();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Container>
            <Header text="List of all the Customers"></Header>
            <Button variant="primary" onClick={()=>{navigate(`/customer-registration`)}}>Add Customer</Button>
            {students.length !== 0 ? <Table className="mt-4">
                <thead>
                    <tr>
                        <th>Customer no</th>
                        <th>Name</th>
                        <th>Contact</th>
                        <th>Adhar no</th>
                        <th>Age</th>
                        <th>Number of persons</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        students.map((s) => {
                            return (
                                <tr>
                                    <td>{s.cno}</td>
                                    <td>{s.name}</td>
                                    <td>{s.contact}</td>
                                    <td>{s.adharno}</td>
                                    <td>{s.age}</td>
                                    <td>{s.numOfPersons}</td>
                                    <td>
                                        <Button variant="danger" onClick={() => {
                                            setSelectedRoll(s.cno);
                                            openModalDialog();
                                            
                                        }}>Delete</Button> &nbsp;&nbsp;&nbsp;
                                        <Button variant="primary" onClick={()=>{
                                            navigate(`/edit/${s.cno}`)
                                        }}>Edit</Button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table> : <p>No Customers found...!</p>}

            <Modal show={showDialog} onHide={closeModalDialog}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirmation</Modal.Title>
                </Modal.Header>
                <Modal.Body>Do you really want to delete Customer with customer number : {selectedRoll}?</Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={()=>{
                        handleStudentDelete();
                    }}>
                        Yes
                    </Button>
                    <Button variant="danger" onClick={closeModalDialog}>
                        No
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
}