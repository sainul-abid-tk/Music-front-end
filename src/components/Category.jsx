import React,{useState} from 'react'
import { Modal,Button,FloatingLabel,Form } from 'react-bootstrap';


function Category() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
     <div className='d-grid'>
     <Button variant="info" onClick={handleShow}>
        Add New Category
      </Button>
     </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Category Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <FloatingLabel
        controlId="floatingInput"
        label="Category Name"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="name@example.com" />
      </FloatingLabel>


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="info">Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Category