import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function LandingPage() {
  return (
    <>
    <div style={{height:"100vh"}} className="row container mx-auto main" >
      <div className="col-lg-5 d-flex flex-column justify-content-center">
      <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
      <p style={{textAlign:'justify'}}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum minima excepturi vel voluptas earum ipsa laudantium recusandae, numquam maxime vero quia doloremque amet facilis illum nulla veritatis totam id fugit!
      </p>
      <Link to={'/home'}><button className='btn btn-info w-25 mt-4 '>Get Started</button></Link>
      </div>
      <div className='col'></div>
      <div className="col-lg-6">
        <img className='img-fluid w-100 ' src="https://c.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="" />
      </div>
    </div>
    <div className='mb-5 features'>
    <h3 className='text-center mb-5'>Features</h3>
    <div className='d-flex justify-content-evenly mb-5'>
    <Card style={{ width: '22rem'}}>
      <Card.Img style={{width:'400px',height:'400px'}} variant="top" src="https://i.pinimg.com/originals/53/97/7e/53977ec36a46d13a45ceeb5974b3d117.gif" />
      <Card.Body className='text-white'>
        <Card.Title>Managing Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '22rem' }}>
      <Card.Img style={{width:'400px',height:'400px'}}variant="top" src="https://i.gifer.com/Z23N.gif" />
      <Card.Body className='text-white'>
        <Card.Title>Categorize Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '22rem' }}>
      <Card.Img style={{width:'400px',height:'400px'}} variant="top" src="https://cdn.dribbble.com/users/497438/screenshots/2084032/xtyf_1.gif" />
      <Card.Body className='text-white'>
        <Card.Title>Watch History</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    </div>
    <div className='row mt-5 border rounded align-content-center p-5'>
    <div className='col-lg-5'>
    <h3 className='text-warning'>Simple Fast and Powerfull</h3>
    <p className='mt-5' style={{textAlign:'justify'}}> <span className='fs-5'>Play Everything</span>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione fuga eius, corrupti expedita provident ut consequatur exercitationem. Tempore quam, corrupti 
    </p>
    <p style={{textAlign:'justify'}}> <span className='fs-5'>Play Everything</span>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione fuga eius, corrupti expedita provident ut consequatur exercitationem. Tempore quam, corrupti 
    </p>
    <p style={{textAlign:'justify'}}> <span className='fs-5'>Play Everything</span>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione fuga eius, corrupti expedita provident ut consequatur exercitationem. Tempore quam, corrupti 
    </p>
    </div>
    <div className='col'></div>
    <div className='col-lg-6'>
    <iframe width="640" height="360" src="https://www.youtube.com/embed/bui3q02NK8Y?list=RDbui3q02NK8Y" title="Unakku Thaan - Music Video | Chithha | Siddharth | Santhosh Narayanan | Deeraj Vaidy | Etaki" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    </div>
    </>
  )
}

export default LandingPage