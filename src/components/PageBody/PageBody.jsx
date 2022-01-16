import React, { useState } from 'react'

// import ReactDOM from "react-dom";
import { Modal, Button } from "react-bootstrap";
// import ModalBody from "react-bootstrap/ModalBody";
// import ModalHeader from "react-bootstrap/ModalHeader";
// import ModalFooter from "react-bootstrap/ModalFooter";
// import ModalTitle from "react-bootstrap/ModalTitle";

import logo from "./Card/dummy.png";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./PageBody.css";
import "./Card/Card"
import Card from './Card/Card';

function PageBody() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [usersDataArray, setUsersDataArray] = useState([
        {
            name: 'ABC',
        }, {
            name: 'BMW',
        }
    ])

    const [input, setInput] = useState("");

    const gettingInput = (event) => {
        setInput(event.target.value);
        console.log(input)
    }

    const [newStudentInput, setnewStudentInput] = useState("");
    const newStudentInputSavingTemp = (event) => {
        setnewStudentInput(event.target.value);
    }

    const saveNewStudentFinal = () => {
        const newEntry = {
            name: newStudentInput,
        }
        const updatedCarsArray = [...usersDataArray, newEntry];

        setUsersDataArray(updatedCarsArray);
        handleClose();
    }

    const showAddModal = () => {
        handleShow();
    }

    return (
        <>
            <div className="mycontainer">
                <div className="Search">
                    <input type="text" name="input" id="input" value={input} onChange={gettingInput} placeholder="Enter the name of student" />
                </div>
                <div className="cardSection">
                    <div class="container">
                        <div class="row">
                            {
                                usersDataArray.map((value) => {
                                    if ((value.name).toLowerCase().includes(input)) {
                                        return (
                                            <div class="col-4">
                                                <Card
                                                    name={value.name}
                                                />
                                            </div>
                                        )
                                    }
                                })
                            }
                            <div class="col-4 plus_card d-flex justify-content-center align-self-center" onClick={showAddModal}>
                                <h1><b>+</b></h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal */}
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Add a student</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='imgDiv d-flex justify-content-center'>
                        <img src={logo} alt="pic" />
                    </div>
                    <div className='modal_inputs'>
                        <input type="file" id="imageFile" accept="image/*" />
                        <input type="text" name="newStudentInput" id="newStudentInput" value={newStudentInput} onChange={newStudentInputSavingTemp} placeholder="Enter the name of student" />
                    </div>
                    <hr />
                </Modal.Body>
                <Modal.Footer>
                    <button type="button" class="btn btn-primary" onClick={saveNewStudentFinal}>Add</button>
                    <button type="button" class="btn btn-secondary" onClick={handleClose}>Cancel</button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default PageBody
