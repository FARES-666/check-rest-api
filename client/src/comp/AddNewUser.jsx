import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addNewUser } from '../redux/actions';

const AddNewUser = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        const newOne = {
            name, email, phone
        };
        dispatch(addNewUser(newOne));
        setName("");
        setEmail("");
        setPhone("");
    };
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <Button variant="primary" onClick={handleShow}>
                ADD USER
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>USER</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder='name' value={name} onChange={(e) => setName(e.target.value)} />
                        <br />
                        <br />
                        <input type="text" placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                        <br />
                        <br />
                        <input type="text" placeholder='phone' value={phone} onChange={(e) => setPhone(e.target.value)} />
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" type="submit" onClick={handleClose}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default AddNewUser;