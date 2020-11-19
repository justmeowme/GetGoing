import React, {useState} from 'react';
import {Button, Modal,} from "react-bootstrap";

const SubmitEventP = (props) => {
    const {showModal, showModalCallback} = props
    const [show, setShow] = useState(showModal);

    const handleClose = () => {
        setShow(false)
        showModalCallback(false)
    }

    return (
        <div>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title><h2>Thank you & Congratulations</h2></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <p>Thank you for taking a step for hosting an event, your event is live now.</p>
                        <p>Congratulations you have earned 30 points for hosting the event it will added to your account after the event.</p>
                        <p><b>Here are your next steps: </b></p>
                        <ul>
                            <li>On the event day mark the attendance who joined the event.</li>
                            <li>Record a live 30 sec video of the event.</li>
                        </ul>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Ok, I got it</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
export default SubmitEventP;