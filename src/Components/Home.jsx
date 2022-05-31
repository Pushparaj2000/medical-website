import { Button, CardGroup } from 'react-bootstrap'
import React from 'react'
import { Card } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate=useNavigate()
  
  return (
    <div><Card className="bg-dark text-white">
    <Card.Img src="https://images.hedera.com/Background_v2_2022-03-02-231215_wqay.jpg?w=1685&auto=compress%2Cformat&fit=crop&fp-x=0.5&fp-y=0.5&dm=1646262736&s=7608e719d18cc373c678240ff669a336" alt="Card image" />
    <Card.ImgOverlay>
        <center>
        <Card.Title><b>Welcome to</b></Card.Title>
    <Card.Text>
      Medical updates  website  Register or Login  here for more updates!!.
    </Card.Text>
    <Button variant="light" onClick={()=>navigate('/SignUpPage')}><Link to="/SignUpPage"/>Register</Button> <Button variant="dark" onClick={()=>navigate('/Login')}>Login</Button>{' '}
        </center>
        <br/>
      
        <CardGroup>
  <Card>
    <Card.Img variant="top" src="https://i0.wp.com/post.healthline.com/wp-content/uploads/2022/05/female-male-covid-test-732x549-thumbnail-732x549.jpg?w=1155" />
    <Card.Body>
      
    </Card.Body>
    
  </Card>
  <Card.Title>{<br/>}</Card.Title>
  <Card>
     
    <Card.Img variant="top" src="https://i2.wp.com/www.medicinspires.com/wp-content/uploads/2020/06/How-to-Keep-Yourself-Updated-with-Medical-and-Health-News.jpg?fit=1688%2C1125&ssl=1" />
    <Card.Body>
      
    </Card.Body>
    
  </Card>
  <Card>
    <Card.Img variant="top" src="https://i.guim.co.uk/img/media/20491572b80293361199ca2fc95e49dfd85e1f42/0_236_5157_3094/master/5157.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=80ea7ebecd3f10fe721bd781e02184c3" />
    <Card.Body>
      
    </Card.Body>
    
  </Card>
  
</CardGroup>
    </Card.ImgOverlay>
  </Card></div>
  )
}
