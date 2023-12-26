import React,{useState} from 'react'
import { Card,Modal } from 'react-bootstrap'
import { addVideoToHistoryAPI, removeVideoAPI } from '../services/allAPI';
function VideoCard({video,setDeleteVideoResponse,insideCategory}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () => {
    setShow(true)
    // generate data to store in history
    const {caption,link}=video
    let today =new Date()
    let timeStamp = new Intl.DateTimeFormat('en-us',{year:'numeric',month:'2-digit',
    day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit'}).format(today)
    let videoHistory={caption,link,timeStamp}
    // make API call
    await addVideoToHistoryAPI(videoHistory)
  };
  const removeVideo = async(id)=>{
    await removeVideoAPI(id)
    setDeleteVideoResponse(true)
  }
  const dragStarted=(e,id)=>{
    console.log(id);
    e.dataTransfer.setData("videoId",id)
  } 
  return (
    <>
    <Card draggable onDragStart={e=>dragStarted(e,video?.id)} style={{ width: '18rem' }}>
      <Card.Img style={{cursor:'pointer'}} onClick={handleShow} height={'270px'} variant="top" src={video?.url} />
      <Card.Body>
        <Card.Title className='d-flex justify-content-between align-items-center '>
          <h6>{video?.caption}</h6>
          {insideCategory?null: <button onClick={()=>removeVideo(video?.id)} className='btn text-danger'>
            <i class="fa-solid fa-trash"></i></button>}
        </Card.Title>
      </Card.Body>
    </Card>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{video?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe className='w-100' height="400" src={`${video?.link}?autoplay=1`} title={video?.caption} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </Modal.Body>
      </Modal>

    </>
  )
}

export default VideoCard