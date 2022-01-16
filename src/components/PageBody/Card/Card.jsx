import React, { useState } from 'react'
import logo from "./dummy.png";
import { Modal } from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';
import "./Card.css"

export default function Card(props) {

    // The present Value of the counter
    const [presentValue, setPresentValue] = useState(1);

    // UseState to manage state
    const [add_input, setAddInput] = useState(1);
    const [subtract_input, setSubtractInput] = useState(1);

    const [EditName, setEditName] = useState(props.name);
    const [nameDisplaying, setNameDisplaying] = useState(props.name);

    //Function to permmanently store the input to be addded and subtracted
    const setAddInputFunc = (event) => {
        setAddInput(event.target.value);
    }
    const setSubtractInputFunc = (event) => {
        setSubtractInput(event.target.value);
    }

    //Function to perfom addition or subtraction
    const performAddition = () => {
        setPresentValue(parseInt(presentValue) + parseInt(add_input));
    }
    const performSubtraction = () => {
        setPresentValue(parseInt(presentValue) - parseInt(subtract_input));
    }


    // Editing Functionality

    const EditingName = (event) => {
        setNameDisplaying(event.target.value)
    }

    const FinalizedChange = () => {
        setEditName(EditName);
        handleClose();
    }

    const EditMe = () => {
        handleShow();
    }

    const DeleteMe = () => {
        // document.getElementsByClassName("CardContainer").display = "none";
        // ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(this).parentNode);
    }


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>
            <div className="CardContainer">
                <div class="container">
                    <div class="row">
                        <div className="col-12">
                            <div className="dots_div d-flex">
                                <Dropdown>
                                    <Dropdown.Toggle variant="text-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                                            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"></path>
                                        </svg>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item onClick={EditMe}>
                                            Edit
                                        </Dropdown.Item>
                                        <Dropdown.Item onClick={DeleteMe}>
                                            Delete
                                        </Dropdown.Item>

                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="image d-flex justify-content-center">

                                <img className='profileImg' src={logo} alt="picture" />
                            </div>
                        </div>
                    </div>
                </div >

                <div className="Student_data d-flex flex-column">
                    <h3>{nameDisplaying}</h3>
                    <h3>{presentValue}</h3>
                </div>
                <div className="Card_bottom_1 d-flex justify-content-around">
                    <button onClick={performAddition} type="button" class="btn btn-primary">Add</button>
                    <button onClick={performSubtraction} type="button" class="btn btn-danger">Subtract</button>
                </div>
                <div className="Card_bottom_2 d-flex justify-content-around">
                    <input type="text" name="add_input" id="add_input" value={add_input} onChange={setAddInputFunc} />
                    <input type="text" name="subtract_input" id="subtract_input" value={subtract_input} onChange={setSubtractInputFunc} />
                </div>
            </div>

            {/* Modal To Edit the Card */}
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Update Student</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='imgDiv d-flex justify-content-center'>
                        <img src={logo} alt="pic" />
                    </div>
                    <div className='modal_inputs'>
                        <input type="file" id="imageFile" accept="image/*" />
                        <input type="text" name="newStudentInput" id="newStudentInput" value={nameDisplaying} onChange={EditingName} placeholder="Enter the name of student" />
                    </div>
                    <hr />
                </Modal.Body>
                <Modal.Footer>
                    <button type="button" class="btn btn-primary" onClick={FinalizedChange}>Add</button>
                    <button type="button" class="btn btn-secondary" onClick={handleClose}>Cancel</button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
