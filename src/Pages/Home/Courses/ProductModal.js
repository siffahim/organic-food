import { Modal } from 'react-bootstrap';

export default function ProductModal({ show, handleClose, img }) {
    return (
        <>
            <Modal centered show={show} onHide={handleClose}>
                <Modal.Body>
                    <img width='100%' src={img} alt="" />
                </Modal.Body>
            </Modal>
        </>
    );
}

