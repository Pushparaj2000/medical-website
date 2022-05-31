import React from 'react'
import { Card, Table } from 'react-bootstrap'

export default function Statistics() {
  return (
    <div>
        
        <Card className="bg-dark text-white">
  <Card.Img src="https://images.hedera.com/Background_v2_2022-03-02-231215_wqay.jpg?w=1685&auto=compress%2Cformat&fit=crop&fp-x=0.5&fp-y=0.5&dm=1646262736&s=7608e719d18cc373c678240ff669a336" alt="Card image" />
  <Card.ImgOverlay><h2>Statistics</h2><br/>
  <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>no.</th>
      <th>Health Issues</th>
      <th>Chennai</th>
      <th>Tamilnadu</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Covid-19</td>
      <td>10%</td>
      <td>8%</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Malaria</td>
      <td>3%</td>
      <td>1%</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Chicken pocks</td>
      <td>3%</td>
      <td>3%</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Thyphoid</td>
      <td>3%</td>
      <td>2%</td>
    </tr>
    
  </tbody>
</Table>
  </Card.ImgOverlay>
</Card>
    </div>
  )
}
