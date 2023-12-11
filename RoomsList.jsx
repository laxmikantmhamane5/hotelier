import { Button, Container, Modal, Table } from "react-bootstrap";
import { Header } from "./Header";
import { useEffect, useState } from "react";
import { deleteRoom, fetchRoom } from "../services/RoomService";
import { useNavigate } from "react-router-dom";

export function RoomsList() {

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
             setStudents(data.room);
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
            <Header text="List of all the Customers"></Header>
            <Button variant="primary" onClick={()=>{navigate(`/add-room`)}}>Add Room</Button>
            {students.length !== 0 ? <Table className="mt-4">
                <thead>
                    <tr>
                        <th>Room no</th>
                        <th>Room Type</th>
                        <th>Capacity</th>
                        <th>Price</th>
                        <th>Availability</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        students.map((s) => {
                            return (
                                <tr>
                                    <td>{s.rno}</td>
                                    <td>{s.type}</td>
                                    <td>{s.capacity}</td>
                                    <td>{s.price}</td>
                                    <td>{s.availability}</td>
                                    <td>
                                        <Button variant="danger" onClick={() => {
                                            setSelectedRoll(s.rno);
                                            openModalDialog();
                                            
                                        }}>Delete</Button> &nbsp;&nbsp;&nbsp;
                                        <Button variant="primary" onClick={()=>{
                                            navigate(`/edit-room/${s.rno}`)
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