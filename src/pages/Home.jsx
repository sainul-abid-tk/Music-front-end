import React from 'react'
import Add from '../components/Add'
import View from '../components/View'
import Category from '../components/Category'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <>
    <div className="container mt-5 mb-5 d-flex justify-content-between ">
      <div className="add-videos">
       <Add/>
      </div>
      <Link to={'/history'} style={{textDecoration:'none',color:'white',fontSize:'20px'}}>Watch History <i class="fa-solid fa-clock-rotate-left"></i></Link>
    </div>
    <div className=" w-100 mt-5 container-fluid  mb-5 row">
    <div className="all-videos col-lg-9">
      <h2>All Uploaded Videos</h2>
      <View/>
    </div>
    <div className="category col-lg-3">
      <Category/>
    </div>
    </div> 
    </>
  )
}

export default Home