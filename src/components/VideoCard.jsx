import React,{useState} from 'react'
import { Card,Modal } from 'react-bootstrap'
function VideoCard() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <Card style={{ width: '18rem' }}>
      <Card.Img style={{cursor:'pointer'}} onClick={handleShow} height={'300px'} variant="top" src="https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/1e/d0/a8/1ed0a8aa-a8dd-2730-2481-96438f96ddfc/8903431892119_cover.jpg/1200x1200bf-60.jpg" />
      <Card.Body>
        <Card.Title className='d-flex justify-content-between align-items-center '>
          <h6>Tere Hawale</h6>
          <button className='btn text-danger'><i class="fa-solid fa-trash"></i></button>
        </Card.Title>
      </Card.Body>
    </Card>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Video Caption</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe className='w-100' height="400" src="https://www.youtube.com/embed/KUpwupYj_tY?autoplay=1" title="Tere Hawaale (Full Video) Laal Singh Chaddha | Aamir,Kareena | Arijit,Shilpa | Pritam,Amitabh,Advait" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </Modal.Body>
      </Modal>

    </>
  )
}

export default VideoCard