import React from 'react'
import { Modal } from 'react-bootstrap';

export default function ModalProp(props) {
    const{show=false,title, setShow, size = "md",children} = props;
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <Modal size={size}  show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{children}</Modal.Body>
        </Modal>
    )
}
