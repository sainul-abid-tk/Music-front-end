import React from 'react'
import { Link } from 'react-router-dom'
import { Table } from 'react-bootstrap'
function WatchHistory() {
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
        <tr>
          <td>1</td>
          <td>Tere Hawale Song</td>
          <td><a href="https://youtu.be/KUpwupYj_tY" target='_blank'>https://youtu.be/KUpwupYj_tY</a></td>
          <td>13/12/2023</td>
          <td><button className='btn text-danger'><i class="fa-solid fa-trash"></i></button></td>
        </tr>
      </tbody>
    </Table>
    </div>
    </>
  )
}

export default WatchHistory