import React, { useEffect, useState } from 'react'
import {Row,Col} from 'react-bootstrap'
import VideoCard from './VideoCard';
import { getAllVideosAPI } from '../services/allAPI';

function View() {
  const [allVideos,setAllVideos]=useState([])
  useEffect(()=>{
    getAllUploadedVideos()
  },[])

  const getAllUploadedVideos= async ()=>{
    const result= await getAllVideosAPI()
    if(result.status===200){
      console.log(result);
      setAllVideos(result.data)
    }
    else{
      console.log("API Failed");
      setAllVideos([])
    }
  }
  return (
    <>
    <Row>
      {
        allVideos?.length>0?allVideos.map(video=>(
          <Col sm={12} md={6} lg={4} xl={3} className='mt-5'>
           <VideoCard video={video}/>
          </Col>
        )): <p className='fs-4 text-warning fw-bolder'>No Videos are uploaded Yet!!!</p>
      }

    </Row>
    </>
  )
}

export default View