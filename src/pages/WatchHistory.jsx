import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Table } from 'react-bootstrap'
import { getHistoryAPI, removeHistoryAPI } from '../services/allAPI'
function WatchHistory() {
  const [history,setHistory]=useState([])
  useEffect(()=>{
    getHistory()
  },[])
  const getHistory =async ()=>{
    const result = await getHistoryAPI()
    if(result.status==200){
      setHistory(result.data)
    }
    else{
      console.log("API Failed");
      console.log(result.message);
    }
  }
  const removeHistoryItem= async(id)=>{
    await removeHistoryAPI(id)
    getHistory()
  }
  return (
    <>
    <div className='container p-5 '>
    <div className='d-flex justify-content-between p-5'>
    <h2>Watch History</h2>
    <Link to={'/home'} className='text-decoration-none fs-5 '><i class="fa-solid fa-arrow-left"></i>Back to Home</Link>
    </div>
    <Table  bgcolor='black' className='w-100'>
      <thead>
        <tr>
          <th>#</th>
          <th>Caption</th>
          <th>URL</th>
          <th>Time Stamp</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
       {
        history?.length>0?history.map((video,index)=>(
          <tr>
          <td>{index+1}</td>
          <td>{video?.caption}</td>
          <td><a href={video?.link} target='_blank'>{video?.link}</a></td>
          <td>{video.timeStamp}</td>
          <td><button onClick={()=>removeHistoryItem(video?.id)} className='btn text-danger'><i class="fa-solid fa-trash"></i></button></td>
        </tr>
        )): <p className='text-danger fs-3 fw-bold'>Your Watch History is Empty!!</p>
       }
      </tbody>
    </Table>
    </div>
    </>
  )
}

export default WatchHistory