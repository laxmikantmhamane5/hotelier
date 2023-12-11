import { Button, Card, Carousel, Container, Row } from "react-bootstrap";
import { Header } from "./Header";
import img1 from './images/room1.jpg';
import img2 from './images/room2.jpg';
import img3 from './images/room3.jpg';
import img4 from './images/room4.jpg';
import img5 from './images/room5.jpg';
import p1 from './images/p1.jpg';
import p2 from './images/p2.jpg';
import p3 from './images/p3.jpg';
import p4 from './images/p4.jpg';
import p5 from './images/p5.jpg';
import p6 from './images/p6.jpg';

export function Dashboard(){
    return (
        <Container className="justify-content-center" >
            <Header text="Well Come to the Hotelier application, it developed to support the hotel owners to maintain the rooms booking"></Header>
            <Carousel>
      <Carousel.Item>
        <img src={img1} alt="" />
        <Carousel.Caption>
          <h3>Delux AC Sea Facing balcony</h3>
          <p>with great view of sea from balcony</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={img2} alt="" />
        <Carousel.Caption>
          <h3>Delux AC Room</h3>
          <p>with great good atmoshere and good view point of road side</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={img3} alt="" />
        <Carousel.Caption>
          <h3>AC Room</h3>
          <p>
            with one balcony of view point 
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={img4} alt="" />
        <Carousel.Caption>
          <h3>Old architecture AC Room</h3>
          <p>
            will feel like leaving in jungle
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={img5} alt="" />
        <Carousel.Caption>
          <h3>Non-AC Room</h3>
          <p>
            common room architecture with new thoughts
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <Row className="mt-3">
    <Card style={{ width: '13rem' }} className="ml-3">
      <Card.Img variant="top" src={p1} />
      <Card.Body>
        <Card.Title>Delux A/C Room</Card.Title>
        <Card.Text>
          Old Architecture Design <br />
          Price : 5000 /Day. <br />
          Beds : Double <br />
          Room size: 20 sq. m
          Complimentry Wifi.
        </Card.Text>
        
      </Card.Body>
    </Card>
    <Card style={{ width: '13rem' }}>
      <Card.Img variant="top" src={p2} />
      <Card.Body>
        <Card.Title>Luxurious A/C Room</Card.Title>
        <Card.Text>
        New Architecture Design <br />
          Price : 6000 /Day. <br />
          Beds : Double <br />
          Room size: 20 sq. m
          Complimentry Wifi.
        </Card.Text>
       
      </Card.Body>
    </Card>
    <Card style={{ width: '13rem' }}>
      <Card.Img variant="top" src={p5} />
      <Card.Body>
        <Card.Title>Super Delux A/C Room</Card.Title>
        <Card.Text>
          Sea facing Balcony <br />
          Price : 7000 /Day. <br />
          Beds : Double <br />
          Room size: 25 sq. m
          Complimentry Wifi.
        </Card.Text>
        
      </Card.Body>
    </Card>
    <Card style={{ width: '13rem' } }>
      <Card.Img variant="top" src={p3} />
      <Card.Body>
        <Card.Title>A/C Room</Card.Title>
        <Card.Text>
        Modern Design <br />
          Price : 6000 /Day. <br />
          Beds : Double <br />
          Room size: 20 sq. m
          Complimentry Wifi.
        </Card.Text>
        
      </Card.Body>
    </Card>
    <Card style={{ width: '13rem' } }>
      <Card.Img variant="top" src={p6} />
      <Card.Body>
        <Card.Title>Non-A/C Room</Card.Title>
        <Card.Text>
        JUNIOR SUITE<br />
          Price : 4000 /Day. <br />
          Beds : Double <br />
          Room size: 20 sq. m
          Complimentry Wifi.
        </Card.Text>
       
      </Card.Body>
    </Card>
    <Card style={{ width: '13rem' } }>
      <Card.Img variant="top" src={p4}/>
      <Card.Body>
        <Card.Title>Non-A/c Room</Card.Title>
        <Card.Text>
        JUNIOR SUITE<br />
          Price : 4000 /Day. <br />
          Beds : Double <br />
          Room size: 20 sq. m
          Complimentry Wifi.
        </Card.Text>
        
      </Card.Body>
    </Card>
    </Row>
        </Container>
        
    );
}