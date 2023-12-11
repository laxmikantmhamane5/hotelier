import { Button, Container, Modal, Table } from "react-bootstrap";
import { Header } from "./Header";
import { useEffect, useState } from "react";
import { deleteRoom, fetchRoom } from "../services/bookingService";
import { useNavigate } from "react-router-dom";

export function Booking() {

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
            const data = await fetchRoom();
             setStudents(data.booking);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        populateStudentState();
    }, []);

    const handleStudentDelete = async () => {
        try {
            await deleteRoom(selectedRoll);
            closeModalDialog();
            populateStudentState();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Container>
            
            <Header text="List of all Booking in the hotel"></Header>
            <Button variant="primary" onClick={()=>{navigate(`/booking-room`)}}>Add Booking</Button>
            {students.length !== 0 ? <Table className="mt-4">
                <thead>
                    <tr>
                        <th>Room no</th>
                        <th>Customer no</th>
                        <th>Advance Amount</th>
                        <th>Pending Amount</th>
                        <th>Number of Days</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        students.map((s) => {
                            return (
                                <tr>
                                    <td>{s.rno}</td>
                                    <td>{s.cno}</td>
                                    <td>{s.advanceAmout}</td>
                                    <td>{s.pendingAmout}</td>
                                    <td>{s.numOfDay}</td>
                                    <td>
                                        <Button variant="danger" onClick={() => {
                                            setSelectedRoll(s.rno);
                                            openModalDialog();
                                            
                                        }}>Delete</Button> &nbsp;&nbsp;&nbsp;
                                        <Button variant="primary" onClick={()=>{
                                            navigate(`/edit-booking/${s.rno}`)
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
                <Modal.Body>Do you really want to delete Room with Room number : {selectedRoll}?</Modal.Body>
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