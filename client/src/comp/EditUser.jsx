import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { editUser } from '../redux/actions';

const EditUser = ({ user }) => {
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [phone, setPhone] = useState(user.phone);
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        const newOne = {
            name, email, phone, _id: user._id
        };
        dispatch(editUser(newOne));
    };
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <Button variant="primary" onClick={handleShow}>
                EDIT USER
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>USER</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
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
                    <Button variant="primary" type="submit" onClick={handleSubmit} >
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default EditUser;